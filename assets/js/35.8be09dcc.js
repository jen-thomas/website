(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{443:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("This tutorial will show you how to install the Python libraries for working with Tabular Data Packages and demonstrate a very simple example of loading a Tabular Data Package from the web and pushing it directly into a local SQL database. Short examples of pushing your dataset to Google’s BigQuery and Amazon’s RedShift follow.")]),t._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),s("p",[t._v("For this tutorial, we will need the main Python Data Package library:")]),t._v(" "),s("p",[t._v("<"),s("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/"),s("OutboundLink")],1),t._v("    /datapackage-py>")]),t._v(" "),s("p",[t._v("You can install it as follows:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" datapackage\n")])])]),s("h2",{attrs:{id:"reading-basic-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-basic-metadata"}},[t._v("#")]),t._v(" Reading Basic Metadata")]),t._v(" "),s("p",[t._v("In this case, we are using an example Tabular Data Package containing"),s("br"),t._v("\nthe periodic table stored on"),s("br"),t._v(" "),s("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1),s("br"),t._v("\n("),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("datapackage.json"),s("OutboundLink")],1),t._v(","),s("br"),t._v(" "),s("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("data.csv"),s("OutboundLink")],1),t._v(")."),s("br"),t._v("\nThis dataset includes the atomic number, symbol, element name, atomic"),s("br"),t._v("\nmass, and the metallicity of the element.  Here are the first five"),s("br"),t._v("\nrows:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("atomic number")]),t._v(" "),s("th",[t._v("symbol")]),t._v(" "),s("th",[t._v("name")]),t._v(" "),s("th",[t._v("atomic mass")]),t._v(" "),s("th",[t._v("metal or nonmetal?")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("H")]),t._v(" "),s("td",[t._v("Hydrogen")]),t._v(" "),s("td",[t._v("1.00794")]),t._v(" "),s("td",[t._v("nonmetal")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("He")]),t._v(" "),s("td",[t._v("Helium")]),t._v(" "),s("td",[t._v("4.002602")]),t._v(" "),s("td",[t._v("noble gas")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Li")]),t._v(" "),s("td",[t._v("Lithium")]),t._v(" "),s("td",[t._v("6.941")]),t._v(" "),s("td",[t._v("alkali metal")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("Be")]),t._v(" "),s("td",[t._v("Beryllium")]),t._v(" "),s("td",[t._v("9.012182")]),t._v(" "),s("td",[t._v("alkaline earth metal")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("B")]),t._v(" "),s("td",[t._v("Boron")]),t._v(" "),s("td",[t._v("10.811")]),t._v(" "),s("td",[t._v("metalloid")])])])]),t._v(" "),s("p",[t._v("You can start using the library by importing "),s("code",[t._v("datapackage")]),t._v(".  Data"),s("br"),t._v("\nPackages can be loaded either from a local path or directly from the"),s("br"),t._v("\nweb.")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datapackage\nurl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://raw.githubusercontent.com/frictionlessdata/example-data-packages/master/periodic-table/datapackage.json'")]),t._v("\ndp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("At the most basic level, Data Packages provide a standardized format"),s("br"),t._v("\nfor general metadata (for example, the dataset title, source, author,"),s("br"),t._v("\nand/or description) about your dataset.  Now that you have loaded this"),s("br"),t._v("\nData Package, you have access to this metadata using the "),s("code",[t._v("metadata")]),s("br"),t._v("\ndict attribute.  Note that these fields are optional and may not be"),s("br"),t._v("\nspecified for all Data Packages.  For more information on which fields"),s("br"),t._v("\nare supported, see"),s("br"),t._v("\n[the full Data Package standard][spec-dp].")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Periodic Table"')]),t._v("\n")])])]),s("h2",{attrs:{id:"reading-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-data"}},[t._v("#")]),t._v(" Reading Data")]),t._v(" "),s("p",[t._v("Now that you have loaded your Data Package, you can read its data.  A"),s("br"),t._v("\nData Package can contain multiple files which are accessible via the"),s("br"),t._v(" "),s("code",[t._v("resources")]),t._v(" attribute.  The "),s("code",[t._v("resources")]),t._v(" attribute is an array of"),s("br"),t._v("\nobjects containing information (e.g. path, schema, description) about"),s("br"),t._v("\neach file in the package.")]),t._v(" "),s("p",[t._v("You can access the data in a given resource in the "),s("code",[t._v("resources")]),t._v(" array"),s("br"),t._v("\nby reading the "),s("code",[t._v("data")]),t._v(" attribute.  For example, using our our Periodic"),s("br"),t._v("\nTable Data Package, we can return all elements with an atomic number"),s("br"),t._v("\nof less than 10 by doing the following:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" e "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hydrogen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lithium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Beryllium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Boron'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Carbon'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nitrogen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Oxygen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Fluorine'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("If you don’t want to load all data in memory at once, you can lazily"),s("br"),t._v("\naccess the data using the "),s("code",[t._v("iter()")]),t._v(" method on the resource:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("rows "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resources"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("iter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'nonmetal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'H'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hydrogen'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1.00794'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'noble gas'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'He'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'4.002602'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nrows"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metal or nonmetal?'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alkali metal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Lithium'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic mass'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6.941'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'atomic number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"loading-into-an-sql-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-an-sql-database"}},[t._v("#")]),t._v(" Loading into an SQL database")]),t._v(" "),s("p",[s("router-link",{attrs:{to:"/specs/tabular-data-package/"}},[t._v("Tabular Data Packages")]),t._v(" contains schema information about its"),s("br"),t._v("\ndata using "),s("router-link",{attrs:{to:"/specs/table-schema/"}},[t._v("Table Schema")]),t._v(". This means you can easily import"),s("br"),t._v("\nyour Data Package into the SQL backend of your choice. In this case,"),s("br"),t._v("\nwe are creating an "),s("a",{attrs:{href:"http://sqlite.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQLite"),s("OutboundLink")],1),t._v(" database in a new file"),s("br"),t._v("\nnamed "),s("code",[t._v("datapackage.db")]),t._v(".")],1),t._v(" "),s("p",[t._v("To load the data into SQL we will need the Table Schema SQL Storage library:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-sql-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-sql-py"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("You can install it by doing:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tableschema-sql\n")])])]),s("p",[t._v("Now you can load your data as follows:")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the database connection (using SQLAlchemy)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load and save table to SQL")]),t._v("\nengine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sqlite:///periodic-table-datapackage.db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("storage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("One way to check if your data has been saved successfully is by running")]),t._v(" "),s("div",{staticClass:"language-Python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * from data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Alternatively, if you have "),s("code",[t._v("sqlite3")]),t._v(" installed, you can inspect and play with your"),s("br"),t._v("\nnewly created database.  Note that column type information has been"),s("br"),t._v("\ntranslated from the Table Schema format to native SQLite types:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("$ sqlite3 periodic"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("db\nSQLite version "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.19")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("06")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v("\nEnter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".help"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usage")]),t._v(" hints"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*check database schema*/")]),t._v("\n\nsqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("schema")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"atomic number"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTEGER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsymbol "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tname "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"atomic mass"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metal or nonmetal?"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*view all records in the data table*/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"loading-into-bigquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-bigquery"}},[t._v("#")]),t._v(" Loading into BigQuery")]),t._v(" "),s("p",[t._v("Loading into BigQuery requires some setup on Google’s infrastructure,"),s("br"),t._v("\nbut once that is completed, loading data can be just as frictionless."),s("br"),t._v("\nHere are the steps to follow:")]),t._v(" "),s("ol",[s("li",[t._v("Create a new project - "),s("a",{attrs:{href:"https://console.cloud.google.com/iam-admin/projects",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Create a new service account key - "),s("a",{attrs:{href:"https://console.developers.google.com/apis/credentials",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Download credentials as JSON and save as "),s("code",[t._v(".credentials.json")])]),t._v(" "),s("li",[t._v("Create dataset for your project - "),s("a",{attrs:{href:"https://bigquery.cloud.google.com/welcome/",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),s("OutboundLink")],1),t._v(" (e.g. “dataset”)")])]),t._v(" "),s("p",[t._v("To load the data into BigQuery using Python, we will need the Table Schema BigQuery Storage library:")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/frictionlessdata/tableschema-bigquery-py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/tableschema-bigquery-py"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("You can install it as follows:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" tableschema-bigquery\n")])])]),s("p",[t._v("The code snippet below should be enough to push your dataset into the cloud!")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" io\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tableschema "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Table\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" apiclient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discovery "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" build\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" oauth2client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("client "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" GoogleCredentials\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Prepare BigQuery credentials")]),t._v("\nos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("environ"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GOOGLE_APPLICATION_CREDENTIALS'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dp-py/credentials.json'")]),t._v("\ncredentials "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GoogleCredentials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_application_default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nservice "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" build"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" credentials"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("credentials"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nproject "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("io"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'credentials.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UTF-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'project_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Load and save table to BigQuery")]),t._v("\ntable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" schema"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'schema.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" storage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigquery'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" service"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" project"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dataset"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dataset'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("If everything is in place, you should now be able to inspect your"),s("br"),t._v("\ndataset on BigQuery.")]),t._v(" "),s("p",[s("img",{attrs:{src:"bigquery-schema.png",alt:"BigQuery Schema"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"bigquery-preview.png",alt:"BigQuery Preview"}})]),t._v(" "),s("h2",{attrs:{id:"loading-into-amazon-redshift"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#loading-into-amazon-redshift"}},[t._v("#")]),t._v(" Loading into Amazon RedShift")]),t._v(" "),s("p",[t._v("Similar to Google’s BigQuery, Amazon RedShift requires"),s("br"),t._v(" "),s("a",{attrs:{href:"http://docs.aws.amazon.com/redshift/latest/gsg/getting-started.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("some setup"),s("OutboundLink")],1),s("br"),t._v("\non AWS. Once you’ve created your cluster, however, all you need to do"),s("br"),t._v("\nis use your cluster endpoint to create a connection string for"),s("br"),t._v("\nSQLAlchemy.")]),t._v(" "),s("p",[t._v("! Note: using the "),s("a",{attrs:{href:"https://sqlalchemy-redshift.readthedocs.io/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("sqlalchemy-redshift dialect"),s("OutboundLink")],1),s("br"),t._v("\nis optional as the "),s("code",[t._v("postgres://")]),t._v(" dialect is sufficient to load your"),s("br"),t._v("\ntable into AWS RedShift.")]),t._v(" "),s("p",[s("img",{attrs:{src:"aws-redshift-cluster-endpoint.png",alt:"AWS RedShift"}})]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# create the database connection (using SQLAlchemy)")]),t._v("\nREDSHIFT_URL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres://<user>:<pass>@<host>.redshift.amazonaws.com:5439/<database>'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sqlalchemy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" create_engine\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# load and save table to RedShift")]),t._v("\nengine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" create_engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("REDSHIFT_URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("storage"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" engine"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# check if data has been saved successfully")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'SELECT * from data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);