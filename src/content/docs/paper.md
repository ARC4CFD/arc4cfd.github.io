---
title: 'Advanced Research Computing for Computational Fluid Dynamics'
---
{/* tags:
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
bibliography: paper.bib*/}


{/*# Optional fields if submitting to a AAS journal too, see this blog post:
# https://blog.joss.theoj.org/2018/12/a-new-collaboration-with-aas-publishing
# aas-doi: 10.3847/xxxxx <- update this with the DOI from AAS once you know it.
aas-journal: Astrophysical Journal <- The name of the AAS journal.*/}


# Summary
Computational Fluid Dynamics (CFD) is a field of computational physics that has a very high utilization of modern Advanced Research Computing (ARC) resources.  The spatial and temporal resolution required to solve CFD problems means that it is well suited to take advantage of the full benefits of large-scale, parallelized high-performance computing (HPC) on ARC infrastructure.    The field of CFD has a broad and diverse user base that transcends many of the classical boundaries in science and engineering.   The application of CFD spans many disciplines from external aerodynamics and atmospheric flows, to microfluidics and biomedical applications.  As CFD tools have progressed, their predictive capabilities and user-friendliness have improved, which means that they are increasingly being adopted by nontraditional users of HPC such as experimentalists, theoreticians, even student design teams. Advanced Research Computing for Computational Fluid Dynamics, or ARC4CFD, is developed to help learners with a cursory knowledge of fluid dynamics and CFD bridge the knowledge gap toward the effective usage of CFD on modern ARC resources. 



# Statement of need
Although most science and engineering programs offer CFD courses, which are standard offerings in mechanical, civil, chemical and aerospace engineering, these courses generally focus on the fundamental understanding of the physics, modeling, and numerics as well as the practical usage of CFD tools. By the end of a typical undergraduate CFD course, the student has learned how to use a CFD tool to solve small-scale problems. The jump, at the start of a graduate program, from CFD  usage on a local workstation to the effective usage of this same tool on modern HPC systems is nontrivial and targeted training material is not readily available. Thus students must "translate" the knowledge from generic HPC training material to CFD or rely on mentorship and external help.  Similarly, as CFD is increasingly being adopted by nontraditional users of HPC such as experimentalists and theoretician, often later in their careers, this underserved user base may not have access to the same mentor opportunities as graduate students for training. ARC4CFD was developed to help bridge the knowledge gap for 

ARC4CFD is intended to be an introductory course that melds concepts from CFD and computing with an end-user focus in the usage of CFD on HPC systems. The course is built with the assumption that students have: a) a undergraduate-level knowledge in fluid dynamics, b) introductory knowledge in Computational Fluid Dynamics, and c) familiarity with navigating terminal and bash commands on remote systems. The target audience is: 
- new graduate students in computational physics or engineering
- experimentalist and theoreticians complementing their work with numerical simulations on HPC
- undergraduate students on student design teams interested in leveraging CFD with HPC

Given the pre-requisite knowledge and target audience,  the end-user focus means that the course needs to provide both the theoretical understanding of HPC and the systematic, hands-on approach to set up an effective  workflow for CFD on HPC. This dual focus has



# Course structure and learning outcomes
The course is intended to take about 16 hours to complete and is divided into three sections. Each section is made up of a number of classes with clearly defined learning outcomes. The sections are structured in a way for the learner to first develop a foundational understanding of high-performance computing ([section 1](https://arc4cfd.github.io/section1)), translate those concepts to specific challenges in CFD and establish a systematic workflow ([section 2](https://arc4cfd.github.io/section2)), and then to effectively manage the resulting research data ([section 3](https://arc4cfd.github.io/section3)). The course guides the learner through all the necessary steps towards the effective usage of CFD on HPC, by providing both theoretical understanding of the concepts supplemented with many practical examples and quizzes.

There are five learning outcomes for this course. At the end, the learner should be able to:
1- Define the main concepts in parallel and high performance computing
2- Conduct an a priori estimate of the computational cost of a CFD simulation
3- Explain the impact of modelling assumptions on HPC cost
4- Optimize simulation parameters of a CFD problem for HPC
5- Develop a research data management strategy for a CFD workflow


# Philosophy of learning
ARC4CFD is an asynchronous online course to accompany the learner in developing skills to effectively utilize Advanced Research Computing for Computational Fluid Dynamics. This course is built around the usage of an entirely open-sourced toolset from meshing, solving, and visualization.  The course is developed to:  1) emphasize the development of a systematic approach for the effective utilization of CFD usage on ARC systems,  2)  provide a high-level, theoretical understanding of the main concepts for using CFD on HPC, and 3)  provide hands-on examples for the learners to put into practice these concept.  The multimodal course content includes written content, videos, interactive quizzes, and hands-on examples covering various aspects of ARC.  




# Course features
The 16 hour course is developed as asynchronous, multi-modal course. The course is sub-divided into three main sections: (1) foundational aspects of advanced research computing for CFD; (2) leveraging HPC for large-scale CFD computations; (3) CFD and research data management. Each section is subdivided into individual classes, many of which have examples and short quizzes. The online content of theses classes is supplemented with online video lectures summarizing the main takeaways. For





# Story of the project
This course was conceived primarily from the need to train new graduate students at the University of Waterloo to bridge the gap between their undergraduate CFD education and the effective utilization of these tools on high-performance computing. The typical undergraduate CFD coursework focuses on the numerics,  modelling, and usage of CFD tools, whereas the majority of HPC training material tend to emphasize the computer science aspects of HPC. The effective utilization of modern Advanced Research Computing facilities requires the integration of knowledge from both CFD and HPC.  It was from the need to centralize the information on the usage of CFD on ARC that the idea for this course was born. The timely opportunity arose, during a sabbatical, through a call for proposals by Compute Ontario for the development of training material for under-served HPC users provided the means to build a team to address this need. We built the course by focusing on three user groups: 1) new graduate students that plan to use HPC resources to run CFD simulations, 2) theoreticians and experimentalist that want to use CFD on HPC to supplement their work, and 3) undergraduate design team members that want to develop skills in HPC.  Inspired from the "12-steps to the Navier-Stokes", which is a staple of our graduate student training, we tried to recreate a very systematic approach towards the usage of CFD on HPC systems. The initial idea of building everything within a Jupyter notebook eventually shifted to an interactive webpage with videos content due to the challenges of directly using HPC systems through a pythonic interface. 







{/*
# Citations

Citations to entries in paper.bib should be in
[rMarkdown](http://rmarkdown.rstudio.com/authoring_bibliographies_and_citations.html)
format.

If you want to cite a software repository URL (e.g. something on GitHub without a preferred
citation) then you can do it with the example BibTeX entry below for @fidgit.

For a quick reference, the following citation commands can be used:
- `@author:2001`  ->  "Author et al. (2001)"
- `[@author:2001]` -> "(Author et al., 2001)"
- `[@author1:2001; @author2:2001]` -> "(Author1 et al., 2001; Author2 et al., 2002)"

*/}

# Acknowledgements
This course was developed through funding from Compute Ontario.


# References
