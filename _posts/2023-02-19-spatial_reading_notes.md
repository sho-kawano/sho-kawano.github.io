---
layout: post
title:  Spatial Class Reading Notes
date:   2023-02-19 12:54
image:  '/assets/img/halong1.jpeg'
caption: Halong Bay, Vietnam. So crazy beautiful.
---

Note: This is for point-referenced data/Gaussian Process models only.

***

My interests in Spatial Stats is one of the biggest reasons I came to UCSC.
As part of my effort to read more, I used this page to summarize the readings assigned for the class.
Slides for the STAT 226 class are very minimal and leaves out a lot of detail, so it's almost required to do the readings to understand the material.

1. Statistical Methods for Spatial Data Analysis, O. Schabenberger and C.A. Gotway. Chapman and Hall.
2. Hierarchical Modeling and Analysis for Spatial Data, S. Banerjee and A.E. Gelfand. Chapman and Hall. 2nd edition
3. Model-based Geostatistics, P.J. Diggle and P.J. Ribeiro. Springer.

None of the textbooks are completely comprehensive/helpful. That's why I put this guide together.
Note that the first edition of the Banerjee and Gelfand book can be found online. They have different chapter numbers, however.

Table of Contents:
  * [Suggest Reading Order](#sec1)
  * [Textbook Chapter Summaries](#sec2)
  * [Other Important Resources (by topic)](#sec3)


***

## <a name="sec1"></a>Suggested Reading Order

1. Overview of Theory: Schabenberger & Gotway Ch 2 + Ch 4.1-4.3
2. K-L Expansion: Xia Thesis
3. Classical Parameter Estimation: Diggle & Ribeiro Ch 5.1-5.5
4. Kriging: Banerjee & Gelfand Ch 2.4
5. Bayesian Hierarchical Modeling: Banerjee & Gelfand Ch 6

Refer to other references as needed. Here are brief summaries with highly recommended reading in **bold**.


***

## <a name="sec2"></a>Textbook Chapter Summaries

### Schabenberger & Gotway Ch 2

Overall a really good introduction to spatial processes / geostatistics for statistics students.  
I would basically read the whole thing except 2.4.

* **2.1**: overview and motivations for the fundamentals of random fields.
* **2.2**: goes over stationarity, isotropy, instrinsic stationarity (variogram).
* **2.3**: spatial continuity & differentiability. more detailed than class slides.
* 2.4: Goes over the basics of modeling.  2.4.2 (Covolultion Rep.) is covered in class mostly as a way to model non-stationary processes. Not every proceess can be represented this way, which is part of the motivation of the Karhunen-Loeve Representation.
* **2.5**: excellent introduction to spectral analysis.  You can skip 2.5.6.


### Schabenberger & Gotway Ch 4

Detailed explanations on covariance estimation. Most explanation depends heavily on semi-variograms. I think this is to make things more general for instrinsically stationary processes (not just stuff for weakly stationary processes.)
IMO Diggle and Ribeiro is a better reference for estimation content.

* 4.1: overview and motivations for the estimation of covariances
* **4.2**: explains the basics of a covariance model. Sill, practical range, nugget effect.
* 4.3: goes into the Matern family of covariance functions. I didn't come across this until later so perhaps it would have been useful for HW 2. Omits discussion about the spectral aspect of the Matern.
* 4.4: Skipped
* 4.5: Again, based on Semi-Variograms.  So it's better to use the Ribeiro book


### Diggle & Ribeiro Ch 5.1-5.5

Extremely helpful chapter on all things variograms/inference related.  
Definitely recommend reading before attempting actual spatial data analysis problems like in HW 3.


### Banerjee & Gelfand Ch2.

A decent reference, explanations are not thorough. 2.4 is helpful.

* 2.1: overview of different variograms.
* 2.2: really brief treatment of anisotropy
* 2.3: EDA of spatial data.  Outside of 2.3.1, it is not really worth reading.
* **2.4**: Very helpful and thorough chapter on Kirging. Compares Kriging with a conditional expectation of a multivariate normal, which is what most statisticians are used to.
* 2.5: Helpful tutorial on EDA. Listed under resources.

### Banerjee & Gelfand Ch3.

Short chapter, some helpful clarifications.

* 3.1.1: Too theoretical for me. Skipped.
* 3.1.2: Useful overview on Bochner's Theorem, spectra, valid covariance functions.
* 3.1.3: Notes on covariance tapering. Skipped
* 3.1.4: Notes on smoothness of the Matern family.  Somewhat helpful and more complex than other explanations I've seen.
* 3.2: on non-stationary spatial models. Interesting but skipped.

### Banerjee & Gelfand Ch 6.

Seems to be the only real reference for fitting Bayesian Hierarchical Models for Spatial Data.
Since it's the focus of the book, it is a very good chapter.  



***

## <a name="sec3"></a> Other Important Resources

####  On Bessel Functions
* [Some basics on Bessel Functions](http://mhtlab.uwaterloo.ca/courses/me755/web_chap4.pdf)
* [Inequalities and identities for Modified Bessel Functions](https://www.sciencedirect.com/science/article/pii/S0022247X14005320#br0060)
* [Abramowitz and Stegun. Handbook of Mathematical Functions.](https://personal.math.ubc.ca/~cbm/aands/page_374.htm)

#### Review of Characteristic Functions

Allan Gut, Intermediate Probability Chapter 4. (PDFs available online)
Theorem 4.8 and examples are helpful.  

####  Karhunen-Loeve Expansion

* Thesis by Gangqiang Xia is very helpful and goes over the motivations of the K-L Expansion and the approximation based on spectral densities. I should've read this before doing HW2. Bruno will provide a copy for the class.
* [Notes on Karhunen-Loeve Expansion by Y. Lee (also helpful)](https://math.dartmouth.edu/~m106w19/notes/19WUQ_lec15.pdf)
* [General Notes on Eigen values of Integrals](https://encyclopediaofmath.org/wiki/Eigen_values_of_integral_operators,_numerical_methods) First 3 paragraphs is all you need.

####  Spatial EDA
* Banerjee & Gelfand Ch 2.5: Tutorial section.

####  Software

* [The `geoR` tutorial](http://www.leg.ufpr.br/geor/geoRdoc/vignette/geoRintro.pdf). Super helpful for Empricial Variogram/Maximum Likelihood Inference
* If you need to fit Process Convolutions with a spherical Bezier kernels and a MRF prior, [here's existing code from the paper by Lemos and Sanso](https://github.com/rtlemos/scallops)
