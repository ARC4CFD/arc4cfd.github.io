---
title: Define CFD workflow

bibliography: bibliography.bib
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Estimate the approximate computational cost for a CFD problem.
2. test
:::

##CFD and HPC
Computational Fluid Dynamics (CFD) is the study of fluids through the numerical solution of the equations governing their motion.    Most common CFD solvers rely on the discretized solution of the Navier-Stokes (NS) equations.  Although other approaches such as Lagrangian based  or lattice Boltzmann methods are increasingly being advanced, this course will specifically target the use of *classical CFD* methods based on the solution of the discretized Navier-Stokes equations using conventional finite volume methods. It should be noted that many of the concepts discussed herein are directly transferable to other types of numerical methods and approaches.

The strong nonlinearity in the Navier-Stokes equations result in fluid mechanics problems having a multiscale nature, especially in the case of turbulent flows. Additionally, fluid dynamics problems are combined with additional to multiphysics phenomena (heat transfer, acoustics, combustion, multi-phase problems), greatly complexifying the already challenging underlying fluid dynamics problem. For these reasons, CFD problems require a high-spatial and temporal resolution to resolve these coupled phenomena over the wide scales of interest. Thus the field of CFD is particularly well suited for *high-performance* computing applications.


##Why use CFD on HPC




##Conceptual approach towards CFD
CFD simulations are undertaken to answer well-defined scientific or engineering questions. The reason for using CFD as opposed to experimental can be related to experimental limitations, access to experimental facilities, but most often related to costs. Yet the shortcomings of CFD lies in the approximations that must be made to represent a given physical setup.  Numerical representations of physical problems are inherently an abstraction of reality in the form of a set of discretized governing equations and a set of boundary conditions.   The results of the numerical simulation results can then be used to answer the original question motivating the study.

![Swirls and colors of Jupiter from the space probe Juno.](../../../assets/figs_section2/ARC4CFD_conceptualHPC.png "Conceptual utilization of CFD to answer scientific or engineering questions.")
|:--:| 
| *Conceptual utilization of CFD to answer scientific or engineering questions* |



 The level of abstraction and approximations to construct the numerical model  will dictate the computational cost of the CFD investigation and ultimately the need for HPC. Although this may seem self-evident, HPC ressources are expensive (in both time and money) and can impose significant overhead (steep learning curve, bureaucratic, organizational etc.), therefore, they should only be leveraged if they will provide a net benefit to the research workflow. 
 
 For a given level of abstraction, how do I determine if HPC ressources are needed?
1. Is my problem limited by the available memory on the workstation?
2. Do the simulations take too long to converge on a single code?
3. Do I have a large number of small runs?

If you have answered yes to any of the above questions, you should consider accelerating your CFD workflow using HPC.



##Defining a workflow of CFD with HPC
The conventional workflow for CFD simulations consists of three main steps:
1. Pre-processing
2. Processing
3. Post-processing

In this standard workflow, the numerical problem is defined and computational domain discretized in  the \textbf{Pre-processing} step, while the simulations are run in the *Processing*, and data is analyzed and visualized in the *Post-processing*.


 To effectively use HPC ressources for CFD simulations, the general workflow remains similar but additional steps should be integrated to strike the desired balance between the trueness of the physical representation of the problem and the finite computational resources. The added steps in the workflow will enable a better understanding between the competing aspects that make CFD computations expensive.


![HPCcompromise.](../../../assets/figs_section2/ARC4CFD_leverateHPC_compromise.png "Competing aspects in setting up CFD simulations")
|:--:| 
| *Competing aspects in setting up CFD simulations* |

