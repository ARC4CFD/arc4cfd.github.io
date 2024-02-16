---
title: Estimate HPC requirements

bibliography: bibliography.bib
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Estimate the approximate computational cost for a CFD problem.
2. Estimate the required run-time memory and storage.
3. Estimate the resolution requirements for a given physical problem.
4. Determine the parametric space.
:::

The objective of this section is to provide a formal approach for an a priori estimate the overall computational cost of a large scale CFD simulation. These grid estimates are meant to provide guidance in order to better align the simulation with the available computational ressources.

## Estimate grid point requirement
The *a priori* estimate of the grid resolution requirement will help determine the anticipated computational expense of the simulation. These *a priori* estimates do not replace grid sensitivity studies, that are necessary for validation on CFD simulations, but are meant to provide an estimate to better plan the HPC ressource allocation. Very large CFD simulations are driven either by:
- A large number of smaller simulations (parametric study).
- The multi-scale nature of the physical problem under consideration.

For parametric studies, an accurate *a priori* estimate of the grid point requirement is often not necessary as an iterative approach for meshing, simulating and assessing is more accurate and time effective than an *a priori* grid estimation. As a result, this subsection will focus on estimating the grid requirement for multiscale CFD problems. The multiscale nature in CFD problems can be tied to the following physical issues:
- Geometric complexity of the physical problem.
- Turbulence.
- Multiphase and multiphysics considerations.
- Special flow features (transition, separation, shock waves).

## Geometric complexity

## Turbulence
Turbulence is an ubiquitous state of fluid motion that affects our everyday life in many ways. On a macro scale, turbulent flows govern weather changes and the formation and evolution of tropical cyclones; on smaller scale, turbulence affects pollutants transport in the atmosphere or fluid flow in our body. From an engineering standpoint, almost every fluid system of practical interest involves turbulent flows (e.g. flows over bluff/blunt bodies, flows through ducts and pipes, and turbomachines).

The purpose of this section is to give students a general overview of the current state of numerical simulation of turbulent flows with the main goal of educating the audience to a systematic approach to the solution of complex fluids problems. This is far from a complete description of the physiscs and mathematical model of turbulence, to which entire textbooks have been dedicated over the years [@pope2000book] [@durbin2011statistical].

### What is turbulence?
Turbulence is a chaotic, irregular state of fluid motion in which the instabilities present in the flow, caused by initial and boundary conditions, are amplified [@piomelli2022vki]. This results in a self-sustaining cycle of *generation* and *destruction* of turbulent **eddies** (regions of high vorticity in the flow). Although chaotic in nature, every turbulent flow displays universal characteristics:
1. **Unsteadiness**: turbulent flows are inherently unsteady. The instantaneous velocity in a turbulent flow when plotted as a function of time might look *random* to any observer unfamiliar with the topic. This randomness is the reason why turbulence research relies on statistical methods.
2. **Three-dimensional**: turbulent flows are highly 3D, even though the flow might have once preferential direction and the resulting **average** velocity might be a function of only two coordinates, the instantaneous velocity fluctuates in all 3 spatial directions.
3. **Mixing**: the presence of instantaneous fluctuations in all directions greately amplifies the mixing of mass, momentum, and energy in the flow. Based on the application of interest enhanced mixing might be a positive outcome (e.g. internal combustion engines), or a negative one (e.g. increase in the skin-friction coefficient and increase in drag force).
4. **Vorticity**: Vorticity is probably the most important and *defining* characteristic of turbulent flows. There are flows in nature that share some common characteristic of turbulence, but are characterized by negligible vorticity; these flows are not turbulent (e.g. random motion of waves on the ocean surface, potential flow over a boundary layer) [@piomelli2022vki].

## Multiphase and multiphysics considerations

## Special flow features (transition, separation, shock waves)
