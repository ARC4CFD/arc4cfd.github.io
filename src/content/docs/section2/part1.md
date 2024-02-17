---
title: Define CFD workflow

bibliography: bibliography.bib
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Estimate the approximate computational cost for a CFD problem.
:::

Computational Fluid Dynamics (CFD) is the study of fluid dynamics through the numerical solution of the equations governing their motion.  The field has a broad user base in many disciplines in science and technology.  Most common CFD solvers rely on the discretized solution of the Navier-Stokes equations, although other approaches such as Lagrangian based methods, or lattice Boltzmann methods can also be used.  The strong nonlinearity and the multiscale nature of fluid and associated multi-physics phenomena result in the definition of computational problems with a high-degree of freedom, thus benefiting from high-performance computing.




CFD simulations are undertaken to answer well-defined scientific or engineering questions. The reason for using CFD as opposed to experimental can be related to experimental limitations, access to experimental facilities, but most often related to costs. Yet the shortcomings of CFD lies in the approximations that must be made to represent a given physical setup.  Numerical representations of physical problems are inherently an abstraction of reality in the form of a set of discretized governing equations and a set of boundary conditions.   The results of the numerical simulation results can then be used to answer the original question motivating the study.