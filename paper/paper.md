---
title: 'Advanced Research Computing for Computational Fluid Dynamics'
tags:
  - High performance computing
  - Computational fluid dynamics
  - Advanced research computing
  - Research data management
  - online learning
authors:
  - name: Jean-Pierre Hickey
    orcid: 0000-0000-0000-0000
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
    affiliations:
 - name: Department of Mechanical and Mechatronics Engineering, University of Waterloo, Canada
   index: 1
date: 1 April 2024
bibliography: paper.bib

# Optional fields if submitting to a AAS journal too, see this blog post:
# https://blog.joss.theoj.org/2018/12/a-new-collaboration-with-aas-publishing
# aas-doi: 10.3847/xxxxx <- update this with the DOI from AAS once you know it.
aas-journal: Astrophysical Journal <- The name of the AAS journal.
---

# Summary

Computational Fluid Dynamics (CFD) is a field of computational physics that has a very high utilization of modern advanced research computing (ARC) resources. CFD codes solve the discretized form of the governing equations for fluid motion, which is a high degree of freedom mathematical problem. The spatial and temporal resolution required to solve these problems makes CFD particularly well suited to take advantage of the full benefits of large-scale, parallelized high-performance computing on ARC infrastructure.  The application of CFD ranges from external aerodynamics and astrophysical flows, to microfluidics and medical applications with many other problems in between. Thus, CFD has a broad user base that transcends many classical academic disciplines. As these predictive tools have improved, they are not only used by expert numericists but are increasingly adopted by theoreticians and experimentalists, with varying levels of expertise and exposure to the usage of these tools with ARC.  Although most engineering programs offer CFD course, typically in mechanical, civil, chemical and aerospace engineering, these courses generally focus on the fundamental understanding of the physics, modeling and numerics of these methods, as well as the practical usage of these tools.   The jump from the academic CFD course to the effective use of these tools on modern ARC systems is the training gap that will be addressed in this short course. 

# Statement of need

The increasing user-friendliness and improvements of CFD  means that that tools are increasingly being adopted by broader userbase with a lower level of knowledge in high-performance computing. CFD courses and hands-on learning courses (cite Barba) provide the needed theoretical understanding, there are no courses that focus uniquely on bridging the gap towards an effective usage of CFD on modern ARC.


The target audience for this course is a new graduate student that has an undergraduate-understanding of the fluid mechanics and computational fluid dynamics. The course is intended to provide the theoretical background to leverage high-performance computing architectures. At the outset of the course, the student should be able to integrate a workflow 
Additionally to new graduate students, the course also targets established researchers, such as theoreticians and experimentalists, that have little experience CFD and high-performance computing.

At the end of this course, the learner should be able to:
1- **Assess the parameters influencing computational cost and their modelling assumptions**
2- **Conduct an a priori estimate of the computational cost of a CFD simulation**
3- **Determine the most efficient workflow and strategies for CFD on HPC systems**
4- **Find the optimal parameters and settings to run a CFD simulation on HPC**


# Philosophy of learning



# Course features
The 16 hour course is developed as asynchronous, multi-modal course. The course is sub-divided into three main sections: (1) foundational aspects of advanced research computing for CFD; (2) leveraging HPC for large-scale CFD computations; (3) CFD and research data management. Each section is subdivided into individual classes, many of which have examples and short quizzes. The online content of theses classes is supplemented with online video lectures summarizing the main takeaways. For



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

# Figures

Figures can be included like this:
![Caption for example figure.\label{fig:example}](figure.png)
and referenced from text using \autoref{fig:example}.

Figure sizes can be customized by adding an optional second parameter:
![Caption for example figure.](figure.png){ width=20% }

# Acknowledgements

We acknowledge contributions from Brigitta Sipocz, Syrtis Major, and Semyeong
Oh, and support from Kathryn Johnston during the genesis of this project.

# References
