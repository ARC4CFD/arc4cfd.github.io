---
title: Allocating Resources and Running Jobs Using SLURM
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Successfully allocate resources using SLURM.
2. Run jobs in interactive mode.
3. Run jobs by submitting batch scripts.
4. Use various software (CFD included) on the cluster.
:::

There are two basic ways of allocating resources and running jobs on the cluster using SLURM:
- Requesting various compute resources on which to run your job interactively (supervised).
- Requesting various compute resources on which to run non-interactive jobs (unsupervised).

## Running a job in interactive mode

To allocate resources on the cluster interactively we will use the SLURM command `salloc`. The `salloc` command is used to allocate a SLURM job allocation, which is a set of resources (nodes), possibly with some set of constraints (e.g. number of processors per node, or memory per processor). When `salloc` successfully obtains the requested allocation, it then runs the command specified by the user. Finally, when the user specified command is complete, `salloc` relinquishes the job allocation. 

From the login node type:
```bash
salloc -n 1 --time=0:10:0 --mem-per-cpu=3g --account=account-name
```
As you notice, the `salloc` command requires a few user inputs:
- `-n`: the number of processors.
- `--time`: for how long you are requesting the resources. The format is `hh:mm:ss`.
- `--mem-per-cpu`: amount of memory to assign to each CPU. This is a very important parameter, and it will be clear in later sections of this course how to properly select it.

All these parameters will decide how much time it will take for the queue manager to allocate the resources. For instance, requesting 2 processors will take much less time than requesting 512, and a 10 minutes long job will be allocated much faster than a 20 hours one. Upon pressing enter, the output should be similar to this:

```bash
    salloc: Pending job allocation 24928305
    salloc: job 24928305 queued and waiting for resources
    salloc: job 24928305 has been allocated resources
    salloc: Granted job allocation 24928305
    salloc: Waiting for resource configuration
    salloc: Nodes nc10433 are ready for job
```

In these steps SLURM tells us that a job with ID 24928305 has been created for us, that it is in the queue and waiting for resources, and that the resources have been found and granted. Finally, the resources have been configured and a node nc10433 is now ready for our task. You will also notice that the command line prompt name has changed to:

```bash
[username@nc10433 ~]$
```

This means we are not sitting anymore on the login node, but we are now **on a compute node** whose identifier is nc10433. One might ask: **now that I am into a compute node, how do I run my code that is sitting in my `/home` directory?** And here is a beautiful feature of a computer cluster: upon running the `ls` command from the compute node, you will realize that although you are on a complete different node you are still able to see the exact same files and directories you had in your home. That is due to the architecture of the cluster which works with a **distributed shared memory** system. That means you will be able to run your code or access your files from anywhere in the cluster. You can check the status of your job at any time by using the SLURM command `squeue -u username` or simply `sq`. If you open a new command line window, log into Narval and from the login node type `sq`, here is what you'll see:

```bash title="Pending Job"
[username@nc10433 ~]$ sq
          JOBID     USER      ACCOUNT           NAME  ST  TIME_LEFT NODES CPUS TRES_PER_N MIN_MEM NODELIST (REASON)
       24928305 username account-name    interactive  PD       9:57     1    1        N/A      3G nc10433 (None)
```
```bash title="Running Job"
[username@nc10433 ~]$ sq
          JOBID     USER      ACCOUNT           NAME  ST  TIME_LEFT NODES CPUS TRES_PER_N MIN_MEM NODELIST (REASON)
       24928305 username account-name    interactive   R       9:57     1    1        N/A      3G nc10433 (None)
```

Some important things to notice:
1. The job name is "interactive", as we were expecting.
2. The status `ST` if pending `PD` in the first extract, and running `R` in the second.
3. The number of nodes and number of CPUs should reflect what was defined by the `salloc` command.

If you want to stop/cancel the job at once, you can use the command `scancel` followed by the job ID. In our case:
```bash
[username@nc10433 ~]$ scancel 24928305
```
With the command `salloc` we ran earlier, we requested allocation for 10 minutes. Once the requested time is over, SLURM will automatically release the resources and you will be back to the login node. Here is the message you'll receive when the time is over:

