---
title: 'Advanced Research Computing for Computational Fluid Dynamics (ARC4CFD)'

tags:
  - High performance computing
  - Computational fluid dynamics
  - Advanced research computing
  - Research data management
  - Online learning
authors:
  - name: Jean-Pierre Hickey
    orcid: 0000-0002-6944-3964
    equal-contrib: true
    affiliation: 1 # (Multiple affiliations must be quoted)
  - name: Francesco Ambrogi
    orcid: 0000-0001-7254-4494
    equal-contrib: true # (This is how you can denote equal contributions between multiple authors)
    affiliation: 1
  - name: Sophie Hillcoat
    affiliation: 1
  - name: Jeswin Joseph
    affiliation: 1
  - name: Nipin Lokanathan
    affiliation: 1
 - name: Department of Mechanical and Mechatronics Engineering, University of Waterloo, Canada
   index: 1
date: 1 April 2024
bibliography: paper.bib

# Optional fields if submitting to a AAS journal too, see this blog post:
# https://blog.joss.theoj.org/2018/12/a-new-collaboration-with-aas-publishing
# aas-doi: 10.3847/xxxxx <- update this with the DOI from AAS once you know it.
# aas-journal: Astrophysical Journal <- The name of the AAS journal.
---

# Summary
Computational Fluid Dynamics (CFD) is a field of computational physics that has a very high utilization of modern Advanced Research Computing (ARC) resources.  The spatial and temporal resolution required to solve CFD problems means that it is well suited to take advantage of the full benefits of large-scale, distributed memory parallelization that is available on high-performance computing (HPC) systems on ARC infrastructure.    The field of CFD has a broad and diverse user base that transcends many of the classical boundaries in science and engineering.   The application of CFD spans many disciplines from external aerodynamics and atmospheric flows, to microfluidics and biomedical applications.  As CFD tools have progressed over the past decades, their robustness, predictive capabilities, and user-friendliness have drastically improved, which means that these tools are increasingly being adopted by nontraditional users of HPC such as experimentalists, theoreticians, even student design teams. Advanced Research Computing for Computational Fluid Dynamics, or ARC4CFD, is an open-source, asynchronous online course that is  developed to help learners with a basic understanding of fluid dynamics and CFD bridge the knowledge gap toward the effective usage of CFD on modern ARC resources. 



# Statement of need
Although most science and engineering programs offer CFD courses--which have become standard part of the curriculum in mechanical, civil, chemical and aerospace engineering--these courses generally focus on the fundamental understanding of the physics, modeling, and numerics as well as the practical usage of CFD tools. By the end of a typical undergraduate CFD course, the student has learned how to use a CFD tools to solve small-scale problems, understand modelling assumptions, quantify the numerical errors, and visualize the results. These CFD problems used in the tutorials are designed to be run on the students' personal or local workstations.   The jump, at the start of a graduate program, from CFD  usage on a local workstation to the effective utilization of this same CFD tool, with a much larger problem size, on modern HPC systems is nontrivial and requires specific training. Although generic training on HPC systems is widely available, targeted training material for CFD users is not readily found. Thus, these new students must "translate" the knowledge from generic HPC training material to CFD or rely on mentorship and external help to effectively utilize these computational resources.  A similar darth of CFD-specific training material is non-traditional users of CFD such as experimentalists and theoretician. As these tools are continually improving, they are increasingly being adopted to complement experimental campaigns, inform the design of experiments, or help with the solution to theoretical fluid dynamics problems. This under-served user base is seeking focused training materials for the effective utilization of CFD on HPC systems, as they do not have the same mentorship opportunities or access to expertise as graduate students. ARC4CFD was developed to provide a CFD-specific training material for the effective utilization of HPC systems on advanced research computing architectures. The course is built in an asynchronous format for a broader adoption and many hands-on problems are integrated to help the learner further their understanding and learn independently. We value the ability to freely share and exchange with the community, thus the focus is placed on an entirely open-source toolset, from meshing, solving, and visualizing the results. Although this course is intended for use on remote HPC systems, and more specifically on the Digital Research Alliance of Canada clusters, a user can easily follow on a local multi-processor computer.

ARC4CFD is intended to be an introductory course that melds concepts from CFD and computing with an *end-user focus*.  The course is built with the assumption that students have: a) a undergraduate-level knowledge in fluid dynamics, b) introductory knowledge in Computational Fluid Dynamics, and c) familiarity with navigating terminal and bash commands on remote systems. The target audience is: 
- new graduate students in computational physics or engineering
- experimentalist and theoreticians complementing their work with numerical simulations on HPC
- undergraduate students on student design teams interested in leveraging CFD with HPC

Given the pre-requisite knowledge and target audience,  the end-user focus means that the course needs to provide both the theoretical understanding of parallel computing and the systematic, hands-on approach to set up an effective  workflow for CFD on HPC. The courses are developed to first provide a conceptual understanding and then apply that understanding to specific CFD problems; a summative example is woven into the course which follows the learner through the main CFD workflow.



