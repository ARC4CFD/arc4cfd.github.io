---
title: 'A Sneak Peak into ARC4CFD'
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Utilize the correct terminology for HPC.
2. Define what a computer cluster (or server) is.
3. Understand how to successfully communicate with the HPC system.
:::

## It all stems from computing

At the basis of every research activity there is the answer to research questions. In most cases, especially engineering, physics, mathematics, but even economics, social sciences, and business, the answer to a given research question is directly correlated with the **solution** of a problem. **The process of finding a solution following a set of operations** is known as **computing**.

We often make the mistake of connecting the word "computer" to the activity of "computing". However, computing is much older than the first computer. In the old days, differential equations (means of description of every known physical phenomenon) were solved **using pen and paper**. You don't believe me, check this out! It so happens, however, that a computer is a "tool" that makes the activity of "computing" extremely fast. That is exactly why today we cannot live without it, and most of us (if not everyone) carry small computers in our pockets.

Let's take, for instance, the most common piece of equipment we use in our everyday life: a laptop. A laptop, as shown in the figure below, like any other computing machine (or computer) has some specific components that helps us reach our goals:
- **Input**: the interface that allows us to tell the computer what to do. **In the laptop**: keyboard, touchpad, mouse.
- **Output**: the interface that allows us to read results and monitor the progress of our program. The output can also be on a solid disk or a network. **In the laptop**: screen.
- **CPU & Memory**: the Central Processing Unit (CPU) and memory, usually interconnected, are the engine of the computing machine and are used to execute operations and store results.

![Figure of the main components of a computing machine in reference to a laptop.](../../../assets/figs_section1/CPU-lap.png "Figure of the main components of a computing machine in reference to a laptop")

## Yes but, what is a CPU?

In the previous figure, the CPU is represented as a "black box", however it is very important for later sections in this course, to understand its **purpose** and its **structure**. The CPU or Central Processing Unit is the "brain" of the computer. As shown in the schematic below, it is in charge of completing tasks by **continously** processing and resolving mathematical/logical operations.

![Schematic of a CPU as a black box.](../../../assets/figs_section1/CPU-sketch.png "Schematic of a CPU as a black box")

One of the major revolution of computing came in the 1970s when Intel was able to manufacture the CPU into a single circuit board and chip with its Intel 4004 very first **microprocessor**. Since then, the CPUs in our phones, leptops, and PCs although much more advanced share the same structure of the "vintage" Intel 4004, which was characterized by:
- 4-bit architecture.
- 640 bytes of addressable memory capacity, also known as Random Access Memory (RAM).
- Maximum **clock speed** of 108 kHz (Kilohertz).

The **clock speed** is a measure of the efficiency (or speed) of a CPU and it represents **how many times per second a CPU completes a work cycle**. The Intel 4004 chip, for instance, was capable of completing 108 thousands cycles per second. You might think that 108kHz is quite an impressive number, but just consider that a very common (and economic) Intel i3 completes about **4 billion** cycles per second per core (3.6 GHz)!

## What is a CPU workcycle?

![Sketch of the CPU cycle.](../../../assets/figs_section1/CPU-cycle.png "Sketch of the CPU cycle")

From the 1970s Intel 4004 chip to today's Intel i9 chip, the CPU still completes the same work cycle: it fetches instructions from the RAM, it decodes them, and finally executes them. Through the cycle, the information travel in bits. A bit is the basic unit of information which can be either 1 or 0. Bits are the bulding blocks of the much larger and articulated "binary code". In very simple terms, the amount of bits a CPU can handle at any one time limits the amount of memory the CPU can access. More information about the binary code and CPU architecture can be found here. For the sake of this short course, think of the binary code as the language spoken by the CPU and used to perform logical operations and specifically, Boolean algebra. Most processors today are based on the x86 instruction set architecture developed by Intel, and are capable of processing 64 bits at the same time.

## It's all about memory

Before diving in the multi-core architecture, we need to address the memory problem. Modern CPUs are equipped with what is known as cache memory to **temporarily** store information, data, and programs that are commonly used by the CPU. You might ask **why would a CPU need a cache memory if it can access the RAM?** Cache memory is smaller in size and much faster than the RAM, but most importantly, it's located in very close proximity to the CPU. **How does it work?** When performing a task, which requires some data, the CPU automatically searches in the cache memory (faster, closer). If data are found (cache hit), they are gathered very quickly and the entire process is optimized. If data are not found (cache miss) the CPU turns to the RAM. There are 3 levels of cache memory designed to have slightly different functions:
- Level 1 (L1): fastest, smallest in size, and closest to the CPU.
- Level 2 (L2); slower, higher in capacity, situated on the processor's chip.
- Level 3 (L3): slowets, has the largest capacity, and it's the furthest from the CPU.

## What is a core?

**A core is a CPU's processor**. In the 1980s every CPU had just ONE core with ONE cache memory. Today, on the other hand, CPUs have a multi-core architecture each one with its own L1 and L2 cache memory. Multi-core processes are **independent** processes put together on the same integrated circuit. Of crucial importance is the word **independent**. This means that one core could work on a task, while another core could independently work on a different task. The multi-core architecture constitutes the foundation of high-performance computing (HPC) as we shall see very soon. However, before multi-core went mainstream, **multi-threading** was a smart way of optimizing the CPU's workload. Multi-threading consists of splitting ONE core into several (commonly 2) virtual cores. This allows a CPU to perform two sets of tasks (threads) at the same time. Even with the advent of the multi-core architecture, multi-threading it's still a very common practice. For example a 4-core (quad-core) CPU can use multi-threading to provide 8 threads (see the below figure).

