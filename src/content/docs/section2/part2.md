---
title: 'Plan the simulation'

bibliography: references_zotero_JPH-2.bib
---

:::note[Learning Objectives]
By the end of this section, you should be able to:
1. Setup a methodology to determine key simulation parameters
2.  Determine variables of interest 
:::




Faced with a CFD workflow that could benefit from modern HPC infrastructure, the planning stage seeks to create an alignment between the scientific question that we seek to answer, with the physical reality of the problem and the CFD abstraction. The understanding of this alignment is necessary in order to adequetely estimate the HPC needs of a given problem.

The planning section requires a good physical understanding  of the underlying  problem in order to adequately assess.




\begin{figure}[h!]
    \centering
    \includegraphics[width=0.8\textwidth]{Courses/figs/figs_section2/ARC4CFD_alignment.pdf}
    \caption{Alignment between various consideration for CFD simulations.}
    \label{fig:enter-label}
\end{figure}




\subsubsection{Parameters that influence HPC cost}

Add the discussion from Ferziger Peric on page 315.
\begin{itemize}
    \item Type of turbulence modeling
    \item Type of physical models used
    \item Number of separate species to consider
    \item Treatement of the wall boundary conditions 
    \item Dimensionality of the problem
    \item Order of numerical methods (accuracy)
\end{itemize}






\subsubsection{What do I need to resolve }
CFD simulations inevitably represent a compromise between resolution, accuracy, parameter space

Multiphase flows?
Combustion?
MHD?
Turbulence?
High-paramter design space?
Moving/deforming simulations?
Multispecies and chemical reactions?



\subsubsection{Strategies for working on clusters}


\subsubsection{References}
\url{https://www.osti.gov/servlets/purl/1889593}
\url{https://ntrs.nasa.gov/api/citations/20140003093/downloads/20140003093.pdf}





\subsubsection{EXAMPLE: Planning the simulation}
We seek to simulate the flow the flow around an NACA4412 airfoil with a flap. 

\textbf{Scientific question:} 
Seek to understand the buffeting frequency in between the airfoil/flap gap.


We must balance the need for accurate 

Is the flow over the airfoil critical to answer ? Can we simplify this problem to a simple representative problem? If yes, what are the potential limitations of the analysis?


Is 3 dimensional critical?

Is compressibility important? Is there a need for multiphysics computations (e.g. icing)? 

\begin{itemize}
    \item Select problem
    \item Determine the desired level of abstraction
\end{itemize}

\begin{figure}
    \centering
    \includegraphics[width=\textwidth]{Courses/figs/figs_section2/airfoil4412wflap_example.pdf}
    \caption{Caption}
    \label{fig:enter-label}
\end{figure}



\url{https://www5.in.tum.de/lehre/vorlesungen/hpc/WS14/intro.pdf}



% To run this case in 
%python naca.py -p 4412  -s   -d