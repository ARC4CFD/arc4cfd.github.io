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
5. **Dissipative**: Due to the enhanced mixing and vorticity, turbulence bring regions of different momentum (different velocities) into contact resulting in the dumping of velocity gradients through the effect of viscosity. As velocity gradient is reduced, so is the energy content of the flow (or turbulent kinetic energy). Turbulence is a **dissipative** process: if energy is not brough into the flow, turbulence will eventually die. Throughout this process energy is irreversibly transformed to heat.
6. **Multiscale**: As mentioned earlier, turbulent flows are chracterized by the presence of coherent regions of high vorticity, *eddies*. In any turbulent flow, *eddies* span a broad rand of length and time scales. This property of turbulence impacts directly the numerical simulation of turbulent flows and should be given a bit more attention.

### The scales of turbulence
![Swirls and colors of Jupiter from the space probe Juno.](../../../assets/figs_section2/JupiterSwirls_JunoBrealey_3709.jpg "Swirls and colors of Jupiter from the space probe Juno.")
|:--:| 
| *Swirls and colors of Jupiter from the space probe Juno. Image Credit: NASA, Juno, SwRI, MSSS; Processing & License: Matt Brealey, Sean Doran.* |

Whether generated by perturbation in the initial condition or by rapid changes in the geometry, turbulent flows are characterized by a wide distribution of **eddies** of various shapes and sizes. As an example, the figure above shows a small detail of Jupiter (the gas giant in our solar system), and we quickly notice that there are **eddies** the size of continents, and **eddies** that are orders of magnitude smaller. The behaviour of these **eddies** is strongly dependent on their length and velocity scales. Let's consider, for instance, a high-Reynolds number flow with $\mathcal{L}$ and $\mathcal{U}$ its characteristic length and velocity scales, respectively. The Reynolds number is defined as:

$$ Re = \frac{\mathcal{L}\mathcal{U}}{\nu}>>1$$

where $\nu$ is the fluid kinematic viscosity. The largest **eddies** in the flow have a length and velocity scales, $L_o$ and $V_o$, comparable to $\mathcal{L}$ and $\mathcal{U}$, therefore their representative Reynolds number $Re_o=L_o V_o/\nu>>1$. On these **eddies** viscosity has little effect as inertia forces dominate, and they are known as **energy carrying eddies**. Their shape is dpendent on the geometry and boundary conditions and they are anisotropic. In turbulent flows, energy is therefore produced at large scales, however, because no dissipation can occur at these large scales, large **eddies** must transfer their energy to smaller and smaller **eddies**. This process was mathematically modelled by the brilliant mathematicians Kolmogorov and today known as the **energy cascade**. As turbulent **eddies** becomes smaller and smaller, their representative Reynolds number decreases, until at the smallest scales $U_\eta$ and $L_\eta$, it becomes of order unity:

$$ Re_\eta = \frac{L_\eta U_\eta}{\nu}\approx 1$$

Viscosity effects now become relevant, and energy is dissipated through viscous dissipation and irreversibly converted to heat. A visual sketch of this complicated process is shown in the figure below.
![Energy cascade.](../../../assets/figs_section2/Energy-cascade.png "Energy cascade.")
|:--:| 
| *Simple sketch of the energy cascade mechanism* |

:::note[Important to keep in mind]
- Energy is dissipated ONLY at the smallest scales.
- The rate of (how much) energy dissipation is set by the largest scales where production takes place.
- The intermediate scales only *transfer* energy from larger eddies to smaller eddies. 
:::


## Multiphase and multiphysics considerations

## Special flow features (transition, separation, shock waves)