# Course structure and learning outcomes
The course is intended to take about 16 hours to complete and is divided into three sections. Each section is made up of a number of classes with clearly defined learning outcomes. The sections are structured in a way for the learner to first develop a foundational understanding of high-performance computing ([section 1](https://arc4cfd.github.io/section1)), translate those concepts to specific challenges in CFD and establish a systematic workflow ([section 2](https://arc4cfd.github.io/section2)), and then to effectively manage the resulting research data ([section 3](https://arc4cfd.github.io/section3)). The course guides the learner through all the necessary steps towards the effective usage of CFD on HPC, by providing both theoretical understanding of the concepts supplemented with many practical examples and quizzes.

 Section 2 provides most of the CFD-specific knowledge for usage on HPC, for that reason, this classes in this section were devised to directly map onto a standard CFD workflow. Therefore, each step in the CFD workflow is an individual class, therefore, we have:
- 2.1 Definition of the CFD workflow
- 2.2 Plan the large scale CFD simulation
- 2.3 Estimate the HPC requirements
- 2.4 Pre-process the CFD simulation
- 2.5 Optimize the CFD for HPC
- 2.6 Running the CFD on HPC
- 2.7 A posteriori analysis 

The structure of section 2 provides the learner with a comprehensive overview of a standard workflow for a CFD problem on HPC systems.

There are five learning outcomes for ARC4CFD. At the end of the course, the learner should be able to:
1. Define the main concepts in parallel and high performance computing
2. Conduct an a priori estimate of the computational cost of a CFD simulation
3. Explain the impact of modelling assumptions on HPC cost
4. Optimize simulation parameters of a CFD problem for HPC
5. Develop a research data management strategy for a CFD workflow

The learning outcomes for each class are presented and reinforced with the questions at the end of each lecture. 

# Philosophy of learning
ARC4CFD is an asynchronous online course to accompany the learner in developing skills to effectively utilize Advanced Research Computing for Computational Fluid Dynamics. The course is build using an *integrative learning* approach in which concepts from a wide ranging scientific disciplines are brought together (e.g. parallel computing, programming, numerics, fluid dynamics, CFD) and directly put into practice through hands-on examples and quizzes. This course is built around the usage of an entirely open-sourced toolset from meshing, solving, and visualization. This is a key feature of the course that we hope will encourage a broad adoption of the training material, for this reason, the course is licensed under Creative Commons BY-NC-SA license and all the original files (e.g. svg files or python scripts) are included in the repository.  The main open-source toolkits used include: Gmsh (meshing), SU2 (CFD solver), OpenFoam (CFD solver), Paraview (visualization), and Python (postprocessing and analysis). 

 The course is developed to:  1) emphasize the development of a systematic approach for the effective utilization of CFD usage on ARC systems,  2)  provide a high-level, theoretical understanding of the main concepts for using CFD on HPC, and 3)  provide hands-on examples for the learners to put into practice these concept.  The multimodal course content includes written content, videos, interactive quizzes, and hands-on examples covering various aspects of ARC.  



# Course features
The asynchronous courses is built within a GitHub Pages website (http://arc4cfd.github.io) using an Astro build. This Astro template enables highly interactive engagement through the use of self-correcting quizzes, direct copy-pasting of code snippets, and visually appealing course navigation. The main website is supplemented with a more traditional [Git repository](https://github.com/ARC4CFD/arc4cfd) which contains all the examples used in the course. 

A unique aspect of the training material is found in Section 3 on Research Data Management (RDM). As RDM approach are continually being integrated into the scientific disciplines, we opted to provide some CFD-specific perspective to the RDM discussion. The content will undoubtably  evolve with these concepts but we hope this training material will be of assistance to CFD users that are increasingly being asked to develop Data Management Plans (DMP).





# Story of the project
This course was conceived primarily from the need to train new graduate students in the Multi-Physics Interaction Lab at the University of Waterloo to bridge the gap between their undergraduate CFD education and the effective utilization of these CFD tools on high-performance computing. The typical undergraduate CFD coursework focuses on the numerics,  modelling, and usage of CFD tools, whereas the majority of HPC training material tend to emphasize the computer science aspects of HPC. The effective utilization of modern Advanced Research Computing facilities requires the integration of knowledge from both CFD and HPC.  It was from the need to centralize the information on the usage of CFD on ARC that the idea for this course was born. Previously, this information was transmitted, piecemeal, to the students as needed during their graduate training.  This lead to inhomogeneous training which often left unresolved knowledge gaps for these highly-qualified graduate students.

A timely opportunity arose, during a sabbatical, through a call for proposals by Compute Ontario for the development of training material for under-served HPC users. This opportunity provided the means to build a team to centralize the necessary information and build this course. We built the course by focusing on three user groups: 1) new graduate students that plan to use HPC resources to run CFD simulations, 2) theoreticians and experimentalist that want to use CFD on HPC to supplement their work, and 3) undergraduate design team members that want to develop skills in HPC.  Inspired from the "12-steps to the Navier-Stokes", which is a staple of our graduate student training, we tried to recreate a very systematic approach towards the usage of CFD on HPC systems. The initial idea of building everything within a Jupyter notebook eventually shifted to an interactive webpage with videos content due to the challenges of directly using HPC systems through a pythonic interface. 


# Acknowledgements
This course was developed in the Multi-Physics Interaction Lab with financial support from Compute Ontario.


# References