![Figure illustrating multi-core vs multi-threading architecture.](../../../assets/figs_section1/mcore-mthread.png "Figure illustrating multi-core vs. multi-threading architecture")

## The measure of computer performance

Nowadays, even small laptops can be very powerful, but, **how do we measure the computer performance?** In computing the measure of computer performance is the **FLOPS** or Floating Point Operations Per Second. To give a quick idea on the power of modern computers, in the 1980s a very large computer would perform about $10^6$ FLOPS, a modern laptop ranges around $30-50\times10^9$ FLOPS (Gigaflops), around 2009 a large super computer would perform $10^{15}$ FLOPS (Petaflops), and these days 2023 we reached as far as $10^{18}$ FLOPS (Exaflops). Once the petaflops range is reached, we have a full-size machinery that must have a dedicated large-scale facility to host it, to cool it down, and probably several people to maintain its status.

## What if my laptop is not enough?

Going back to the **research questions** we mentioned earlier, in many cases the preocess of finding a solution via numerical computation can quickly outgrow even the most powerful laptop or workstation. Here are a couple of examples of **WHY** you might want to consider HPC:
- You are a student of an experimental lab that collects daily data on the water quality of lake Ontario. So far you have been analyzing small datasets for small time ranges. You supervisor tasks you with the analysis of over 10 years of data made available by a local weather forecasting company. **You are probably looking at Terabytes (TB) of data, and your laptop will most likely crash**.
- You are a graduate student who, for their research, developed a model which now has to be validated with existing data. This requires running over a thousand simulations which, **on your laptop, will result in more than a month of running time**.
- You are a student who is focusing on computational fluid dynamics (CFD). The CFD package you were given has the capability of running in parallel. So far, you never needed this option as you mostly analyzed 2D domains. However, **going to 3D simulations has more than tripled the simulation time**, and it might be time to use that feature.

![Figure showing a simple sketch of parallel computing.](../../../assets/figs_section1/Multi-laps.png "Figure showing a simple sketch of parallel computing")

When a single laptop is not enough, one might think that the solution could be to (i) manufacture CPUs with faster clockspeeds, or to (ii) increase the memory per CPU. However, these two routes come with great limitations, the former related to heat generation and power consumption, the latter to manufacturing cost. The solution is **parallel computing**. We could take a series of $N$ laptops, each one with 4 cores, and connect them together via a very fast network (see the above figure). At this point we could take our target "large" problem, split it up into smaller $N$ sub-problems and solve each sub-problem on the individual laptops. Eventually, all the answers could be collected together to give the final answer to the original problem. **What we just described in very simple terms is the basis of high performance computing**. In the HPC terminology, every laptop is a **compute node**. Just like the individual laptop each node is characterized by its own operating system and its own network connection. The ensamble of laptops is known as **computer cluster** or **server**. In the example above the resulting computer cluster would have a total of 24 cores or processors.

Modern computer clusters depend heavility on parallelism which in turns depends heavily on the inter-connection between each node. That is why **a crucial characteristic of any cluster is a stable, reliable, and fast** networking communication system (e.g. InfiniBand). Finally, modern clusters do not exactly look like a series of interconnected laptops, but more like a **very noisy** series of rack cabinets hosted by large remote facilities or data centers (see the figure below). In Ontario, the largest providers of advance research computing resources are four consortia based at universities and hospitals. These academic consortia support two of the country’s current five national ARC platforms: Niagara (at the University of Toronto) and Graham (at the University of Waterloo). Just as a comparison to our simple example, the Canadian computer cluster Graham has a total of 33448 processors connected via InfiniBand. Frontier, the most powerful supercomputer in the world (as of January 2024), situated at Oak Ridge National laboratory has a total of 8,699,904 processors capable of executing 1.102 quintillion operations per second (1.02 exaFLOPS).

![Figure showing a simple sketch of the common structure of a computer cluster.](../../../assets/figs_section1/cluster-sketch.png "Figure showing a simple sketch of the common structure of a computer cluster")

**Reality check**: you might not realize but in our everyday lives we often (VERY often!) interact with large-scale clusters. For instance, the very simple task of finding the route to a new restaurant will probably take "ages" on your laptop, so in turn we rely on a website (e.g. Google maps) which runs on a **machine** usually located very far away from where you are: a server. Social networking services, e-commerce services and so on, all use a "remote" server to store and manage data. The server itself has no direct display or input methods connected to it (as opposed to your laptop) but is characterized by much more memory and computing power than any of your devices will ever have. **To communicate** with the remote server all you need is:
- A local device: laptop, tablet, smartphone, or PC.
- A stable internet connection.

:::note[Learning Objectives]
Having finished this lecture, you should now be able to answer the following important questions:
1. What is a CPU, and how is it structured?
2. What is HPC, and why do I need it?
3. What is a computer cluster, and what are its important characteristics?
:::