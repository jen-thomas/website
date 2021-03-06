---
title: Analysis of spontaneous activity patterns in developing neural circuits using Frictionless Data tools
date: 2020-08-03
tags: ["tool-fund"]
category: grantee-profiles
image: /img/blog/fd_reproducible.png
description: This grantee profile features Stephen Eglen for our series of Frictionless Data Tool Fund posts...
author: Stephen Eglen
---
*This grantee profile features Stephen Eglen for our series of Frictionless Data Tool Fund posts, written to shine a light on Frictionless Data’s Tool Fund grantees, their work and to let our technical community know how they can get involved.*

## Meet Stephen Eglen

I am a Reader in Computational Neuroscience at the University of Cambridge. A large part of my work involves analysing neuronal recordings taken from high-throughput recording devices, such as multi-electrode arrays. Despite these arrays having been in use for many years, there are still no standard formats for exchanging data, and so we spend lots of time simply reformatting data as we pass it around different groups, or use different analysis [https://doi.org/10.1186/2047-217X-3-3](https://doi.org/10.1186/2047-217X-3-3)) used HDF5; the aim of our current project is to evaluate the use of Frictionless Data as a common format for the analysis of our spontaneous activity recordings, both past and present. The bulk of the work this summer will be done by a talented Natural Science undergraduate at Cambridge, Alexander Shtyrov.

## How did you first hear about Frictionless Data?

I had the good fortune to meet Dr Rufus Pollock in 2015 at a scientific meeting where I was presenting our work from 2014 and he was presenting an introduction to Frictionless Data. We then developed a case study (circa 2016) using a simpler data set (the spatial distribution of neurons in the retina). Skipping forward a few years, I saw the call for applications from Frictionless Data and decided it might be a good time to see how the project had developed. Rather than developing further tools, after discussions with the Frictionless Data team, we decided to make a case study for the application of these tools.

## What specific issues are you looking to address with the Tool Fund?

Our goals are:

1. Convert our existing datasets (Eglen et al 2014) into Frictionless Data containers.
2. Compare the relative merits of the containers vs HDF5 for storing "medium-sized" (megabytes, rather than gigabytes) data files. Aspects to consider will include portability, efficiency and ease of access.
3. Develop a case study for analysing spontaneous activity patterns with a generative approach to model the underlying neuronal networks. This code has been developed by colleagues at Cambridge in Matlab, but has yet to be tested on our spontaneous activity patterns.
4. Write up our findings for publication in a peer-reviewed journal.

## How can the open data, open source, or open science communities engage with the work you are doing?

We have a GitHub repository, but it is currently private (shared also with Frictionless Data) as it contains some recent datasets relating to human patients that are not yet ready to be shared. We hope to release it as soon as we can, where it will be linked to from my home page: [https://sje30.github.io](https://sje30.github.io). We aim to share all our findings from this project for the benefit of the community.
