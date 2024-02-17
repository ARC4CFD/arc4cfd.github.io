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

As mentioned in previous sections, to enhance computational performance we need to distribute the workload among the various resources we have. Take the VERY simple task of copying a 1000-pages book: if a single person on average requires 1 hour to copy 1 page, it will take about 125 working days for that single person to copy the entire book. If we now split the workload among 50 people, we will have the work done in about 2.5 working days. In HPC terminology, using 50 processes (or CPUs) we ran the program (copyed the book) 50 times faster. We can therefore say that, IDEALLY, we would like a program to run **N** times faster on $N$ processors. HOWEVER, the reality is much different:

## Shared memory architecture & shared parallelism

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