```bash
[username@nc10433 ~]$ salloc: Job 24928305 has exceeded its time
         limit and its allocation has been revoked. srun: Job step
         aborted: Waiting up to 62 seconds for job step to finish.
         slurmstepd: error: *** STEP 24928305.interactive ON nc10433 
         CANCELLED AT 2024-01-27T23:38:18 DUE TO TIME LIMIT ***
         exit
[username@narval3 ~]$ 
```

## Submitting a job

Often times you will need to run many simulations at the same time which may be charcaterized by the same "running" parameters. If that is the case, running every single simulation in interactive mode is not convenient. The most common way of running a job on the cluster is, in fact, by submitting a batch script to SLURM. Think of it as if you are ordering food at a restaurant: your order is written on a piece of paper (batch script), which is then given to the restaurant manager (queue manager) for execution. Your order might be executed directly or wait in a queue depending on how busy the restaurant is. The batch file is usually divided in two parts:
1. In the first part you will give SLURM all the parameters for the job. Each line containing these parameters must be preceded with `#SBATCH` in the script.
2. In the second part you will specify any commands that must be executed as part of the job.

A very simple batch script might look like this:

```bash frame="none"
#!/bin/bash
#SBATCH -t 0-10:00
#SBATCH --mem=3g
#SBATCH -o output.log

./myfirstjob.py
```

Now that you know how to allocate resources on the cluster, **you are ready to run heavy computations!** However, you might be wondering: **how do I install my CFD package on the cluster?** Here comes yet another, very beautiful feature of most super computers, which is the **module system**.

## The module system

The module system is a concept available in most clusters worldwide and guarantees the use of different software (and different versions of the same software) in a precise and controlled manner. In most cases, a supercomputer has far more software installed than the average user will ever need. Therefore, the settings for all these software packages and their supported versions are encapsulated in "environment modules" maintained by the module system. These modules are in no way related to `perl` or `python` modules and should not be confused with that. To have an idea on what modules are already installed on your current profile, from the login node run the command:

```bash
[username@narval1 ~]$ module list
```

You will notice that some basic modules such as `openmpi`, `python`, or `intel` are already installed. If the module or software you look for is not in the list of the modules installed, run the command:

```bash
[username@narval1 ~]$ module avail
```
to know what modules are available on this particular cluster. What you will notice is that:
1. There are an incredible number of modules available in several different versions.
2. They are very well organized and color coded based on discipline. For instance, `bio` stands for modules in Bioinformatic libraries/apps and `phys` stands for modules in Physics libraries/apps.
3. If you are in the CFD field, there are common softwares such as `starccm`, `openfoam`, and `gmsh`.

Once you have chosen the module you need, all you do is run the command:
```bash
[username@narval1 ~]$ module load modulename
```
:::caution
The modules you load will only survive on your profile for the duration of the session. Once you log out of the login node the modules previously loaded will be lost and you will need to reload them again.
:::

However, if you are happy with the loaded module and you know that you will use them constantly, you can run the command:
```bash
    [username@narval1 ~]$ module save
```
to save the current module setting as the **default** configuration. There are several other useful commands in the module system environment such as `module purge` to unload all the modules currently installed, and `module switch x y` to switch module `x` with module `y`. And now you are REALLY ready to run you first job on the cluster!

## Example: my first job

In this very simple code we check if a specific year is a leap year.

```python title="isleap.py"
# Python program to check if year is a leap year or not
import sys

# To get year from the user
year = int(sys.argv[1])

# divided by 100 means century year (ending with 00)
# century year divided by 400 is leap year
if (year % 400 == 0) and (year % 100 == 0):
    print("{0} is a leap year".format(year))

# not divided by 100 means not a century year
# year divided by 4 is a leap year
elif (year % 4 ==0) and (year % 100 != 0):
    print("{0} is a leap year".format(year))

# if not divided by both 400 (century year) and 4 (not century year)
# year is not leap year
else:
    print("{0} is not a leap year".format(year))
```

The second option is to run the script in a compute node in interactive mode. The first step as mentioned previously is allocating the resources:

```bash
salloc -n 1 --time=0:10:0 --mem-per-cpu=500m --account=account-name
```
Here we requested a single processor for 10 minutes with 500 Mb of memory (more than enough for the task at hand).

:::note[Learning Objectives]
Having finished this lecture, you should now be able to answer the following important questions:
1. 
:::