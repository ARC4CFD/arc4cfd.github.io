---
title: Introduction to Parallel Computing
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Explain the potential benefits of using parallel computing.
2. Use the correct terminology (e.g. thread, process, task) used in computing.
3. Understand the difference between distributed memory and shared memory parallelism.
4. Understand the various types of communication (blocking, non-blocking, collective, etc) between processes.
:::

As mentioned in previous sections, to enhance computational performance we need to distribute the workload among the various resources we have. Take the VERY simple task of copying a 1000-pages book: if a single person on average requires 1 hour to copy 1 page, it will take about 125 working days for that single person to copy the entire book. If we now split the workload among 50 people, we will have the work done in about 2.5 working days. In HPC terminology, using 50 processes (or CPUs) we ran the program (copyed the book) 50 times faster. We can therefore say that, IDEALLY, we would like a program to run $N$ times faster on $N$ processors. **HOWEVER**, the reality is much different:

1. Not all parts of the program can be successfully split up.
2. Splitting the program up may lead to additional overheads such as communication between processes.

:::caution[Caution]
**The way we split up** the program is the **critical** point of parallel computing. An efficient parallelization aims at achieving the following results:
1. Limit communication (the time processes spend on communicating to each other it's time not spent in computing).
2. Balance the load between processes in such a way that all processors are equally busy (generally we don't want one processor doing all the work while other wait idling).
:::

Ideally, from the prospective of pure performance, we would like ZERO (or very little) communication between processors. In parallel computing we distinguish between (i) an *embarassingly parallel* problem which requires little (or NO) interaction between processors (e.g. copying the 1000-pages book), and (ii) a *tightly coupled* problem in which a lot of interaction/communications is required between the prallel tasks (e.g. solving the Navier-Stokes equations in a 3D domain). One of the most challenging, yet very important question in parallel computing is: **how do we split the problem up into smaller tasks?** or in other words **how do we parallelize our code?**. The parallelization strategy heavely depends of the memory structure of the system used. Therefore, before diving into several ways of splitting up the workload, we should focus on ...

## Shared memory architecture & shared parallelism
When a system has a central memory and each CPU can access the same memory space it is known as a shared memory platform. A single node on a computer cluster might look something like this:

![Shared memory architecture.](../../../assets/figs_section1/shared-mem.png "Shared memory architecture.")
|:--:| 
| *Shared memory architecture.* |

In a shared memory architecture, CPUs can operate independently on different tasks, however **they see** the same data in the same memory space. In a real-life easy example, it is like having 2 students working independently at two problems using a common very large blackboard containing important data for both (see figure below).

![Shared memory architecture simple example.](../../../assets/figs_section1/Shared-mem-ex.png "Shared memory architecture simple example.")
|:--:| 
| *Shared memory architecture simple example.* |

The great advantage of this structure is that when the CPU (students) needs some data, it can access directly the share memory to fetch it (common blackboard), and this process is usually very fast. However, it is very easy to see that problems might arise if studentm 1, for instance, changes something on the board (shared memory). The change may affect the workflow of student 2. This situation is commonly know as **race condition** which occurs when 2 or more CPU (or threads) try to modify some data in the shared memory at the same time. This problem is originated by the fact that the thread schedule algorithm does not know *a priori* which thread is going to try to access the data first (when the students will need access to the board). It's in the hands of the developer to avoid such condition. We will not go into details but one way of mitigating this problem is to equip each thread with its own small **private memory**. In the previous simple example it would be as if each student has its own notebook. So, how does a parallel algorithm look like in a shared memory architecture? Here is a very simple example:

![Shared parallelism example.](../../../assets/figs_section1/shared-parall.png "Shared parallelism example.")
|:--:| 
| *Shared parallelism example.* |

## Distributed memory architecture & distributed parallelism

## The truth about message passing

## Domain decomposition

## Farming jobs

## Pipelines

## MPI in Python

## EXAMPLE: a parallel Hello World

## EXAMPLE: a parallel sum



:::note[Learning Objectives]
Having finished this lecture, you should now be able to answer the following important questions:
1. What is parallel computing?
2. What are the advantages and disadvantages of a shared-memory parallelization strategy?
3. What are the advantages and disadvantages of a distributed-memory parallelization strategy?
4. How do I decompose my problem?
:::