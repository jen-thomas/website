(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{265:function(e,t,a){e.exports=a.p+"assets/img/adbio.ea0206c3.png"},387:function(e,t,a){"use strict";a.r(t);var o=a(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("h3",{attrs:{id:"problem-we-were-trying-to-solve"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#problem-we-were-trying-to-solve"}},[e._v("#")]),e._v(" Problem We Were Trying To Solve")]),e._v(" "),o("p",[e._v("Sam Payne and his team at the Pacific Northwest National Laboratory (PNNL) have designed an application called "),o("a",{attrs:{href:"https://adbio.pnnl.gov/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Active Data Biology"),o("OutboundLink")],1),e._v(" (ADBio) which is an interactive web-based suite of tools for analyzing high-throughput omics (a set of related fields of study in biology).  The goal is to visualize and analyze datasets while still enabling seamless collaboration between computational and non-computational domain experts.  The tool provides several views on the same data facilitating different avenues of investigation.")]),e._v(" "),o("p",[e._v("One of the high level goals of ADBio was to make collaborative data analysis work in a similar manner to collaborative software development (versioned, asynchronous, flexible, sharable, global). You can read more of the motivation in the Open Knowledge International blog post"),o("br"),e._v(" "),o("a",{attrs:{href:"https://blog.okfn.org/2016/11/29/git-for-data-analysis-why-version-control-is-essential-collaboration-public-trust/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git for Data Analysis – why version control is essential for collaboration and for gaining public trust"),o("OutboundLink")],1),e._v(" written by Sam Payne as part of the pilot.  To facilitate this goal, Sam and his team used version-controlled repositories as the storage mechanism for all required resources. Data, software (for conducting analyses), and insights (gained from these analyses) for the project all get checked into the same repository.  ADBio pulls data and software directly from the repository and serves up an interactive visualization for data exploration. Any insight you choose to record gets checked back into the repository.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(265),alt:"ADBio"}})]),e._v(" "),o("p",[e._v("When we were first approached by Sam and his team, they outlined several use cases for which it might be valuable to have formal Data Package support (with the benefit of the associated tooling) within their framework.  In the end, we decided to work on the first: "),o("em",[e._v("validating metadata associated with ADBio repositories")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"use-case-validating-metadata"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-case-validating-metadata"}},[e._v("#")]),e._v(" Use Case: Validating Metadata")]),e._v(" "),o("p",[e._v("To initiate a project in Active Data Biology, users start with a dataset of quantitative molecular measurements across multiple samples combined with metadata for each sample.  Each repository on ADBio contains these two types of files. For clinical experiments, the metadata may include information about a participant’s age, gender, disease stage, etc. For an environmental experiment, this may be geographical location, temperature, time of day, etc. One "),o("a",{attrs:{href:"https://github.com/ActiveDataBio/ADB-User-Study/blob/master/metadata.tsv",target:"_blank",rel:"noopener noreferrer"}},[e._v("example"),o("OutboundLink")],1),e._v(" of a metadata file can be found at on the ADB-User-Study project repository under the "),o("a",{attrs:{href:"https://github.com/ActiveDataBio/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ActiveDataBio organization on GitHub"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("The metadata file can be updated or expanded during the course of analysis. This is currently not easily done within ADBio. Moreover, the researchers lacked any formal schema describing the metadata file and its contents. It was suggested that having a Data Package formalizing the metadata file would be a benefit.  This would also enable validation of the contents, according to the schema stored as part of the Data Package. Finally, the researchers also requested the development of a web UI to edit the metadata file that would be an application within the ADBio suite. Users could then update the schema online, and it would be versioned through GitHub like everything else. Scenario")]),e._v(" "),o("p",[e._v("A user gets updated survival information for patients in a clinical study and wants to update the metadata associated with this experiment. Within ADBio, the user opens the “Metadata” app and enters new information into the user interface. When finished, user clicks a ‘save’ button and the data is validated against the schema. If it fails, the specific cells are highlighted and annotated with failure codes. If it passes, the new metadata file is checked into the repository with a user-specified comment for the commit message.")]),e._v(" "),o("h2",{attrs:{id:"the-work"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-work"}},[e._v("#")]),e._v(" The Work")]),e._v(" "),o("h3",{attrs:{id:"what-did-we-do"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-did-we-do"}},[e._v("#")]),e._v(" What Did We Do")]),e._v(" "),o("p",[e._v("This was a valuable pilot for several reasons.  For one, the researchers interests in openness and the value of public, versioned infrastructure like GitHub for tabular, flat file datasets aligned well with the overall interests of the project.  OKI’s first step was to start a new repository to track progress "),o("a",{attrs:{href:"https://github.com/frictionlessdata/pilot-pnnl",target:"_blank",rel:"noopener noreferrer"}},[e._v("in the open"),o("OutboundLink")],1),e._v(".  In addition, OKI also created their own "),o("a",{attrs:{href:"https://github.com/frictionlessdata/ADB-User-Study",target:"_blank",rel:"noopener noreferrer"}},[e._v("“fork” (i.e. versioned copy) of the repository"),o("OutboundLink")],1),e._v(" in which PNNL stored their exemplar metadata file.")]),e._v(" "),o("h3",{attrs:{id:"data"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" Data")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("metadata.tsv")]),e._v(" file is specially formatted compared to other TSV (tab-separated values) files in that it contains two extra rows below the header for describing a column’s "),o("em",[e._v("methods")]),e._v(" and "),o("em",[e._v("descriptions")]),e._v(". While this is a neat way of storing metadata for each column, it is not particularly standard as ordinarily, we would expect all rows below the header contain actual data.  Nevertheless, it provided a great start to the development of a custom schema.  We used the information stored in these rows to generate a "),o("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table Schema"),o("OutboundLink")],1),e._v(" for the data compatible with our software ("),o("a",{attrs:{href:"https://github.com/frictionlessdata/ADB-User-Study/blob/master/metadata-schema.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("the schema"),o("OutboundLink")],1),e._v(").")]),e._v(" "),o("p",[e._v("For instance, if a column in the original metadata.tsv file had the text "),o("code",[e._v("categorical")]),e._v(" in its "),o("code",[e._v("#methods")]),e._v(" row, we knew that this translated very well to our "),o("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/#constraints",target:"_blank",rel:"noopener noreferrer"}},[e._v("enum (short for enumerated list) constraint"),o("OutboundLink")],1),e._v(". However, this was not enough.  We had to infer from the values below in the dataset which values were actually valid categorical values for that column.  So, for example, the "),o("code",[e._v("PlatinumStatus")]),e._v(" column could only be one of "),o("code",[e._v("Resistant")]),e._v(", "),o("code",[e._v("Sensitive")]),e._v(", or "),o("code",[e._v("Tooearly")]),e._v(" leading to the following constraint definition in Table Schema:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('"constraints": {\n    "enum": [\n        "Resistant",\n        "Sensitive",\n        "Tooearly"\n    ]\n}\n')])])]),o("p",[e._v("More straightforward was the translation of the "),o("code",[e._v("#descriptions")]),e._v(" row; each description was translated directly into a "),o("a",{attrs:{href:"https://specs.frictionlessdata.io/table-schema/#description",target:"_blank",rel:"noopener noreferrer"}},[e._v("description attribute"),o("OutboundLink")],1),e._v(" on the column:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('"description": "It describes whether the patient was resistant to platinum (chemotherapy) treatment",\n')])])]),o("p",[e._v("What the "),o("code",[e._v("metadata.tsv")]),e._v(" file did not record at all was any information about the “type” of value expected for each column.  For instance, the "),o("code",[e._v("days_to_death")]),e._v(" column would never contain a value that was of a “geopoint” type, but rather always a number (and a whole number at that).  Likewise, the "),o("code",[e._v("additional_immuno_therapy")]),e._v(" column would always be a True/False (i.e. boolean) value.  With PNNL’s domain expertise, OKI added these expectations to the schema so that "),o("code",[e._v("days_to_death")]),e._v(" could be relied upon to always be an integer and "),o("code",[e._v("additional_immuno_therapy")]),e._v(" a boolean (True/False) value.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('{\n    "name": "additional_immuno_therapy",\n    "type": "boolean"\n}\n')])])]),o("p",[e._v("Up to this point, the dataset provided by PNNL was adequately described by our specifications.  One challenge was how to deal, though, with the many missing values in the dataset.  While we had discussion on the "),o("a",{attrs:{href:"https://github.com/frictionlessdata/specs/issues/97",target:"_blank",rel:"noopener noreferrer"}},[e._v("topic"),o("OutboundLink")],1),e._v(", we had not yet established a formal way of specifying.  In part due to observed usage and the needs of the pilot, we formalized an approach to recording information about which values signal missing data in "),o("a",{attrs:{href:"https://twitter.com/OKFNLabs/status/765568650699018241",target:"_blank",rel:"noopener noreferrer"}},[e._v("mid-August 2016"),o("OutboundLink")],1),e._v(". We added this information to the Table Schema:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('"missingValues": [\n    "[Not Applicable]",\n    "[Not Available]",\n    "[Pending]"\n]\n')])])]),o("h3",{attrs:{id:"software"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software")]),e._v(" "),o("p",[e._v("goodtables had "),o("a",{attrs:{href:"http://okfnlabs.org/blog/2015/02/20/introducing-goodtables.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("existed"),o("OutboundLink")],1),e._v(" as a Python library and web application developed by Open Knowledge International to support the validation of tabular datasets both in terms of structure and also with respect to a published schema as described above. This software was put to good use in a local government context.")]),e._v(" "),o("p",[e._v("For this pilot, and in coordination with other work in the project, we took the opportunity to drastically improve the software to support the online, automated validation referenced in the above use case.  We took as inspiration the workflow in use in software development environments around the world—continuous automated testing—and applied to data.  This involved not only updating the Python library to reflect the specification development to date, but the design of a new data publishing workflow that is applicable beyond PNNL’s needs. It is designed to be extensible, so that custom checks and custom backends (e.g. other places where one might publish a dataset) can take advantage of this workflow.  For example, in addition to datasets stored on GitHub, the new goodtables supports the automated validation of datasets stored on S3 and we are currently working on validation of datasets stored on CKAN.")]),e._v(" "),o("p",[e._v("goodtables supports validation of tabular data in GitHub repositories to solve the use case for Active Data Biology.  On every update to the dataset, a validation task is run on the stored data.")]),e._v(" "),o("h2",{attrs:{id:"review"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#review"}},[e._v("#")]),e._v(" Review")]),e._v(" "),o("h3",{attrs:{id:"how-effective-was-it"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-effective-was-it"}},[e._v("#")]),e._v(" How Effective Was It")]),e._v(" "),o("p",[e._v("The omics team at PNNL are still investigating the use of "),o("a",{attrs:{href:"http://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("goodtables.io"),o("OutboundLink")],1),e._v(" for their use case, but early reports are positive:")]),e._v(" "),o("blockquote",[o("p",[e._v("We created a schema and started testing it. So far so good! I think this is going to work for a lot of projects which want to store data in a repo.")])]),e._v(" "),o("p",[e._v("As a real test of the generality of goodtables, we also tried to apply it to another project. This second project is a public repository describing measurements of metabolites in ion mobility mass spectrometry. Here, we are again using flat files for structured data. The data is actually a library of information describing metabolites, and we know that the library will be growing. So it was very similar to the ADBio project, in that the curated data would be continually updated. (see "),o("a",{attrs:{href:"https://github.com/PNNL-Comp-Mass-Spec/MetabolomicsCCS",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/PNNL-Comp-Mass-Spec/MetabolomicsCCS"),o("OutboundLink")],1),e._v(" for the project itself, and "),o("a",{attrs:{href:"https://github.com/PNNL-Comp-Mass-Spec/metaboliteValidation",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/PNNL-Comp-Mass-Spec/metaboliteValidation"),o("OutboundLink")],1),e._v(" for a validation script that leverages goodtables)")]),e._v(" "),o("p",[e._v("Of course, technical issues that they have encountered have been translated in GitHub issues and are being addressed:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables.io/issues/233",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/goodtables.io/issues/233"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables.io/pull/235",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/goodtables.io/pull/235"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables.io/issues/232",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/goodtables.io/issues/232"),o("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);