---
title: Estimate HPC requirements
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

## Multiphase and multiphysics considerations

## Special flow features (transition, separation, shock waves)