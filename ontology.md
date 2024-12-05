format-version: 1.2
data-version: 4.1.58
date: 11:08:2021 00:00
saved-by: Wout Bittremieux
auto-generated-by: OBO-Edit 2.3.1
import: http://ontologies.berkeleybop.org/pato.obo
import: http://ontologies.berkeleybop.org/uo.obo
default-namespace: MS
namespace-id-rule: * MS:$sequence(7,0,9999999)$
namespace-id-rule: * PEFF:$sequence(7,0,9999999)$
remark: namespace: MS
remark: namespace: PEFF
remark: coverage: Mass spectrometer output files and spectra interpretation
remark: creator: Yasset Perez-Riverol <yperez <-at-> ebi.ac.uk>
remark: creator: Matt Chambers <matt.chambers <-at-> vanderbilt.edu>
remark: creator: Andreas Bertsch <bertsch <-at-> informatik.uni-tuebingen.de>
remark: creator: Marius Kallhardt <Marius.Kallhardt <-at-> bdal.de>
remark: creator: Eric Deutsch <edeutsch <-at-> systemsbiology.org>
remark: creator: Fredrik Levander <fredrik.levander <-at-> immun.lth.se>
remark: creator: Pierre-Alain Binz <pierre-alain.binz <-at-> chuv.ch>
remark: creator: Gerhard Mayer <mayerg97 <-at-> rub.de>
remark: creator: Joshua Klein <jaklein <-at-> bu.edu>
remark: publisher: HUPO Proteomics Standards Initiative Mass Spectrometry Standards Working Group and HUPO Proteomics Standards Initiative Proteomics Informatics Working Group
remark: When appropriate the definition and synonyms of a term are reported exactly as in the chapter 12 of IUPAC orange book. See http://www.iupac.org/projects/2003/2003-056-2-500.html and http://mass-spec.lsu.edu/msterms/index.php/Main_Page
remark: For any queries contact psidev-ms-vocab@lists.sourceforge.net
remark: URL: https://raw.githubusercontent.com/HUPO-PSI/psi-ms-CV/master/psi-ms.obo
remark: This work is licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) license.
remark: To view a copy of this license, visit https://creativecommons.org/licenses/by/4.0/ or send a letter to Creative Commons, 444 Castro Street, Suite 900, Mountain View, California, 94041, USA.
ontology: ms

[Typedef]
id: has_regexp
name: has regexp

[Typedef]
id: has_units
name: has_units

[Typedef]
id: part_of
name: part_of
is_transitive: true

[Typedef]
id: has_order
name: has_order

[Typedef]
id: has_domain
name: has_domain

[Typedef]
id: has_value_type
name: has value type
def: "'Entity A' has value type 'Entity B', such as xsd:float." []

[Term]
id: MS:0000000
name: Proteomics Standards Initiative Mass Spectrometry Vocabularies
def: "Proteomics Standards Initiative Mass Spectrometry Vocabularies." [PSI:MS]

[Term]
id: MS:1000001
name: sample number
def: "A reference number relevant to the sample under study." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000548 ! sample attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000002
name: sample name
def: "A reference string relevant to the sample under study." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000548 ! sample attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000003
name: sample state
def: "The chemical phase of a pure sample, or the state of a mixed sample." [PSI:MS]
is_a: MS:1000548 ! sample attribute

[Term]
id: MS:1000004
name: sample mass
def: "Total mass of sample used." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000548 ! sample attribute
relationship: has_units UO:0000021 ! gram
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000005
name: sample volume
def: "Total volume of solution used." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000548 ! sample attribute
relationship: has_units UO:0000098 ! milliliter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000006
name: sample concentration
def: "Concentration of sample in picomol/ul, femtomol/ul or attomol/ul solution used." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000548 ! sample attribute
relationship: has_units UO:0000175 ! gram per liter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000007
name: inlet type
def: "The nature of the sample inlet." [PSI:MS]
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1000008
name: ionization type
def: "The method by which gas phase ions are generated from the sample." [PSI:MS]
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1000009
name: ionization mode
def: "OBSOLETE Whether positive or negative ions are selected for analysis by the spectrometer." [PSI:MS]
comment: This term was made obsolete because it was replaced by scan polarity (MS:1000465).
is_obsolete: true

[Term]
id: MS:1000010
name: analyzer type
def: "OBSOLETE The common name of the particular analyzer stage being described. Synonym of mass analyzer, should be obsoleted." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000011
name: mass resolution
def: "Smallest mass difference between two equal magnitude peaks so that the valley between them is a specified fraction of the peak height." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000012
name: resolution measurement method
def: "Which of the available standard measures is used to define whether two peaks are separate." [PSI:MS]
is_a: MS:1000596 ! measurement method

[Term]
id: MS:1000013
name: resolution type
def: "OBSOLETE Specify the nature of resolution for the mass analyzer. Resolution is usually either constant with respect to m/z or proportional to m/z." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000014
name: accuracy
def: "Accuracy is the degree of conformity of a measured mass to its actual value." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000480 ! mass analyzer attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_units UO:0000169 ! parts per million
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000015
name: scan rate
def: "Rate in Th/sec for scanning analyzers." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units MS:1000807 ! Th/s
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000016
name: scan start time
def: "The time that an analyzer started a scan, relative to the start of the MS run." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
is_a: MS:1002345 ! PSM-level attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000017
name: Scan Function
def: "OBSOLETE Describes the type of mass analysis being performed. Two primary modes are: typical acquisition over a range of masses (Mass Scan), and Selected Ion Detection. The primary difference is that Selected Ion Detection produces a single value for the signal at the selected mass rather than producing a mass spectrum." [PSI:MS]
comment: OBSOLETE This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000018
name: scan direction
def: "Direction in terms of m/z of the scan for scanning analyzers (low to high, or high to low)." [PSI:MS]
relationship: part_of MS:1000441 ! scan

[Term]
id: MS:1000019
name: scan law
def: "Describes the function in control of the m/z scan (for scanning instruments). Commonly the scan function is linear, but in principle any function can be used." [PSI:MS]
relationship: part_of MS:1000441 ! scan

[Term]
id: MS:1000020
name: scanning method
def: "Describes the acquisition data type produced by a tandem mass spectrometry experiment." [PSI:MS]
comment: OBSOLETE This former purgatory term was made obsolete.
synonym: "Tandem Scanning Method" RELATED []
is_obsolete: true

[Term]
id: MS:1000021
name: reflectron state
def: "Status of the reflectron, turned on or off." [PSI:MS]
is_a: MS:1000480 ! mass analyzer attribute

[Term]
id: MS:1000022
name: TOF Total Path Length
def: "The length of the field free drift space in a time of flight mass spectrometer." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000480 ! mass analyzer attribute
relationship: has_units UO:0000008 ! meter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000023
name: isolation width
def: "OBSOLETE The total width (i.e. not half for plus-or-minus) of the gate applied around a selected precursor ion." [PSI:MS]
comment: This former purgatory term was made obsolete.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
relationship: has_units MS:1000040 ! m/z
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000024
name: final MS exponent
def: "Final MS level achieved when performing PFF with the ion trap (e.g. MS E10)." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1000480 ! mass analyzer attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1000025
name: magnetic field strength
def: "A property of space that produces a force on a charged particle equal to qv x B where q is the particle charge and v its velocity." [PSI:MS]
synonym: "B" EXACT []
synonym: "Magnetic Field" RELATED []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000480 ! mass analyzer attribute
relationship: has_units UO:0000228 ! tesla
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000026
name: detector type
def: "Type of detector used in the mass spectrometer." [PSI:MS]
relationship: part_of MS:1000453 ! detector

[Term]
id: MS:1000027
name: detector acquisition mode
def: "Method by which detector signal is acquired by the data system." [PSI:MS]
relationship: part_of MS:1000453 ! detector

[Term]
id: MS:1000028
name: detector resolution
def: "The resolving power of the detector to detect the smallest difference between two ions so that the valley between them is a specified fraction of the peak height." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000481 ! detector attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000029
name: sampling frequency
def: "The rate of signal sampling (measurement) with respect to time." [PSI:MS]
synonym: "ADC Sampling Frequency" NARROW []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000481 ! detector attribute
relationship: has_units UO:0000106 ! hertz
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000030
name: vendor
def: "OBSOLETE Name of instrument vendor." [PSI:MS]
comment: This term was made obsolete because it was replaced by instrument model (MS:1000031).
is_obsolete: true

[Term]
id: MS:1000031
name: instrument model
def: "Instrument model name not including the vendor's name." [PSI:MS]
relationship: part_of MS:1000463 ! instrument

[Term]
id: MS:1000032
name: customization
def: "Free text description of a single customization made to the instrument; for several modifications, use several entries." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000496 ! instrument attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000033
name: deisotoping
def: "The removal of isotope peaks to represent the fragment ion as one data point and is commonly done to reduce complexity. It is done in conjunction with the charge state deconvolution." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000034
name: charge deconvolution
def: "The determination of the mass of an ion based on the mass spectral peaks that represent multiple-charge ions." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000035
name: peak picking
def: "Spectral peak processing conducted on the acquired data to convert profile data to centroided data." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000036
name: scan mode
def: "OBSOLETE." [PSI:MS]
comment: This term was made obsolete because .
is_obsolete: true

[Term]
id: MS:1000037
name: polarity
def: "OBSOLETE Terms to describe the polarity setting of the instrument." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Pato Ontology term polarity (UO:0002186).
is_obsolete: true

[Term]
id: MS:1000038
name: minute
def: "OBSOLETE Acquisition time in minutes." [PSI:MS]
comment: This term was made obsolete because it was redundant with Unit Ontology minute (UO:0000031).
is_obsolete: true

[Term]
id: MS:1000039
name: second
def: "OBSOLETE Acquisition time in seconds." [PSI:MS]
comment: This term was made obsolete because it was redundant with Unit Ontology second (UO:0000010).
is_obsolete: true

[Term]
id: MS:1000040
name: m/z
def: "Three-character symbol m/z is used to denote the quantity formed by dividing the mass of an ion in unified atomic mass units by its charge number (regardless of sign). The symbol is written in italicized lower case letters with no spaces. Note 1: The term mass-to-charge-ratio is deprecated. Mass-to-charge ratio has been used for the abscissa of a mass spectrum, although the quantity measured is not the quotient of the ion's mass to its electric charge. The three-character symbol m/z is recommended for the quantity that is the independent variable in a mass spectrum Note 2: The proposed unit thomson (Th) is deprecated." [PSI:MS]
synonym: "mass-to-charge ratio" EXACT []
synonym: "Th" EXACT []
synonym: "thomson" EXACT []
is_a: UO:0000000 ! unit

[Term]
id: MS:1000041
name: charge state
def: "Number of net charges, positive or negative, on an ion." [PSI:MS]
synonym: "z" EXACT []
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
is_a: MS:1000507 ! ion property
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1000042
name: peak intensity
def: "Intensity of ions as measured by the height or area of a peak in a mass spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit
relationship: part_of MS:1000231 ! peak
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000043
name: intensity unit
def: "Intensity units are commonly arbitrary. Detected in counts per second (cps) when using counting detectors, but measured in volts when using analog detectors." [PSI:MS]
is_a: UO:0000000 ! unit

[Term]
id: MS:1000044
name: dissociation method
def: "Fragmentation method used for dissociation or fragmentation." [PSI:MS]
synonym: "Activation Method" RELATED []
relationship: part_of MS:1000456 ! precursor activation

[Term]
id: MS:1000045
name: collision energy
def: "Energy for an ion experiencing collision with a stationary gas particle resulting in dissociation of the ion." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_units UO:0000266 ! electronvolt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000046
name: energy unit
def: "OBSOLETE Energy units are represented in either eV or Joules." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Unit Ontology term energy unit (UO:0000111).
is_a: UO:0000000 ! unit
is_obsolete: true

[Term]
id: MS:1000047
name: emulsion
def: "State if the sample is in emulsion form." [PSI:MS]
is_a: MS:1000003 ! sample state

[Term]
id: MS:1000048
name: gaseous sample state
def: "State if the sample is in gaseous form." [PSI:MS]
is_a: MS:1000003 ! sample state

[Term]
id: MS:1000049
name: liquid sample state
def: "State if the sample is in liquid form." [PSI:MS]
is_a: MS:1000003 ! sample state

[Term]
id: MS:1000050
name: solid sample state
def: "State if the sample is in solid form." [PSI:MS]
is_a: MS:1000003 ! sample state

[Term]
id: MS:1000051
name: solution
def: "State if the sample is in solution form." [PSI:MS]
is_a: MS:1000003 ! sample state

[Term]
id: MS:1000052
name: suspension
def: "State if the sample is in suspension form." [PSI:MS]
is_a: MS:1000003 ! sample state

[Term]
id: MS:1000053
name: sample batch
def: "Sample batch lot identifier." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000548 ! sample attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000054
name: chromatography
def: "OBSOLETE Chromatographic conditions used to obtain the sample." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000055
name: continuous flow fast atom bombardment
def: "Fast atom bombardment ionization in which the analyte in solution is entrained in a flowing liquid matrix." [PSI:MS]
synonym: "CF-FAB" EXACT []
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000056
name: direct inlet
def: "The sample is directly inserted into the ion source, usually on the end of a heatable probe." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000057
name: electrospray inlet
def: "Inlet used for introducing the liquid sample into an electrospray ionization source." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000058
name: flow injection analysis
def: "Sample is directly injected or infused into the ionization source." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000059
name: inductively coupled plasma
def: "A gas discharge ion source in which the energy to the plasma is supplied by electromagnetic induction." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000060
name: infusion
def: "The continuous flow of solution of a sample into the ionization source." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000061
name: jet separator
def: "A device that separates carrier gas from gaseous analyte molecules on the basis of diffusivity." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000062
name: membrane separator
def: "A device to separate carrier molecules from analyte molecules on the basis of ease of diffusion across a semipermeable membrane." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000063
name: moving belt
def: "Continuous moving surface in the form of a belt which passes through an ion source carrying analyte molecules." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000064
name: moving wire
def: "Continuous moving surface in the form of a wire which passes through an ion source carrying analyte molecules." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000065
name: open split
def: "A division of flowing stream of liquid into two streams." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000066
name: particle beam
def: "Method for generating ions from a solution of an analyte." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000067
name: reservoir
def: "A sample inlet method involving a reservoir." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000068
name: septum
def: "A disc composed of a flexible material that seals the entrance to the reservoir. Can also be entrance to the vacuum chamber." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000069
name: thermospray inlet
def: "A method for generating gas phase ions from a solution of an analyte by rapid heating of the sample." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000070
name: atmospheric pressure chemical ionization
def: "Chemical ionization that takes place at atmospheric pressure as opposed to the reduced pressure is normally used for chemical ionization." [PSI:MS]
synonym: "APCI" EXACT []
is_a: MS:1000240 ! atmospheric pressure ionization

[Term]
id: MS:1000071
name: chemical ionization
def: "The formation of a new ion by the reaction of a neutral species with an ion. The process may involve transfer of an electron, a proton or other charged species between the reactants. When a positive ion results from chemical ionization the term may be used without qualification. When a negative ion results the term negative ion chemical ionization should be used. Note that this term is not synonymous with chemi-ionization." [PSI:MS]
synonym: "CI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000072
name: Electronic Ionization
def: "OBSOLETE The ionization of an atom or molecule by electrons that are typically accelerated to energies between 50 and 150 eV. Usually 70 eV electrons are used to produce positive ions. The term 'electron impact' is not recommended." [PSI:MS]
comment: This term was made obsolete because it was replaced by electron ionization (MS:1000389).
synonym: "EI" EXACT []
is_obsolete: true

[Term]
id: MS:1000073
name: electrospray ionization
def: "A process in which ionized species in the gas phase are produced from an analyte-containing solution via highly charged fine droplets, by means of spraying the solution from a narrow-bore needle tip at atmospheric pressure in the presence of a high electric field. When a pressurized gas is used to aid in the formation of a stable spray, the term pneumatically assisted electrospray ionization is used. The term ion spray is not recommended." [PSI:MS]
synonym: "ESI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000074
name: fast atom bombardment ionization
def: "The ionization of any species by the interaction of a focused beam of neutral atoms having a translational energy of several thousand eV with a sample that is typically dissolved in a solvent matrix. See also secondary ionization." [PSI:MS]
synonym: "FAB" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000075
name: matrix-assisted laser desorption ionization
def: "The formation of gas-phase ions from molecules that are present in a solid or solvent matrix that is irradiated with a pulsed laser. See also laser desorption/ionization." [PSI:MS]
synonym: "MALDI" EXACT []
is_a: MS:1000247 ! desorption ionization

[Term]
id: MS:1000076
name: negative ion mode
def: "OBSOLETE." [PSI:MS]
comment: This term was made obsolete because it was replaced by negative scan (MS:1000129).
is_obsolete: true

[Term]
id: MS:1000077
name: positive ion mode
def: "OBSOLETE." [PSI:MS]
comment: This term was made obsolete because it was replaced by positive scan (MS:1000130).
is_obsolete: true

[Term]
id: MS:1000078
name: axial ejection linear ion trap
def: "A linear ion trap mass spectrometer where ions are ejected along the axis of the analyzer." [PSI:MS]
is_a: MS:1000291 ! linear ion trap

[Term]
id: MS:1000079
name: fourier transform ion cyclotron resonance mass spectrometer
def: "A mass spectrometer based on the principle of ion cyclotron resonance in which an ion in a magnetic field moves in a circular orbit at a frequency characteristic of its m/z value. Ions are coherently excited to a larger radius orbit using a pulse of radio frequency energy and their image charge is detected on receiver plates as a time domain signal. Fourier transformation of the time domain signal results in a frequency domain signal which is converted to a mass spectrum based in the inverse relationship between frequency and m/z." [PSI:MS]
synonym: "FT_ICR" EXACT []
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000080
name: magnetic sector
def: "A device that produces a magnetic field perpendicular to a charged particle beam that deflects the beam to an extent that is proportional to the particle momentum per unit charge. For a monoenergetic beam, the deflection is proportional to m/z." [PSI:MS]
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000081
name: quadrupole
def: "A mass spectrometer that consists of four parallel rods whose centers form the corners of a square and whose opposing poles are connected. The voltage applied to the rods is a superposition of a static potential and a sinusoidal radio frequency potential. The motion of an ion in the x and y dimensions is described by the Matthieu equation whose solutions show that ions in a particular m/z range can be transmitted along the z axis." [PSI:MS]
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000082
name: quadrupole ion trap
def: "Quadrupole Ion Trap mass analyzer captures the ions in a three dimensional ion trap and then selectively ejects them by varying the RF and DC potentials." [PSI:MS]
synonym: "Paul Ion trap" EXACT []
synonym: "QIT" EXACT []
synonym: "Quistor" EXACT []
is_a: MS:1000264 ! ion trap

[Term]
id: MS:1000083
name: radial ejection linear ion trap
def: "A linear ion trap mass spectrometer where ions are ejected along the radius of the analyzer." [PSI:MS]
is_a: MS:1000291 ! linear ion trap

[Term]
id: MS:1000084
name: time-of-flight
def: "Instrument that separates ions by m/z in a field-free region after acceleration to a fixed acceleration energy." [PSI:MS]
synonym: "TOF" EXACT []
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000085
name: baseline
def: "An attribute of resolution when recording the detector response in absence of the analyte." [PSI:MS]
is_a: MS:1000012 ! resolution measurement method

[Term]
id: MS:1000086
name: full width at half-maximum
def: "A measure of resolution represented as width of the peak at half peak height." [PSI:MS]
synonym: "FWHM" EXACT []
is_a: MS:1000012 ! resolution measurement method

[Term]
id: MS:1000087
name: ten percent valley
def: "An attribute of resolution when the ratio between adjacent signals is 10% of the signal height." [PSI:MS]
is_a: MS:1000012 ! resolution measurement method

[Term]
id: MS:1000088
name: constant
def: "OBSOLETE When resolution is constant with respect to m/z." [PSI:MS]
comment: This child of the former purgatory term resolution type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000089
name: proportional
def: "OBSOLETE When resolution is proportional with respect to m/z." [PSI:MS]
comment: This child of the former purgatory term resolution type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000090
name: mass scan
def: "OBSOLETE A variation of instrument where a selected mass is scanned." [PSI:MS]
comment: This child of the former purgatory term Scan Function was made obsolete.
is_obsolete: true

[Term]
id: MS:1000091
name: selected ion detection
def: "OBSOLETE Please see Single Ion Monitoring." [PSI:MS]
comment: This child of the former purgatory term Scan Function was made obsolete.
is_obsolete: true

[Term]
id: MS:1000092
name: decreasing m/z scan
def: "High to low direction in terms of m/z of the scan for scanning analyzers." [PSI:MS]
is_a: MS:1000018 ! scan direction

[Term]
id: MS:1000093
name: increasing m/z scan
def: "Low to high direction in terms of m/z of the scan for scanning analyzers." [PSI:MS]
is_a: MS:1000018 ! scan direction

[Term]
id: MS:1000094
name: exponential
def: "The mass scan is done in exponential mode." [PSI:MS]
is_a: MS:1000019 ! scan law

[Term]
id: MS:1000095
name: linear
def: "OBSOLETE The mass scan is done in linear mode." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Pato Ontology term linear (UO:0001199).
is_a: MS:1000019 ! scan law
is_obsolete: true

[Term]
id: MS:1000096
name: quadratic
def: "The mass scan is done in quadratic mode." [PSI:MS]
is_a: MS:1000019 ! scan law

[Term]
id: MS:1000097
name: constant neutral mass loss
def: "OBSOLETE A spectrum formed of all product ions that have been produced with a selected m/z decrement from any precursor ions. The spectrum shown correlates to the precursor ion spectrum. See also neutral loss spectrum." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000098
name: multiple ion monitoring
def: "OBSOLETE Data acquired when monitoring the ion current of a few specific m/z values. Remap to MS:1000205 -Selected Ion Monitoring." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000099
name: multiple reaction monitoring
def: "OBSOLETE This term is not recommended. See Selected Reaction Monitoring." [PSI:MS]
comment: This term was made obsolete because it was merged with selected reaction monitoring (MS:1000206).
synonym: "MRM" EXACT []
is_obsolete: true

[Term]
id: MS:1000100
name: precursor ion scan
def: "OBSOLETE The specific scan function or process that will record a precursor ion spectrum." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000101
name: product ion scan
def: "OBSOLETE The specific scan function or process that records product ion spectrum." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000102
name: single ion monitoring
def: "OBSOLETE The operation of a mass spectrometer to monitor a single ion rather than scanning entire mass spectrum." [PSI:MS]
comment: This term was made obsolete because it was replaced by single ion monitoring (MS:100205).
is_obsolete: true

[Term]
id: MS:1000103
name: single reaction monitoring
def: "OBSOLETE This term is not recommended. See Selected Reaction Monitoring." [PSI:MS]
comment: This term was made obsolete because it was replaced by selected reaction monitoring (MS:1000206).
is_obsolete: true

[Term]
id: MS:1000104
name: None ??
def: "OBSOLETE None." [PSI:MS]
comment: This term was made obsolete because .
is_obsolete: true

[Term]
id: MS:1000105
name: reflectron off
def: "Reflectron is off." [PSI:MS]
is_a: MS:1000021 ! reflectron state

[Term]
id: MS:1000106
name: reflectron on
def: "Reflectron is on." [PSI:MS]
is_a: MS:1000021 ! reflectron state

[Term]
id: MS:1000107
name: channeltron
def: "A horn-shaped (or cone-shaped) continuous dynode particle multiplier. The ion strikes the inner surface of the device and induces the production of secondary electrons that in turn impinge on the inner surfaces to produce more secondary electrons. This avalanche effect produces an increase in signal in the final measured current pulse." [PSI:MS]
synonym: "Channeltron Detector" EXACT []
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000108
name: conversion dynode electron multiplier
def: "A surface that is held at high potential so that ions striking the surface produce electrons that are subsequently detected." [PSI:MS]
is_a: MS:1000346 ! conversion dynode

[Term]
id: MS:1000109
name: conversion dynode photomultiplier
def: "A detector in which ions strike a conversion dynode to produce electrons that in turn generate photons through a phosphorescent screen that are detected by a photomultiplier." [PSI:MS]
synonym: "ion-to-photon detector" RELATED []
is_a: MS:1000346 ! conversion dynode

[Term]
id: MS:1000110
name: daly detector
def: "Detector consisting of a conversion dynode, scintillator and photomultiplier. The metal knob at high potential emits secondary electrons when ions impinge on the surface. The secondary electrons are accelerated onto the scintillator that produces light that is then detected by the photomultiplier detector." [PSI:MS]
synonym: "Daly" EXACT []
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000111
name: electron multiplier tube
def: "A device to amplify the current of a beam or packet of charged particles or photons by incidence upon the surface of an electrode to produce secondary electrons." [PSI:MS]
synonym: "EMT" EXACT []
is_a: MS:1000253 ! electron multiplier

[Term]
id: MS:1000112
name: faraday cup
def: "A conducting cup or chamber that intercepts a charged particle beam and is electrically connected to a current measuring device." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000113
name: focal plane array
def: "An array of detectors for spatially disperse ion beams in which all ions simultaneously impinge on the detector plane." [PSI:MS]
is_a: MS:1000348 ! focal plane collector

[Term]
id: MS:1000114
name: microchannel plate detector
def: "A thin plate that contains a closely spaced array of channels that each act as a continuous dynode particle multiplier. A charged particle, fast neutral particle, or photon striking the plate causes a cascade of secondary electrons that ultimately exits the opposite side of the plate." [PSI:MS]
synonym: "multichannel plate" EXACT []
is_a: MS:1000345 ! array detector

[Term]
id: MS:1000115
name: multi-collector
def: "A detector system commonly used in inductively coupled plasma mass spectrometers." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000116
name: photomultiplier
def: "A detector for conversion of the ion/electron signal into photon(s) which are then amplified and detected." [PSI:MS]
synonym: "PMT" EXACT []
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000117
name: analog-digital converter
def: "Analog-to-digital converter (abbreviated ADC, A/D or A to D) is an electronic integrated circuit (i/c) that converts continuous signals to discrete digital numbers." [PSI:MS]
synonym: "ADC" EXACT []
is_a: MS:1000027 ! detector acquisition mode

[Term]
id: MS:1000118
name: pulse counting
def: "Definition to do." [PSI:MS]
is_a: MS:1000027 ! detector acquisition mode

[Term]
id: MS:1000119
name: time-digital converter
def: "A device for converting a signal of sporadic pluses into a digital representation of their time indices." [PSI:MS]
synonym: "TDC" EXACT []
is_a: MS:1000027 ! detector acquisition mode

[Term]
id: MS:1000120
name: transient recorder
def: "A detector acquisition mode used for detecting transient signals." [PSI:MS]
is_a: MS:1000027 ! detector acquisition mode

[Term]
id: MS:1000121
name: SCIEX instrument model
def: "The brand of instruments from the joint venture between Applied Biosystems and MDS Analytical Technologies (formerly MDS SCIEX). Previously branded as \"Applied Biosystems|MDS SCIEX\"." [PSI:MS]
synonym: "Applied Biosystems|MDS SCIEX" RELATED []
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000122
name: Bruker Daltonics instrument model
def: "Bruker Daltonics' instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000123
name: IonSpec instrument model
def: "IonSpec corporation instrument model." [PSI:MS]
is_a: MS:1000489 ! Varian instrument model

[Term]
id: MS:1000124
name: Shimadzu instrument model
def: "Shimadzu corporation instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000125
name: Thermo Finnigan instrument model
def: "ThermoFinnigan from Thermo Electron Corporation instrument model." [PSI:MS]
is_a: MS:1000483 ! Thermo Fisher Scientific instrument model

[Term]
id: MS:1000126
name: Waters instrument model
def: "Waters Corporation instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000127
name: centroid spectrum
def: "Processing of profile data to produce spectra that contains discrete peaks of zero width. Often used to reduce the size of dataset." [PSI:MS]
synonym: "Discrete Mass Spectrum" EXACT []
is_a: MS:1000525 ! spectrum representation

[Term]
id: MS:1000128
name: profile spectrum
def: "A profile mass spectrum is created when data is recorded with ion current (counts per second) on one axis and mass/charge ratio on another axis." [PSI:MS]
synonym: "continuous mass spectrum" EXACT []
synonym: "Continuum Mass Spectrum" EXACT []
is_a: MS:1000525 ! spectrum representation

[Term]
id: MS:1000129
name: negative scan
def: "Polarity of the scan is negative." [PSI:MS]
is_a: MS:1000465 ! scan polarity
is_a: MS:1000808 ! chromatogram attribute

[Term]
id: MS:1000130
name: positive scan
def: "Polarity of the scan is positive." [PSI:MS]
is_a: MS:1000465 ! scan polarity
is_a: MS:1000808 ! chromatogram attribute

[Term]
id: MS:1000131
name: number of detector counts
def: "The number of counted events observed in one or a group of elements of a detector." [PSI:MS]
is_a: MS:1000043 ! intensity unit

[Term]
id: MS:1000132
name: percent of base peak
def: "The magnitude of a peak or measurement element expressed in terms of the percentage of the magnitude of the base peak intensity." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000043 ! intensity unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000133
name: collision-induced dissociation
def: "The dissociation of an ion after collisional excitation. The term collisional-activated dissociation is not recommended." [PSI:MS]
synonym: "CID" EXACT []
synonym: "CAD" EXACT []
synonym: "collisionally activated dissociation" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000134
name: plasma desorption
def: "The ionization of material in a solid sample by bombarding it with ionic or neutral atoms formed as a result of the fission of a suitable nuclide, typically 252Cf. Synonymous with fission fragment ionization." [PSI:MS]
synonym: "PD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000135
name: post-source decay
def: "A technique specific to reflectron time-of-flight mass spectrometers where product ions of metastable transitions or collision-induced dissociations generated in the drift tube prior to entering the reflectron are m/z separated to yield product ion spectra." [PSI:MS]
synonym: "PSD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000136
name: surface-induced dissociation
def: "Fragmentation that results from the collision of an ion with a surface." [PSI:MS]
synonym: "SID" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000137
name: electron volt
def: "OBSOLETE A non-SI unit of energy (eV) defined as the energy acquired by a particle containing one unit of charge through a potential difference of one volt. An electron-volt is equal to 1.602 176 53(14) x 10^-19 J." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Unit Ontology term electron volt (UO:0000266).
is_obsolete: true

[Term]
id: MS:1000138
name: normalized collision energy
def: "Instrument setting, expressed in percent, for adjusting collisional energies of ions in an effort to provide equivalent excitation of all ions." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_units UO:0000187 ! percent
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000139
name: 4000 QTRAP
def: "Applied Biosystems/MDS SCIEX Q 4000 TRAP MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000140
name: 4700 Proteomics Analyzer
def: "Applied Biosystems/MDS SCIEX 4700 Proteomics Analyzer MS." [PSI:MS]
is_a: MS:1000495 ! Applied Biosystems instrument model

[Term]
id: MS:1000141
name: apex IV
def: "Bruker Daltonics' apex IV: ESI, MALDI, Nanospray, APCI, APPI, Qh-FT_ICR." [PSI:MS]
is_a: MS:1001556 ! Bruker Daltonics apex series

[Term]
id: MS:1000142
name: apex Q
def: "Bruker Daltonics' apex Q: ESI, MALDI, Nanospray, APCI, APPI, Qh-FT_ICR." [PSI:MS]
is_a: MS:1001556 ! Bruker Daltonics apex series

[Term]
id: MS:1000143
name: API 150EX
def: "Applied Biosystems/MDS SCIEX API 150EX MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000144
name: API 150EX Prep
def: "Applied Biosystems/MDS SCIEX API 150EX Prep MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000145
name: API 2000
def: "Applied Biosystems/MDS SCIEX API 2000 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000146
name: API 3000
def: "Applied Biosystems/MDS SCIEX API 3000 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000147
name: API 4000
def: "Applied Biosystems/MDS SCIEX API 4000 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000148
name: autoflex II
def: "Bruker Daltonics' autoflex II: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000149
name: autoflex TOF/TOF
def: "Bruker Daltonics' autoflex TOF/TOF MS: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000150
name: Auto Spec Ultima NT
def: "Waters magnetic sector based AutoSpec Ultima NT MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000151
name: BioTOF II
def: "Bruker Daltonics' BioTOF II: ESI TOF." [PSI:MS]
is_a: MS:1001535 ! Bruker Daltonics BioTOF series

[Term]
id: MS:1000152
name: BioTOF-Q
def: "Bruker Daltonics' BioTOF-Q: ESI Q-TOF." [PSI:MS]
is_a: MS:1001535 ! Bruker Daltonics BioTOF series

[Term]
id: MS:1000153
name: DELTA plusAdvantage
def: "ThermoFinnigan DELTA plusAdvantage MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000154
name: DELTAplusXP
def: "ThermoFinnigan DELTAplusXP MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000155
name: ELEMENT2
def: "OBSOLETE ThermoFinnigan ELEMENT2 MS." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000156
name: esquire 4000
def: "Bruker Daltonics' esquire 4000: linear ion trap, ESI, MALDI, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001533 ! Bruker Daltonics esquire series

[Term]
id: MS:1000157
name: esquire 6000
def: "Bruker Daltonics' esquire 6000: linear ion trap, ESI, MALDI, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001533 ! Bruker Daltonics esquire series

[Term]
id: MS:1000158
name: explorer
def: "IonSpec Explorer MS." [PSI:MS]
is_a: MS:1000123 ! IonSpec instrument model

[Term]
id: MS:1000159
name: GCT
def: "Waters oa-ToF based GCT." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000160
name: HCT
def: "Bruker Daltonics' HCT: ESI Q-TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1000697 ! Bruker Daltonics HCT Series

[Term]
id: MS:1000161
name: HCTplus
def: "Bruker Daltonics' HCTplus: ESI Q-TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1000697 ! Bruker Daltonics HCT Series

[Term]
id: MS:1000162
name: HiRes ESI
def: "IonSpec HiResESI MS." [PSI:MS]
is_a: MS:1000123 ! IonSpec instrument model

[Term]
id: MS:1000163
name: HiRes MALDI
def: "IonSpec HiResMALDI MS." [PSI:MS]
is_a: MS:1000123 ! IonSpec instrument model

[Term]
id: MS:1000164
name: IsoPrime
def: "Waters IsoPrime MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000165
name: IsoProbe
def: "Waters IsoProbe MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000166
name: IsoProbe T
def: "Waters IsoProbe T MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000167
name: LCQ Advantage
def: "ThermoFinnigan LCQ Advantage MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000168
name: LCQ Classic
def: "ThermoFinnigan LCQ Classic MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000169
name: LCQ Deca XP Plus
def: "ThermoFinnigan LCQ Deca XP Plus MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000170
name: M@LDI L
def: "Waters oa-ToF based MALDI L." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000171
name: M@LDI LR
def: "Waters oa-ToF based MALDI LR." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000172
name: MAT253
def: "ThermoFinnigan MAT253 MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000173
name: MAT900XP
def: "ThermoFinnigan MAT900XP MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000174
name: MAT900XP Trap
def: "ThermoFinnigan MAT900XP Trap MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000175
name: MAT95XP
def: "ThermoFinnigan MAT95XP MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000176
name: MAT95XP Trap
def: "ThermoFinnigan MAT95XP Trap MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000177
name: microflex
def: "Bruker Daltonics' microflex: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000178
name: microTOF LC
def: "Bruker Daltonics' microTOF LC: ESI TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1000179
name: neptune
def: "ThermoFinnigan NEPTUNE MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000180
name: NG-5400
def: "Waters NG-5400 MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000181
name: OMEGA
def: "IonSpec OMEGA MS." [PSI:MS]
is_a: MS:1000123 ! IonSpec instrument model

[Term]
id: MS:1000182
name: OMEGA-2001
def: "IonSpec OMEGA-2001 MS." [PSI:MS]
is_a: MS:1000123 ! IonSpec instrument model

[Term]
id: MS:1000183
name: OmniFlex
def: "Bruker Daltonics' OmniFlex: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000184
name: Platform ICP
def: "Waters Platform ICP MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000185
name: PolarisQ
def: "ThermoFinnigan PolarisQ MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000186
name: proteomics solution 1
def: "Applied Biosystems/MDS SCIEX Proteomics Solution 1 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000187
name: Q TRAP
def: "Applied Biosystems/MDS SCIEX Q TRAP MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000188
name: Q-Tof micro
def: "Waters oa-ToF based Q-Tof micro." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000189
name: Q-Tof Ultima
def: "Waters oa-ToF based Q-Tof Ultima." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000190
name: QSTAR
def: "Applied Biosystems/MDS SCIEX QSTAR MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000191
name: quattro micro
def: "Waters (triple) quadrupole based micro." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000192
name: Quattro Ultima
def: "Waters (triple) quadrupole based Ultima." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000193
name: Surveyor MSQ
def: "ThermoFinnigan Surveyor MSQ MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000194
name: SymBiot I
def: "Applied Biosystems/MDS SCIEX SymBiot I MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000195
name: SymBiot XVI
def: "Applied Biosystems/MDS SCIEX SymBiot XVI MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000196
name: TEMPUS TOF
def: "ThermoFinnigan TEMPUS TOF MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000197
name: TRACE DSQ
def: "ThermoFinnigan TRACE DSQ MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000198
name: TRITON
def: "ThermoFinnigan TRITON MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000199
name: TSQ Quantum
def: "ThermoFinnigan TSQ Quantum MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000200
name: ultima
def: "IonSpec Ultima MS." [PSI:MS]
is_a: MS:1000123 ! IonSpec instrument model

[Term]
id: MS:1000201
name: ultraflex
def: "Bruker Daltonics' ultraflex: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000202
name: ultraflex TOF/TOF
def: "Bruker Daltonics' ultraflex TOF/TOF: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000203
name: Voyager-DE PRO
def: "Applied Biosystems/MDS SCIEX Voyager-DE PRO MS." [PSI:MS]
is_a: MS:1000495 ! Applied Biosystems instrument model

[Term]
id: MS:1000204
name: Voyager-DE STR
def: "Applied Biosystems/MDS SCIEX Voyager-DE STR MS." [PSI:MS]
is_a: MS:1000495 ! Applied Biosystems instrument model

[Term]
id: MS:1000205
name: selected ion monitoring
def: "The operation of a mass spectrometer in which the intensities of several specific m/z values are recorded rather than the entire mass spectrum." [PSI:MS]
synonym: "MIM" RELATED []
synonym: "Multiple Ion Monitoring" EXACT []
synonym: "SIM" EXACT []
is_a: MS:1000596 ! measurement method

[Term]
id: MS:1000206
name: selected reaction monitoring
def: "Data acquired from specific product ions corresponding to m/z selected precursor ions recorded via multiple stages of mass spectrometry. Selected reaction monitoring can be performed in time or in space." [PSI:MS]
synonym: "MRM" RELATED []
synonym: "Multiple Reaction Monitoring" RELATED []
synonym: "SRM" EXACT []
is_a: MS:1000596 ! measurement method

[Term]
id: MS:1000207
name: accurate mass
def: "OBSOLETE An experimentally determined mass that is can be to determine a unique elemental formula. For ions less than 200 u, a measurement with 5 ppm accuracy is sufficient to determine the elemental composition." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000002 ! mass unit
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000208
name: average mass
def: "OBSOLETE The mass of an ion or molecule calculated using the average mass of each element weighted for its natural isotopic abundance." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000002 ! mass unit
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000209
name: appearance energy
def: "OBSOLETE The minimum energy that must be imparted to an atom or molecule to produce a specified ion. The term appearance potential is not recommended." [PSI:MS]
synonym: "AE" EXACT []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000266 ! electronvolt
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000210
name: base peak
def: "The peak in a mass spectrum that has the greatest intensity. This term may be applied to the spectra of pure substances or mixtures." [PSI:MS]
synonym: "BP" EXACT []
is_a: MS:1000231 ! peak

[Term]
id: MS:1000211
name: OBSOLETE charge number
def: "OBSOLETE The total charge on an ion divided by the electron charge e. OBSOLETED 2009-10-27 since this was viewed as a duplication of 00041 charge state." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1000212
name: dalton
def: "OBSOLETE A non-SI unit of mass (symbol Da) that is equal to the unified atomic mass unit: 1.660 538 86(28) x 10^-27 kg." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Unit Ontology term dalton (UO:0000221).
is_obsolete: true

[Term]
id: MS:1000213
name: electron affinity
def: "OBSOLETE The electron affinity of M is the minimum energy required for the process M- ? M + e where M- and M are in their ground rotational, vibrational and electronic states and the electron has zero kinetic energy." [PSI:MS]
comment: This child of the former purgatory term ion attribute was made obsolete.
synonym: "EA" EXACT []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000214
name: electron energy obsolete
def: "OBSOLETE The potential difference through which electrons are accelerated before they are used to bring about electron ionization." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000215
name: exact mass
def: "OBSOLETE The calculated mass of an ion or molecule containing a single isotope of each atom." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000002 ! mass unit
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000216
name: field-free region
def: "A section of a mass spectrometer in which there are no electric or magnetic fields." [PSI:MS]
synonym: "FFR" EXACT []
is_a: MS:1000487 ! ion optics attribute

[Term]
id: MS:1000217
name: ionization cross section
def: "OBSOLETE A measure of the probability that a given ionization process will occur when an atom or molecule interacts with a photon, electron, atom or molecule." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000218
name: ionization efficiency
def: "OBSOLETE The ratio of the number of ions formed to the number of electrons, molecules or photons used." [PSI:MS]
comment: This term was made obsolete because it was replaced by ionization efficiency (MS:1000392).
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000219
name: ionization energy
def: "OBSOLETE The minimum energy required to remove an electron from an atom or molecule to produce a positive ion." [PSI:MS]
synonym: "IE" EXACT []
comment: This child of the former purgatory term ion attribute was made obsolete.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
relationship: has_units UO:0000266 ! electronvolt
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000220
name: isotope dilution mass spectrometry
def: "OBSOLETE A quantitative mass spectrometry technique in which an isotopically enriched compound is used as an internal standard." [PSI:MS]
comment: This child of the former purgatory term mass spectrometry was made obsolete.
synonym: "IDMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000221
name: magnetic deflection
def: "The deflection of charged particles in a magnetic field due to a force equal to qvxB where q is the particle charge, v its velocity and B the magnetic field. Magnetic deflection of an ion beam is used for m/z separation in a magnetic sector mass spectrometer." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000222
name: mass defect
def: "OBSOLETE The difference between the monoisotopic and nominal mass of a molecule or atom." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000002 ! mass unit
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000223
name: mass number
def: "OBSOLETE The sum of the protons and neutrons in an atom, molecule or ion." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
is_obsolete: true
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1000224
name: molecular mass
def: "Mass of a molecule measured in unified atomic mass units (u or Da)." [https://en.wikipedia.org/wiki/Molecular_mass]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000861 ! molecular entity property
relationship: has_units UO:0000002 ! mass unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000225
name: monoisotopic mass
def: "OBSOLETE The mass of an ion or molecule calculated using the mass of the most abundant isotope of each element." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000002 ! mass unit
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000226
name: molecular beam mass spectrometry
def: "OBSOLETE A mass spectrometry technique in which the sample is introduced into the mass spectrometer as a molecular beam." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "MBMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000227
name: multiphoton ionization
def: "Photoionization of an atom or molecule in which in two or more photons are absorbed." [PSI:MS]
synonym: "MPI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000228
name: nitrogen rule
def: "OBSOLETE An organic molecule containing the elements C, H, O, S, P, or halogen has an odd nominal mass if it contains an odd number of nitrogen atoms." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000229
name: nominal mass
def: "OBSOLETE The mass of an ion or molecule calculated using the mass of the most abundant isotope of each element rounded to the nearest integer value." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
comment: This child of the former purgatory term ion attribute was made obsolete.
relationship: has_units UO:0000002 ! mass unit
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000230
name: odd-electron rule
def: "OBSOLETE Odd-electron ions may dissociate to form either odd or even-electron ions, whereas even-electron ions generally form even-electron fragment ions." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000231
name: peak
def: "A localized region of relatively large ion signal in a mass spectrum. Although peaks are often associated with particular ions, the terms peak and ion should not be used interchangeably." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000232
name: peak intensity
def: "OBSOLETE The height or area of a peak in a mass spectrum." [PSI:MS]
comment: This term was made obsolete because it was replaced by base peak intensity (MS:1000505).
is_obsolete: true

[Term]
id: MS:1000233
name: proton affinity
def: "OBSOLETE The proton affinity of a species M is defined as the negative of the enthalpy change for the reaction M + H+ ->[M+H]+, where all species are in their ground rotational, vibrational and electronic states." [PSI:MS]
synonym: "PA" EXACT [PSI:MS]
comment: This child of the former purgatory term ion attribute was made obsolete.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000234
name: mass resolving power
def: "OBSOLETE In a mass spectrum, the observed mass divided by the difference between two masses that can be separated. The method by which delta m was obtained and the mass at which the measurement was made should be reported." [PSI:MS]
comment: This term was made obsolete because it was replaced by mass resolving power (MS:1000800).
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000235
name: total ion current chromatogram
def: "Representation of the total ion current detected in each of a series of mass spectra versus time." [PSI:MS]
synonym: "TIC chromatogram" EXACT []
is_a: MS:1000810 ! ion current chromatogram

[Term]
id: MS:1000236
name: transmission
def: "The ratio of the number of ions leaving a region of a mass spectrometer to the number entering that region." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000496 ! instrument attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000237
name: unified atomic mass unit
def: "OBSOLETE A non-SI unit of mass (u) defined as one twelfth of ^12 C in its ground state and equal to 1.660 538 86(28) x 10^-27 kg." [PSI:MS]
comment: This term was made obsolete because it was redundant with Unit Ontology dalton (UO:0000221).
synonym: "u" EXACT []
is_obsolete: true

[Term]
id: MS:1000238
name: accelerator mass spectrometry
def: "OBSOLETE A mass spectrometry technique in which atoms extracted from a sample are ionized, accelerated to MeV energies and separated according to their momentum, charge and energy." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "AMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000239
name: atmospheric pressure matrix-assisted laser desorption ionization
def: "Matrix-assisted laser desorption ionization in which the sample target is at atmospheric pressure and the ions formed by the pulsed laser are sampled through a small aperture into the mass spectrometer." [PSI:MS]
synonym: "AP MALDI" EXACT []
is_a: MS:1000240 ! atmospheric pressure ionization

[Term]
id: MS:1000240
name: atmospheric pressure ionization
def: "Any ionization process in which ions are formed in the gas phase at atmospheric pressure." [PSI:MS]
synonym: "API" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000241
name: Atmostpheric Pressure Photoionization
def: "OBSOLETE Atmospheric pressure chemical ionization in which the reactant ions are generated by photo-ionization." [PSI:MS]
comment: This term was made obsolete because it was replaced by atmospheric pressure photoionization (MS:1000382).
synonym: "APPI" EXACT []
is_obsolete: true

[Term]
id: MS:1000242
name: blackbody infrared radiative dissociation
def: "A special case of infrared multiphoton dissociation wherein excitation of the reactant ion is caused by absorption of infrared photons radiating from heated blackbody surroundings, which are usually the walls of a vacuum chamber. See also infrared multiphoton dissociation." [PSI:MS]
synonym: "BIRD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000243
name: charge-remote fragmentation
def: "OBSOLETE A fragmentation of an even-electron ion in which the cleaved bond is not adjacent to the apparent charge site." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
synonym: "CRF" EXACT []
is_obsolete: true

[Term]
id: MS:1000244
name: consecutive reaction monitoring
def: "OBSOLETE MSn experiment with three or more stages of m/z separation and in which a particular multi-step reaction path is monitored." [PSI:MS]
comment: This former purgatory term was made obsolete.
synonym: "CRM" EXACT []
is_obsolete: true

[Term]
id: MS:1000245
name: charge stripping
def: "The reaction of a positive ion with an atom or molecule that results in the removal of one or more electrons from the ion." [PSI:MS]
synonym: "CS" EXACT []
is_a: MS:1000510 ! precursor activation attribute

[Term]
id: MS:1000246
name: delayed extraction
def: "The application of the accelerating voltage pulse after a time delay in desorption ionization from a surface. The extraction delay can produce energy focusing in a time-of-flight mass spectrometer." [PSI:MS]
synonym: "DE" EXACT []
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000247
name: desorption ionization
def: "The formation of ions from a solid or liquid material after the rapid vaporization of that sample." [PSI:MS]
synonym: "DI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000248
name: direct insertion probe
def: "A device for introducing a solid or liquid sample into a mass spectrometer ion source for desorption ionization." [PSI:MS]
synonym: "DIP" EXACT []
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000249
name: direct liquid introduction
def: "The delivery of a liquid sample into a mass spectrometer for spray or desorption ionization." [PSI:MS]
synonym: "DLI" EXACT []
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000250
name: electron capture dissociation
def: "A process in which a multiply protonated molecules interacts with a low energy electrons. Capture of the electron leads the liberation of energy and a reduction in charge state of the ion with the production of the (M + nH) (n-1)+ odd electron ion, which readily fragments." [PSI:MS]
synonym: "ECD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000251
name: even-electron ion
def: "OBSOLETE An ion containing no unpaired electrons in its ground electronic state, e.g. CH3+ in its ground state." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
synonym: "EE" EXACT []
is_obsolete: true

[Term]
id: MS:1000252
name: electron-induced excitation in organics
def: "OBSOLETE The reaction of an ion with an electron in which the translational energy of the collision is converted into internal energy of the ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
synonym: "EIEIO" EXACT []
is_obsolete: true

[Term]
id: MS:1000253
name: electron multiplier
def: "A device to amplify the current of a beam or packet of charged particles or photons by incidence upon the surface of an electrode to produce secondary electrons. The secondary electrons are then accelerated to other electrodes or parts of a continuous electrode to produce further secondary electrons." [PSI:MS]
synonym: "EM" EXACT []
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000254
name: electrostatic energy analyzer
def: "A device consisting of conducting parallel plates, concentric cylinders or concentric spheres that separates charged particles according to their kinetic energy by means of an electric field that is constant in time." [PSI:MS]
synonym: "ESA" EXACT []
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000255
name: flowing afterglow
def: "An ion source immersed in a flow of helium or other inert buffer gas that carries the ions through a meter-long reactor at pressures around 100 Pa." [PSI:MS]
synonym: "FA" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000256
name: high-field asymmetric waveform ion mobility spectrometry
def: "OBSOLETE The separation of ions between two concentric cylindrical electrodes due to application of a high voltage asymmetric waveform whereby ions migrate towards one of the two electrodes depending on the ratio of the high- to low-field mobility of the ion." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "FAIMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000257
name: field desorption
def: "The formation of gas-phase ions from a material deposited on a solid surface in the presence of a high electric field. Because this process may encompass ionization by field ionization or other mechanisms, it is not recommended as a synonym for field desorption ionization." [PSI:MS]
synonym: "FD" EXACT []
is_a: MS:1000247 ! desorption ionization

[Term]
id: MS:1000258
name: field ionization
def: "The removal of electrons from any species by interaction with a high electric field." [PSI:MS]
synonym: "FI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000259
name: glow discharge ionization
def: "The formation of ions in the gas phase and from solid samples at the cathode by application of a voltage to a low pressure gas." [PSI:MS]
synonym: "GD-MS" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000260
name: ion kinetic energy spectrometry
def: "OBSOLETE A method of analysis in which a beam of ions is separated according to the ratio of its translational energy to charge." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "IKES" EXACT []
is_obsolete: true

[Term]
id: MS:1000261
name: ion mobility spectrometry
def: "OBSOLETE The separation of ions according to their velocity through a buffer gas under the influence of an electric field." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "IMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000262
name: infrared multiphoton dissociation
def: "Multiphoton ionization where the reactant ion dissociates as a result of the absorption of multiple infrared photons." [PSI:MS]
synonym: "IRMPD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000263
name: isotope ratio mass spectrometry
def: "OBSOLETE The measurement of the relative quantity of the different isotopes of an element in a material with a mass spectrometer." [PSI:MS]
comment: This child of the former purgatory term mass spectrometry was made obsolete.
synonym: "IRMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000264
name: ion trap
def: "A device for spatially confining ions using electric and magnetic fields alone or in combination." [PSI:MS]
synonym: "IT" EXACT []
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000265
name: kinetic energy release distribution
def: "OBSOLETE Distribution of values of translational kinetic energy release for an ensemble of metastable ions undergoing a specific dissociation reaction." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
synonym: "KERD" EXACT []
is_obsolete: true

[Term]
id: MS:1000266
name: Laser Desorption
def: "OBSOLETE The formation of ions through the interaction of a laser with a material or with gas-phase ions or molecules." [PSI:MS]
comment: This term was made obsolete because it was replaced by laser desorption ionization (MS:1000393).
synonym: "Laser Ionization MERGE" EXACT []
synonym: "LD" EXACT []
is_obsolete: true
replaced_by: MS:1000393

[Term]
id: MS:1000267
name: mass analyzed ion kinetic energy spectrometry
def: "OBSOLETE Spectra that are obtained from a sector mass spectrometer that incorporates at least one magnetic sector plus one electric sector in reverse geometry. The accelerating voltage, V, and the magnetic sector field, B, are set at fixed values to select the precursor ions, which are then allowed to dissociate or to react in a field free region between the two sectors. The kinetic energy product ions of m/z selected precursor ions is analyzed by scanning the electric sector field, E. The width of the product ion spectrum peaks is related to the kinetic energy release distribution (KERD) for the dissociation process." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "MIKES" EXACT []
is_obsolete: true

[Term]
id: MS:1000268
name: mass spectrometry
def: "OBSOLETE The branch of science that deals with all aspects of mass spectrometers and the results obtained with these instruments." [PSI:MS]
comment: This former purgatory term was made obsolete.
synonym: "MS" EXACT []
is_obsolete: true

[Term]
id: MS:1000269
name: mass spectrometry/mass spectrometry
def: "OBSOLETE The acquisition, study and spectra of the electrically charged products or precursors of a m/z selected ion or ions." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "MS/MS" EXACT []
is_obsolete: true

[Term]
id: MS:1000270
name: multiple stage mass spectrometry
def: "OBSOLETE Multiple stages of precursor ion m/z selection followed by product ion detection for successive progeny ions." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
synonym: "MSn" EXACT []
is_obsolete: true

[Term]
id: MS:1000271
name: Negative Ion chemical ionization
def: "Chemical ionization that results in the formation of negative ions." [PSI:MS]
synonym: "NICI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000272
name: neutralization reionization mass spectrometry
def: "With this technique, m/z selected ions form neutrals by charge transfer to a collision gas or by dissociation. The neutrals are separated from the remaining ions and ionized in collisions with a second gas. This method is used to investigate reaction intermediates and other unstable species." [PSI:MS]
synonym: "NRMS" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000273
name: photoionization
def: "The ionization of an atom or molecule by a photon, written M + h? ? M^+ + e. The term photon impact is not recommended." [PSI:MS]
synonym: "PI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000274
name: pyrolysis mass spectrometry
def: "A mass spectrometry technique in which the sample is heated to the point of decomposition and the gaseous decomposition products are introduced into the ion source." [PSI:MS]
synonym: "PyMS" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000275
name: collision quadrupole
def: "A transmission quadrupole to which an oscillating potential is applied so as to focus a beam of ions through a collision gas with no m/z separation." [PSI:MS]
synonym: "q" EXACT []
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000276
name: resonance enhanced multiphoton ionization
def: "Multiphoton ionization in which the ionization cross section is significantly enhanced because the energy of the incident photons is resonant with an intermediate excited state of the neutral species." [PSI:MS]
synonym: "REMPI" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000277
name: residual gas analyzer
def: "OBSOLETE A mass spectrometer used to measure the composition and pressure of gasses in an evacuated chamber." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "RGA" EXACT []
is_obsolete: true

[Term]
id: MS:1000278
name: surface enhanced laser desorption ionization
def: "The formation of ionized species in the gas phase from analytes deposited on a particular surface substrate which is irradiated with a laser beam of which wavelength is absorbed by the surface. See also desorption/ionization on silicon and laser desorption/ionization." [PSI:MS]
synonym: "SELDI" EXACT []
is_a: MS:1000406 ! surface ionization

[Term]
id: MS:1000279
name: surface enhanced neat desorption
def: "Matrix-assisted laser desorption ionization in which the matrix is covalently linked to the target surface." [PSI:MS]
synonym: "SEND" EXACT []
is_a: MS:1000406 ! surface ionization

[Term]
id: MS:1000280
name: suface ionization
def: "OBSOLETE The ionization of a neutral species when it interacts with a solid surface with an appropriate work function and temperature." [PSI:MS]
comment: This term was made obsolete because it was replaced by surface ionization (MS:1000406).
synonym: "SI" EXACT []
is_obsolete: true

[Term]
id: MS:1000281
name: selected ion flow tube
def: "A device in which m/z selected ions are entrained in an inert carrier gas and undergo ion-molecule reactions." [PSI:MS]
synonym: "SIFT" EXACT []
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000282
name: sustained off-resonance irradiation
def: "A technique associated with Fourier transform ion cyclotron resonance (FT-ICR) mass spectrometry to carry out ion/neutral reactions such as low-energy collision-induced dissociation. A radio-frequency electric field of slightly off-resonance to the cyclotron frequency of the reactant ion cyclically accelerates and decelerates the reactant ion that is confined in the Penning ion trap. The ion's orbit does not exceed the dimensions of ion trap while the ion undergoes an ion/neutral species process that produces a high average translational energy for an extended time." [PSI:MS]
synonym: "SORI" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000283
name: Spark Source Mass Spectrometry
def: "OBSOLETE Mass spectrometry using spark ionization." [PSI:MS]
comment: This term was made obsolete because it was replaced by spark ionization (MS:1000404).
synonym: "SSMS" EXACT []
is_obsolete: true

[Term]
id: MS:1000284
name: stored waveform inverse fourier transform
def: "A technique to create excitation waveforms for ions in FT-ICR mass spectrometer or Paul ion trap. An excitation waveform in the time-domain is generated by taking the inverse Fourier transform of an appropriate frequency-domain programmed excitation spectrum, in which the resonance frequencies of ions to be excited are included. This technique may be used for selection of precursor ions in MS2 experiments." [PSI:MS]
synonym: "SWIFT" EXACT []
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000285
name: total ion current
def: "The sum of all the separate ion currents carried by the ions of different m/z contributing to a complete mass spectrum or in a specified m/z range of a mass spectrum." [PSI:MS]
synonym: "TIC" EXACT []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1003058 ! spectrum property
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000286
name: time lag focusing
def: "Energy focusing in a time-of-flight mass spectrometer that is accomplished by introducing a time delay between the formation of the ions and the application of the accelerating voltage pulse." [PSI:MS]
synonym: "TLF" EXACT []
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000287
name: time-of-flight mass spectrometer
def: "OBSOLETE An instrument that separates ions by m/z in a field-free region after acceleration to a fixed kinetic energy." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
synonym: "TOF-MS" EXACT []
is_obsolete: true

[Term]
id: MS:1000288
name: cyclotron
def: "A device that uses an oscillating electric field and magnetic field to accelerate charged particles." [PSI:MS]
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000289
name: double-focusing mass spectrometer
def: "OBSOLETE A mass spectrometer that uses a magnetic sector for m/z focusing and an electric sector for energy focusing of an ion beam." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000290
name: hybrid mass spectrometer
def: "OBSOLETE A mass spectrometer that combines m/z analyzers of different types to perform tandem mass spectrometry." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000291
name: linear ion trap
def: "A two dimensional Paul ion trap in which ions are confined in the axial dimension by means of an electric field at the ends of the trap." [PSI:MS]
is_a: MS:1000264 ! ion trap

[Term]
id: MS:1000292
name: mass spectrograph obsolete
def: "OBSOLETE An instrument that separates a beam of ions according to their mass-to-charge ratio in which the ions are directed onto a focal plane detector such as a photographic plate." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000293
name: mass spectrometer
def: "OBSOLETE An instrument that measures the mass-to-charge ratio and relative abundances of ions." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000294
name: mass spectrum
def: "A plot of the relative abundance of a beam or other collection of ions as a function of the mass-to-charge ratio (m/z)." [PSI:MS]
is_a: MS:1000524 ! data file content
is_a: MS:1000559 ! spectrum type

[Term]
id: MS:1000295
name: mattauch-herzog geometry
def: "OBSOLETE An arrangement for a double-focusing mass spectrometer in which a deflection of ?/(4 ?(2)) radians in a radial electric field is followed by a magnetic deflection of ?/2 radians." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000296
name: nier-johnson geometry
def: "OBSOLETE An arrangement for a double-focusing mass spectrometer in which a deflection of ?/2 radians in a radial electric field analyzer is followed by a magnetic deflection of ?/3 radians." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000297
name: paul ion trap
def: "OBSOLETE A device that permits the trapping of ions by means of an alternating current voltage. The ejection of ions with a m/z less than a prescribed value and retention of those with higher mass depends on the application of radio frequency voltages between a ring electrode and two end-cap electrodes to confine the ions in a circular path. The choice of these voltages determines the m/z below which ions are ejected." [PSI:MS]
comment: This term was made obsolete because it is redundant to quadrupole ion trap.
synonym: "quadrupole ion trap" RELATED []
is_obsolete: true

[Term]
id: MS:1000298
name: prolate traochoidal mass spectrometer
def: "OBSOLETE A mass spectrometer in which the ions of different m/z are separated by means of crossed electric and magnetic fields in such a way that the selected ions follow a prolate trochoidal path." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000299
name: quistor
def: "OBSOLETE An abbreviation of quadrupole ion storage trap. This term is synonymous with Paul Ion Trap. If so then add a synonym to paul and obsolete this term." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000300
name: reflectron
def: "A time-of-flight mass spectrometer that uses a static electric field to reverse the direction of travel of the ions entering it. A reflectron improves mass resolution by assuring that ions of the same m/z but different kinetic energy arrive at the detector at the same time." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000301
name: sector mass spectrometer
def: "OBSOLETE A mass spectrometer consisting of one or more magnetic sectors for m/z selection in a beam of ions. Such instruments may also have one or more electric sectors for energy selection." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000302
name: tandem mass spectrometer
def: "OBSOLETE A mass spectrometer designed for mass spectrometry/mass spectrometry." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000303
name: transmission quadrupole mass spectrometer
def: "OBSOLETE A mass spectrometer that consists of four parallel rods whose centers form the corners of a square and whose opposing poles are connected. The voltage applied to the rods is a superposition of a static potential and a sinusoidal radio frequency potential. The motion of an ion in the x and y dimensions is described by the Matthieu equation whose solutions show that ions in a particular m/z range can be transmitted along the z axis." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000304
name: accelerating voltage
def: "The electrical potential used to impart kinetic energy to ions in a mass spectrometer." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000487 ! ion optics attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000305
name: cyclotron motion
def: "OBSOLETE The circular motion of a charged particle moving at velocity v in a magnetic field B that results from the force qvB." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000306
name: dynamic mass spectrometry
def: "OBSOLETE A mass spectrometer in which m/z separation using one or more electric fields that vary with time." [PSI:MS]
comment: This child of the former purgatory term mass spectrometer was made obsolete.
is_obsolete: true

[Term]
id: MS:1000307
name: einzel lens
def: "Three element charged particle lens in which the first and third elements are held at the same voltage. Such a lens produces focusing without changing the translational energy of the particle." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000308
name: electric field strength
def: "The magnitude of the force per unit charge at a given point in space." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000487 ! ion optics attribute
relationship: has_units UO:0000268 ! volt per meter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000309
name: first stability region
def: "The region of a Mathieu stability diagram closest to the origin. Ions within this region can traverse the full length of a transmission quadrupole." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000310
name: fringing field
def: "The electric or magnetic field that extends from the edge of a sector, lens or other ion optics element." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000311
name: kinetic energy analyzer
def: "A device for measuring the kinetic energy of charged particles using a retarding field, time-of-flight, or the extent of deflection in an electric or magnetic field." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000312
name: mass limit
def: "OBSOLETE The m/z value above which ions cannot be detected in a mass spectrometer." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000313
name: scan m/z range?
def: "OBSOLETE The limit of m/z over which a mass spectrometer can detect ions." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000314
name: mass selective axial ejection
def: "OBSOLETE The use of mass selective instability to eject ions of selected m/z values from an ion trap." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000315
name: mass selective instability
def: "OBSOLETE A method for selective ejection of ions according to their m/z value in an ion trap." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000316
name: mathieu stability diagram
def: "OBSOLETE A graphical representation expressed in terms of reduced coordinates that describes charged particle motion in a quadrupole mass filter or quadrupole ion trap mass spectrometer." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000317
name: orthogonal extraction
def: "OBSOLETE The pulsed acceleration of ions perpendicular to their direction of travel into a time-of-flight mass spectrometer. Ions may be extracted from a directional ion source, drift tube or m/z separation stage." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000318
name: resonance ion ejection
def: "OBSOLETE A mode of ion ejection in a quadrupole ion trap that relies on a auxiliary radio frequency voltage that is applied to the end-cap electrodes. The voltage is tuned to the secular frequency of a particular ion to eject it." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000319
name: space charge effect
def: "The mutual repulsion of particles of like charge that limits the current in a charged-particle beam and causes beams or packets of charged particles to expand radially over time." [PSI:MS]
is_a: MS:1000487 ! ion optics attribute

[Term]
id: MS:1000320
name: static field
def: "An electric or magnetic field that does not change in time." [PSI:MS]
is_a: MS:1000597 ! ion optics type

[Term]
id: MS:1000321
name: 2E Mass Spectrum
def: "OBSOLETE A mass spectrum obtained by setting the electric sector field E to twice the value required to transmit the main ion-beam thereby allowing ions with a kinetic energy-to-charge ratio twice that of the main ion-beam to be transmitted. Product ions resulting from partial charge transfer reactions such as m^2+ + N ? m^+ + N^+ that occur in a collision cell (containing a gas, N) located in a field-free region preceding a magnetic and electric sector combination are detected. When the magnetic sector field B is scanned, a mass spectrum of singly charged product ions of doubly charged precursor ions is obtained." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000322
name: charge inversion mass spectrum
def: "The measurement of the relative abundance of ions that result from a charge inversion reaction as a function of m/z." [PSI:MS]
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000323
name: constant neutral loss scan
def: "OBSOLETE Spectrum of all precursor ions that undergo a selected m/z decrement." [PSI:MS]
comment: This former purgatory term was made obsolete.
synonym: "constant neutral mass loss scan" RELATED []
synonym: "fixed neutral fragment scan" RELATED []
is_obsolete: true

[Term]
id: MS:1000324
name: constant neutral gain scan
def: "OBSOLETE Spectrum of all precursor ions that undergo a selected m/z increment." [PSI:MS]
comment: This former purgatory term was made obsolete.
synonym: "Constant Neutral Mass Gain Scan" EXACT []
is_obsolete: true

[Term]
id: MS:1000325
name: constant neutral gain spectrum
def: "A spectrum formed of all product ions that have been produced by gain of a pre-selected neutral mass following the reaction with and addition of the gas in a collision cell." [PSI:MS]
synonym: "constant neutral mass gain spectrum" EXACT []
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000326
name: constant neutral loss spectrum
def: "A spectrum formed of all product ions that have been produced with a selected m/z decrement from any precursor ions. The spectrum shown correlates to the precursor ion spectrum. See also neutral loss spectrum." [PSI:MS]
synonym: "constant neutral mass loss spectrum" EXACT []
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000327
name: consecutive reaction monitoring
def: "OBSOLETE A type of MS2 experiments with three or more stages of m/z separation and in which a particular multi-step reaction path is monitored." [PSI:MS]
comment: This term was made obsolete because it was replaced by consecutive reaction monitoring (MS:1000244).
is_obsolete: true

[Term]
id: MS:1000328
name: e/2 mass spectrum
def: "A mass spectrum obtained using a sector mass spectrometer in which the electric sector field E is set to half the value required to transmit the main ion-beam. This spectrum records the signal from doubly charged product ions of charge-stripping reactions." [PSI:MS]
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000329
name: linked scan
def: "OBSOLETE A scan in an instrument with two or more m/z analysers or in a sector mass spectrometer that incorporates at least one magnetic sector and one electric sector. Two or more of the analyzers are scanned simultaneously so as to preserve a predetermined relationship between scan parameters to produce a product ion, precursor ion or constant neutral loss spectrum." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000330
name: linked scan at constant b/e
def: "OBSOLETE A linked scan at constant B/E may be performed on a sector mass spectrometer that incorporates at least one magnetic sector plus one electric sector. The magnetic field B and the electric field E are scanned simultaneously while the accelerating voltage V is held constant, so as to maintain the ratio of the two fields constant. This linked scan may record a product ion spectrum of dissociation or other reactions occurring in a field free region preceding the two sectors." [PSI:MS]
comment: This child of the former purgatory term linked scan was made obsolete.
is_obsolete: true

[Term]
id: MS:1000331
name: Linked Scan at Constant E2/V
def: "OBSOLETE A linked scan performed on a sector instrument that incorporates at least one electric sector plus one magnetic sector. The electric sector field, E, and the accelerating voltage, V, are scanned simultaneously, so as to maintain the ratio E2/V at a constant value. This linked scan recordss a product ion spectrum of dissociation or other reactions occurring in a field free region (FFR) preceding the two sectors." [PSI:MS]
comment: This child of the former purgatory term linked scan was made obsolete.
is_obsolete: true

[Term]
id: MS:1000332
name: Linked Scan at Constant B2/E
def: "OBSOLETE A linked scan performed on a sector mass spectrometer that incorporates at least one electric sector plus one magnetic sector in either order. The accelerating voltage is fixed and the magnetic field, B, and the electric field, E, are scanned simultaneously so as to maintain the ratio B2/E at a constant value. This linked scan records a precursor ion spectrum of dissociation or other reactions occurring in the field free region preceding the two sectors. The term B2/E linked scan is not recommended." [PSI:MS]
comment: This child of the former purgatory term linked scan was made obsolete.
is_obsolete: true

[Term]
id: MS:1000333
name: Linked Scan at Constant B[1-(E/E0)]^1/2 / E
def: "OBSOLETE A linked scan performed on a sector instrument that incorporates at least one electric sector plus one magnetic sector placed in either order. The accelerating voltage is fixed while scanning the magnetic field, B, and electric field, E, simultaneously, so as to maintain the quantity B[1-(E/E0)]1/2/E at a constant value. This linked scan records a constant neutral mass loss (or gain) spectrum of dissociation or other reactions occurring in a field free region preceding the two sectors. E0 is the electric field required to transmit the singly charged analog of the desired neutral fragment. The term B[1-(E/E0)]1/2/E linked scan." [PSI:MS]
comment: This child of the former purgatory term linked scan was made obsolete.
is_obsolete: true

[Term]
id: MS:1000334
name: MS/MS in Time
def: "OBSOLETE A tandem mass spectrometry method in which product ion spectra are recorded in a single m/z analyzer (such as a Paul Ion Trap or FTMS) in discreet steps over time. Ions in a specific m/z range are selected, dissociated, and the product ions analyzed sequentially in time." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000335
name: MS/MS in Space
def: "OBSOLETE A tandem mass spectrometry method in which product ion spectra are recorded in m/z analyzers separated in space. Specific m/z separation functions are designed such that in one section of the instrument ions are selected, dissociated in an intermediate region, and the product ions are then transmitted to another analyser for m/z separation and data acquisition." [PSI:MS]
comment: This child of the former purgatory term m/z Separation Method was made obsolete.
is_obsolete: true

[Term]
id: MS:1000336
name: neutral loss
def: "The loss of an uncharged species during a rearrangement process. The value slot holds the molecular formula in Hill notation of the neutral loss molecule, see PMID: 21182243. This term must be used in conjunction with a child of the term MS:1002307 (fragmentation ion type)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001055 ! modification parameters
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000337
name: nth generation product ion
def: "OBSOLETE Serial product ions from dissociation of selected precursor ions where n refers to the number of stages of dissociation. The term granddaughter ion is deprecated." [PSI:MS]
comment: This child of the former purgatory term product ion was made obsolete.
synonym: "granddaughter ion" RELATED []
is_obsolete: true

[Term]
id: MS:1000338
name: nth generation product ion scan
def: "OBSOLETE The specific scan functions or processes that record the appropriate generation of product ion or ions of any m/z selected precursor ions." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000339
name: nth generation product ion spectrum
def: "OBSOLETE The mass spectrum recorded from any mass spectrometer in which the appropriate scan function can be set to record the appropriate generation product ion or ions of m/z selected precursor ions." [PSI:MS]
comment: This term was made obsolete because it was merged with MSn spectrum (MS:1000580).
is_obsolete: true

[Term]
id: MS:1000340
name: precursor ion
def: "OBSOLETE An ion that reacts to form particular product ions. The reaction can be unimolecular dissociation, ion/molecule reaction, isomerization, or change in charge state. The term parent ion is deprecated." [PSI:MS]
comment: This child of the former purgatory term ion role was made obsolete.
synonym: "parent ion" RELATED []
is_obsolete: true

[Term]
id: MS:1000341
name: precursor ion spectrum
def: "Spectrum generated by scanning precursor m/z while monitoring a fixed product m/z." [PSI:MS]
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000342
name: product ion
def: "OBSOLETE An ion formed as the product of a reaction involving a particular precursor ion. The reaction can be unimolecular dissociation to form fragment ions, an ion/molecule reaction, or simply involve a change in the number of charges. The term fragment ion is deprecated. The term daughter ion is deprecated." [PSI:MS]
comment: This child of the former purgatory term ion role was made obsolete.
synonym: "daughter ion" RELATED []
is_obsolete: true

[Term]
id: MS:1000343
name: product ion spectrum
def: "OBSOLETE A mass spectrum recorded from any spectrometer in which the appropriate m/z separation scan function is set to record the product ion or ions of selected precursor ions." [PSI:MS]
comment: This term was made obsolete because it was merged with MSn spectrum (MS:1000580).
is_a: MS:1000294 ! mass spectrum
is_obsolete: true

[Term]
id: MS:1000344
name: progeny ion
def: "OBSOLETE A charged product of a series of consecutive reactions that includes product ions, 1st generation product ions, 2nd generation product ions, etc. Given the sequential fragmentation scheme: M1+ -> M2+ -> M3+ -> M4+ -> M5+. M4+ is the precursor ion of M5+, a 1st generation product ion of M3+, a 2nd generation product ion of M2+ and a 3rd generation product ion of M1+." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
synonym: "Progeny Fragment Ion" EXACT []
is_obsolete: true

[Term]
id: MS:1000345
name: array detector
def: "Detector comprising several ion collection elements, arranged in a line or grid where each element is an individual detector." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000346
name: conversion dynode
def: "A surface that is held at high potential such that ions striking the surface produce electrons that are subsequently detected." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000347
name: dynode
def: "One of a series of electrodes in a photomultiplier tube. Such an arrangement is able to amplify the current emitted by the photocathode." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000348
name: focal plane collector
def: "A detector for spatially disperse ion beams in which all ions simultaneously impinge on the detector plane." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000349
name: ion-to-photon detector
def: "A detector in which ions strike a conversion dynode to produce electrons that in turn strike a phosphor and the resulting photons are detected by a photomultiplier." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000350
name: point collector
def: "A detector in which the ion beam is focused onto a point and the individual ions arrive sequentially." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000351
name: postacceleration detector
def: "A detector in which the charged particles are accelerated to a high velocity and impinge on a conversion dynode, emitting secondary electrons. The electrons are accelerated onto a phosphor screen, which emits photons that are in turn detected using a photomultiplier or other photon detector." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000352
name: secondary electron
def: "OBSOLETE Electrons that are ejected from a sample surface as a result of bombardment by a primary beam of atoms, ions or photons. WAS IN DETECTOR TYPE. Where should it go." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000353
name: adduct ion
def: "Ion formed by the interaction of an ion with one or more atoms or molecules to form an ion containing all the constituent atoms of the precursor ion as well as the additional atoms from the associated atoms or molecules." [PSI:MS]
is_a: MS:1003055 ! adduct

[Term]
id: MS:1000354
name: aromatic ion
def: "OBSOLETE A planar cyclic ion that obeys the Hueckel (4n + 2) rule where n is a positive integer representing the number of conjugated Pi electrons. Charge delocalization leads to greater stability compared to a hypothetical localized structure." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000355
name: analog ion
def: "OBSOLETE Ions that have similar chemical valence, for example the acetyl cation CH3-CO+ and the thioacetyl cation CH3-CS+." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000356
name: anti-aromatic ion
def: "OBSOLETE A planar cyclic ion with 4n ? electrons and is therefore not aromatic." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000357
name: cationized molecule
def: "OBSOLETE An ion formed by the association of a cation with a neutral molecule, M, for example [M+ Na]+ and [M + K]+. The terms quasi-molecular ion and pseudo-molecular ion should not be used." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000358
name: cluster ion
def: "OBSOLETE An ion formed by a multi-component atomic or molecular assembly of one or more ions with atoms or molecules, such as [(H20)nH]+, [(NaCl)nNa]+ and [(H3PO3)nHPO3]-." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000359
name: Conventional ion
def: "OBSOLETE A radical cation or anion in which the charge site and the unpaired electron spin are both formally located in the same atom or group of atoms, as opposed to the spatially separate electronic configuration of distonic ions. The radical cation of methanol, CH3OH+, in which the charge and spin sites are formally located at the O atom is an example of a conventional ion, whereas .CH2-OH2+ is a distonic ion." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000360
name: diagnostic ion
def: "OBSOLETE A product ion whose formation reveals structural or compositional information of its precursor. For instance, the phenyl cation in an electron ionization mass spectrum is a diagnostic ion for benzene and derivatives." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000361
name: dimeric ion
def: "OBSOLETE An ion formed by ionization of a dimer or by the association of an ion with its neutral counterpart such as [M2]+ or [M-H-M]+." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000362
name: distonic ion
def: "OBSOLETE A radical cation or anion in which the charge site and the unpaired electron spin cannot be both formally located in the same atom or group of atoms as it can be with a conventional ion. For example, CH2-OH2+ is a distonic ion whereas the radical cation of methanol, CH3OH+ is a conventional ion." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000363
name: enium ion
def: "OBSOLETE A positively charged lower-valency ion of the nonmetallic elements. The methenium ion is CH3+. Other examples are the oxenium, sulfenium, nitrenium, phosphenium, and halenium ions." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000364
name: fragment ion
def: "OBSOLETE A product ion that results from the dissociation of a precursor ion." [PSI:MS]
comment: This term was made obsolete because it was replaced by product ion (MS:1000342).
is_obsolete: true

[Term]
id: MS:1000365
name: ion?
def: "OBSOLETE An atomic or molecular species having a net positive or negative electric charge." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000366
name: Isotopologue ion
def: "OBSOLETE An ion that differs only in the isotopic composition of one or more of its constituent atoms. For example CH4+ and CH3D+ or 10BF3 and 11BF3. The term isotopologue is a contraction of isotopic homologue." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000367
name: Isotopomeric ion
def: "OBSOLETE Isomeric ion having the same numbers of each isotopic atom but differing in their positions. Isotopomeric ions can be either configurational isomers in which two atomic isotopes exchange positions or isotopic stereoisomers. The term isotopomer is a shortening of isotopic isomer." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000368
name: metastable ion
def: "OBSOLETE An ion that is formed with internal energy higher than the threshold for dissociation but with a lifetime great enough to allow it to exit the ion source and enter the mass spectrometer where it dissociates before detection." [PSI:MS]
comment: This child of the former purgatory term ion stability type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000369
name: molecular ion
def: "OBSOLETE An ion formed by the removal of one or more electrons to form a positive ion or the addition off one or more electrons to form a negative ion." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000370
name: negative ion
def: "OBSOLETE An atomic or molecular species having a net negative electric charge." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000371
name: non-classical ion
def: "OBSOLETE Hyper-coordinated carbonium ion such as the penta-coordinated norbornyl cation. Note: Tri-coordinated carbenium ions are termed classical ions." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000372
name: onium ion
def: "OBSOLETE A positively charged hypervalent ion of the nonmetallic elements. Examples are the methonium ion CH5+, the hydrogenonium ion H3+ and the hydronium ion H3O+. Other examples are the carbonium, oxonium, sulfonium, nitronium, diazonium, phosphonium, and halonium ions. Onium ions are not limited to monopositive ions; multiply-charged onium ions exist such as the gitonic (proximal) oxonium dication H4O2+ and the distonic oxonium dication H2O+-CH2-CH2-OH2+." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000373
name: principal ion
def: "OBSOLETE Most abundant ion of an isotope cluster, such as the 11B79Br2 81Br+ ion of m/z 250 of the cluster of isotopologue molecular ions of BBr3. The term principal ion has also been used to describe ions that have been artificially isotopically enriched in one or more positions such as CH3 13CH3+ or CH2D2 +, but those are best defined as isotopologue ions." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000374
name: positive ion
def: "OBSOLETE An atomic or molecular species having a net positive electric charge." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000375
name: protonated molecule
def: "OBSOLETE An ion formed by interaction of a neutral molecule with a proton and represented by the symbol [M + H]+, where M is the neutral molecule. The term 'protonated molecular ion,' 'quasi-molecular ion' and 'pseudo-molecular ion' are not recommended." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000376
name: radical ion
def: "OBSOLETE An ion, either a cation or anion, containing unpaired electrons in its ground state. The unpaired electron is denoted by a superscript dot alongside the superscript symbol for charge, such as for the molecular ion of a molecule M, that is, M+. Radical ions with more than one charge and/or more than one unpaired electron are denoted such as M(2+)(2). Unless the positions of the unpaired electron and charge can be associated with specific atoms, superscript charge designation should be placed before the superscript dot designation." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000377
name: reference ion
def: "OBSOLETE A stable ion whose structure is known with certainty. These ions are usually formed by direct ionization of a neutral molecule of known structure and are used to verify by comparison the structure of an unknown ion." [PSI:MS]
comment: This child of the former purgatory term ion chemical type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000378
name: stable ion
def: "OBSOLETE An ion with internal energy sufficiently low that it does not rearrange or dissociate prior to detection in a mass spectrometer." [PSI:MS]
comment: This child of the former purgatory term ion stability type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000379
name: unstable ion
def: "OBSOLETE An ion with sufficient energy to dissociate within the ion source." [PSI:MS]
comment: This child of the former purgatory term ion stability type was made obsolete.
is_obsolete: true

[Term]
id: MS:1000380
name: adiabatic ionization
def: "A process whereby an electron is removed from an atom, ion, or molecule to produce an ion in its lowest energy state." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000381
name: associative ionization
def: "An ionization process in which two excited atoms or molecules react to form a single positive ion and an electron." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000382
name: atmospheric pressure photoionization
def: "Atmospheric pressure chemical ionization in which the reactant ions are generated by photo-ionization." [PSI:MS]
is_a: MS:1000240 ! atmospheric pressure ionization

[Term]
id: MS:1000383
name: autodetachment
def: "The formation of a neutral when a negative ion in a discrete state with an energy greater than the detachment threshold loses an electron spontaneously without further interaction with an energy source." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000384
name: autoionization
def: "The formation of an ion when an atom or molecule in a discrete state with an energy greater than the ionization threshold loses an electron spontaneously without further interaction with an energy source." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000385
name: charge exchange ionization
def: "The interaction of an ion with an atom or molecule in which the charge on the ion is transferred to the neutral without the dissociation of either. Synonymous with charge transfer ionization." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000386
name: chemi-ionization
def: "The reaction of a neutral molecule with an internally excited molecule to form an ion. Note that this term is not synonymous with chemical ionization." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000387
name: desorption/ionization on silicon
def: "The formation of ions by laser desorption ionization of a sample deposited on a porous silicon surface." [PSI:MS]
is_a: MS:1000247 ! desorption ionization

[Term]
id: MS:1000388
name: dissociative ionization
def: "The reaction of a gas-phase molecule that results in its decomposition to form products, one of which is an ion." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000389
name: electron ionization
def: "The ionization of an atom or molecule by electrons that are typically accelerated to energies between 50 and 150 eV. Usually 70 eV electrons are used to produce positive ions. The term 'electron impact' is not recommended." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000390
name: ion desolvation
def: "OBSOLETE The removal of solvent molecules clustered around a gas-phase ion by means of heating and/or collisions with gas molecules." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000391
name: ion-pair formation
def: "OBSOLETE The reaction of a molecule to form both a positive ion and negative ion fragment among the products." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000392
name: ionization efficiency
def: "The ratio of the number of ions formed to the number of electrons, molecules or photons used." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000393
name: laser desorption ionization
def: "The formation of gas-phase ions by the interaction of a pulsed laser with a solid or liquid material." [PSI:MS]
is_a: MS:1000247 ! desorption ionization

[Term]
id: MS:1000395
name: liquid secondary ionization
def: "The ionization of any species by the interaction of a focused beam of ions with a sample that is dissolved in a solvent matrix. See also fast atom bombardment and secondary ionization." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000396
name: membrane inlet
def: "A semi-permeable membrane separator that permits the passage of gas sample directly to the mass spectrometer ion source." [PSI:MS]
is_a: MS:1000007 ! inlet type

[Term]
id: MS:1000397
name: microelectrospray
def: "Electrospray ionization at a solvent flow rate of 300-800 nL/min where the flow is a result of a mechanical pump. See nanoelectrospray." [PSI:MS]
is_a: MS:1000073 ! electrospray ionization

[Term]
id: MS:1000398
name: nanoelectrospray
def: "Electrospray ionization at a flow rate less than ~25 nL/min. Nanoelectrospray is synonymous with nanospray. The flow is dependent on the potenial on the tip of the electrospray needle and/or a gas presure to push the sample through the needle. See also electrospray ionization and microelectrospray." [PSI:MS]
synonym: "nanospray" EXACT []
is_a: MS:1000073 ! electrospray ionization

[Term]
id: MS:1000399
name: penning ionization
def: "Ionization that occurs through the interaction of two or more neutral gaseous species, at least one of which is internally excited." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000400
name: plasma desorption ionization
def: "The ionization of material in a solid sample by bombarding it with ionic or neutral atoms formed as a result of the fission of a suitable nuclide, typically 252Cf. Synonymous with fission fragment ionization." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000401
name: pre-ionization state
def: "OBSOLETE An electronic state capable of undergoing auto-Ionization." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000402
name: secondary ionization
def: "The process in which ions are ejected from a sample surface as a result of bombardment by a primary beam of atoms or ions." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000403
name: soft ionization
def: "The formation of gas-phase ions without extensive fragmentation." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000404
name: spark ionization
def: "The formation of ions from a solid material by an intermittent electrical discharge." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000405
name: surface-assisted laser desorption ionization
def: "The formation of gas-phase ions from molecules that are deposited on a particular surface substrate that is irradiated with a pulsed laser. See also matrix-assisted laser desorption ionization." [PSI:MS]
is_a: MS:1000247 ! desorption ionization

[Term]
id: MS:1000406
name: surface ionization
def: "The ionization of a neutral species when it interacts with a solid surface with an appropriate work function and temperature." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000407
name: thermal ionization
def: "The ionization of a neutral species through contact with a high temperature surface." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000408
name: vertical ionization
def: "A process in which an electron is removed from or added to a molecule without a change in the positions of the atoms. The resulting ion is typically in an excited vibrational state." [PSI:MS]
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000409
name: association reaction
def: "OBSOLETE The reaction of an ion with a neutral species in which the reactants combine to form a single ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000410
name: alpha-cleavage
def: "OBSOLETE A homolytic cleavage where the bond fission occurs between at the atom adjacent to the atom at the apparent charge site and an atom removed from the aparent charge site by two bonds." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000411
name: beta-cleavage
def: "OBSOLETE A homolytic cleavage where the bond fission occurs between at an atom removed from the apparent charge site atom by two bonds and an atom adjacent to that atom and removed from the aparent charge site by three bonds." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000412
name: buffer gas
def: "An inert gas used for collisional deactivation of internally excited ions." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000413
name: charge-induced fragmentation
def: "OBSOLETE Fragmentation of an odd electron ion in which the cleaved bond is adjacent to the apparent charge site. Synonymous with charge mediated fragmentation." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000414
name: charge inversion reaction
def: "OBSOLETE Reaction of an ion with a neutral species in which the charge on the product ion is reversed in sign with respect to the reactant ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000415
name: charge permutation reaction
def: "OBSOLETE The reaction of an ion with a neutral species with a resulting change in the magnitude or sign of the charge on the reactant ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000416
name: charge stripping reaction
def: "OBSOLETE Reaction of a positive ion with a neutral species in which the positive charge on the product ion is greater than that on the reactant ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000417
name: charge transfer reaction
def: "OBSOLETE The reaction of an ion with a neutral species in which some or all of the charge of the reactant ion is transferred to the neutral species." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000418
name: collisional excitation
def: "OBSOLETE The reaction of an ion with a neutral species in which the translational energy of the collision is converted into internal energy of the ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000419
name: collision gas
def: "An inert gas used for collisional excitation. The term target gas is not recommended." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000420
name: heterolytic cleavage
def: "OBSOLETE Fragmentation of a molecule or ion in which both electrons forming the single bond that is broken remain on one of the atoms that were originally bonded. This term is synonymous with heterolysis." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
synonym: "heterolysis" RELATED []
is_obsolete: true

[Term]
id: MS:1000421
name: high energy collision
def: "OBSOLETE Collision-induced dissociation process wherein the projectile ion has laboratory-frame translational energy higher than 1 keV." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000422
name: beam-type collision-induced dissociation
def: "A collision-induced dissociation process that occurs in a beam-type collision cell." [PSI:MS]
synonym: "HCD" EXACT []
is_a: MS:1000133 ! collision-induced dissociation

[Term]
id: MS:1000423
name: homolytic cleavage
def: "OBSOLETE Fragmentation of an odd electron ion that results from one of a pair of electrons that form a bond between two atoms moving to form a pair with the odd electron on the atom at the apparent charge site. Fragmentation results in the formation of an even electron ion and a radical. This reaction involves the movement of a single electron and is symbolized by a single-barbed arrow. Synonymous with Homolysis." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
synonym: "homolysis" RELATED []
is_obsolete: true

[Term]
id: MS:1000424
name: hydrogen/deuterium exchange
def: "OBSOLETE Exchange of hydrogen atoms with deuterium atoms in a molecule or pre-formed ion in solution prior to introduction into a mass spectrometer, or by reaction of an ion with a deuterated collision gas inside a mass spectrometer." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000425
name: ion energy loss spectrum
def: "OBSOLETE A plot of the relative abundance of a beam or other collection of ions as a function their loss of translational energy in reactions with neutral species." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000426
name: ionizing collision
def: "OBSOLETE The reaction of an ion with a neutral species in which one or more electrons are removed from either the ion or neutral." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000427
name: ion/molecule reaction
def: "OBSOLETE The reaction of an ion with a neutral molecule. The term ion-molecule reaction is not recommended because the hyphen suggests a single species that is that is both an ion and a molecule." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000428
name: ion/neutral complex
def: "OBSOLETE A particular type of transition state that lies between precursor and product ions on the reaction coordinate of some ion reactions." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000429
name: ion/neutral species reaction
def: "OBSOLETE A process wherein a charged species interacts with a neutral reactant to produce either chemically different species or changes in the internal energy of one or both of the reactants." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000430
name: ion/neutral species exchange reaction
def: "OBSOLETE In this reaction an association reaction is accompanied by the subsequent or simultaneous liberation of a different neutral species as a product." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000431
name: kinetic method
def: "OBSOLETE An approach to determination of ion thermodynamic quantities by a bracketing procedure in which the relative probabilities of competing ion fragmentations are measured via the relative abundances of the reaction products. The extended kinetic method takes the associated entropy changes into account." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000432
name: low energy collisions
def: "OBSOLETE A collision between an ion and neutral species with translational energy approximately 1000 eV or lower." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000433
name: low-energy collision-induced dissociation
def: "A collision-induced dissociation process wherein the precursor ion has the translational energy lower than approximately 1000 eV. This process typically requires multiple collisions and the collisional excitation is cumulative." [PSI:MS]
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000434
name: McLafferty Rearrangement
def: "OBSOLETE A dissociation reaction triggered by transfer of a hydrogen atom via a 6-member transition state to the formal radical/charge site from a carbon atom four atoms removed from the charge/radical site (the gamma-carbon); subsequent rearrangement of electron density leads to expulsion of an olefin molecule. This term was originally applied to ketone ions where the charge/radical site is the carbonyl oxygen, but it is now more widely applied." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000435
name: photodissociation
def: "A process wherein the reactant ion is dissociated as a result of absorption of one or more photons." [PSI:MS]
synonym: "multiphoton dissociation" EXACT []
synonym: "MPD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000436
name: partial charge transfer reaction
def: "OBSOLETE Reaction of an ion with a neutral species in which some but not all of the ion charge is transferred to the neutral." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000437
name: ion reaction
def: "OBSOLETE Chemical transformation involving an ion." [PSI:MS]
comment: This child of the former purgatory term ion was made obsolete.
is_obsolete: true

[Term]
id: MS:1000438
name: superelastic collision
def: "OBSOLETE Collision in which the translational energy of the fast-moving collision partner is increased at the expense of internal energy of one or both collision partners." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000439
name: surface-induced reaction
def: "OBSOLETE A process wherein a reactant ion interacts with a surface to produce either chemically different species or a change in the internal energy of the reactant ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000440
name: unimolecular dissociation
def: "OBSOLETE Fragmentation reaction in which the molecularity is treated as one, irrespective of whether the dissociative state is that of a metastable ion produced in the ion source or results from collisional excitation of a stable ion." [PSI:MS]
comment: This child of the former purgatory term ion reaction was made obsolete.
is_obsolete: true

[Term]
id: MS:1000441
name: scan
def: "Function or process of the mass spectrometer where it records a spectrum." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000442
name: spectrum
def: "Representation of intensity values corresponding to a range of measurement space." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000443
name: mass analyzer type
def: "Mass analyzer separates the ions according to their mass-to-charge ratio." [PSI:MS]
relationship: part_of MS:1000451 ! mass analyzer

[Term]
id: MS:1000444
name: m/z Separation Method
def: "OBSOLETE Mass/charge separation Method." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000445
name: sequential m/z separation method
def: "OBSOLETE Sequential m/z separation method." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000446
name: fast ion bombardment
def: "The ionization of any species by the interaction of a focused beam of ions having a translational energy of several thousand eV with a solid sample." [PSI:MS]
synonym: "FIB" EXACT []
is_a: MS:1000008 ! ionization type

[Term]
id: MS:1000447
name: LTQ
def: "Finnigan LTQ MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000448
name: LTQ FT
def: "Finnigan LTQ FT MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000449
name: LTQ Orbitrap
def: "Finnigan LTQ Orbitrap MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000450
name: LXQ
def: "Finnigan LXQ MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000451
name: mass analyzer
def: "Terms used to describe the Analyzer." [PSI:MS]
synonym: "analyzer" EXACT []
relationship: part_of MS:1000463 ! instrument

[Term]
id: MS:1000452
name: data transformation
def: "Terms used to describe types of data processing." [PSI:MS]
synonym: "data processing" EXACT []
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000453
name: detector
def: "The device that detects ions." [PSI:MS]
relationship: part_of MS:1000463 ! instrument

[Term]
id: MS:1000454
name: instrument additional description
def: "OBSOLETE Additional terms to describe the instrument as outlined in the mass spec doc, Appendix 1, section 1.5." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000455
name: ion selection attribute
def: "Ion selection properties that are associated with a value." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000456
name: precursor activation
def: "Terms to describe the precursor activation." [PSI:MS]
synonym: "activation" EXACT []
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000457
name: sample
def: "Terms to describe the sample." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000458
name: source
def: "Terms to describe the source." [PSI:MS]
relationship: part_of MS:1000463 ! instrument

[Term]
id: MS:1000459
name: spectrum instrument description
def: "OBSOLETE Terms used to describe the spectrum." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000460
name: unit
def: "OBSOLETE Terms to describe units." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Unit Ontology term unit (UO:0000000).
relationship: part_of MS:1001458 ! spectrum generation information
is_obsolete: true

[Term]
id: MS:1000461
name: additional description
def: "OBSOLETE Terms to describe Additional." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000462
name: ion optics
def: "Device used in the construction of a mass spectrometer to focus, contain or otherwise manipulate ions." [PSI:MS]
relationship: part_of MS:1000463 ! instrument

[Term]
id: MS:1000463
name: instrument
def: "Description of the instrument or the mass spectrometer." [PSI:MS]
synonym: "instrument configuration" EXACT []
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000464
name: mass unit
def: "OBSOLETE A unit of measurement for mass." [PSI:MS]
comment: This term was made obsolete because it was redundant with Unit Ontology mass unit (UO:0000002).
is_obsolete: true

[Term]
id: MS:1000465
name: scan polarity
def: "Relative orientation of the electromagnetic field during the selection and detection of ions in the mass spectrometer." [PSI:MS]
relationship: part_of MS:1000441 ! scan

[Term]
id: MS:1000466
name: alternating
def: "OBSOLETE Alternating." [PSI:MS]
comment: This term was made obsolete because .
is_obsolete: true

[Term]
id: MS:1000467
name: 1200 series LC/MSD SL
def: "The 1200 Series LC/MSD SL ion trap belongs to the Agilent LC/MSD ion trap family. It provides fast polarity switching and multisignal data acquisition capabilities in a single run while also providing 5 stages of automated data dependent MS2 and 11 stages of manual MS2." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000468
name: 6110 Quadrupole LC/MS
def: "The 6110 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with an entry level single quadrupole mass spectrometer from the 6100 Series of Agilent quadrupole mass spectrometers. 6110 Quadrupole mass spectrometer has m/z range of 10-1500 and 2500 u/s scan speed. It proves useful for wide range of SIM quantitative applications." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000469
name: 6120A Quadrupole LC/MS
def: "The 6120A Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a single quadrupole mass spectrometer from the 6100 Series of Agilent mass spectrometers. 6120 quadrupole mass spectrometer has m/z range of 10-1500, 2500 u/s scan speed and utilizes multiple signal acquisition." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000470
name: 6130 Quadrupole LC/MS
def: "The 6130 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a single quadrupole mass spectrometer from the 6100 series of Agilent mass spectrometers. The 6130 quadrupole mass spectrometer has m/z range of 2-3000, 2500 u/s scan speed in standard mode and 5250 u/s speed in fast-scan mode. It also uses multiple signal acquisition." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000471
name: 6140 Quadrupole LC/MS
def: "The 6140 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a single quadrupole mass spectrometer from the 6100 Series of Agilent quadrupole mass spectrometers. 6140 Quadrupole mass spectrometer has m/z range of 10-1350, 2500 u/s scan speed in standard mode and 10000 u/s speed in fast-scan mode. It also uses multiple signal acquisition." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000472
name: 6210 Time-of-Flight LC/MS
def: "The 6210 Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer. This time of flight mass spectrometer has a m/z range of 50-12000, mass accuracy of less than 2 ppm and resolution greater than 13,000 at m/z 2722. It has multiple ion sources and can be used with multimode ion sources." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000473
name: 6310 Ion Trap LC/MS
def: "The 6310 Ion Trap LC/MS is a Agilent liquid chromatography instrument combined with a 6300 series Agilent ion trap. It has a mass range of 50-2200 between 0.6 to 0.35 resolution and mass range of 200-4000 with resolution of 3-4. The scan speed varies from 1650-27000 for the respective mass ranges." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000474
name: 6320 Ion Trap LC/MS
def: "The 6320 Ion Trap LC/MS is a Agilent liquid chromatography instrument combined with a 6300 series Agilent ion trap. It has a mass range of 50-2200 between 0.6 to 0.25 resolution and mass range of 200-4000 with resolution of less than 3. The scan speed varies from 1650-27000 for the respective mass ranges." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000475
name: 6330 Ion Trap LC/MS
def: "The 6330 Ion Trap LC/MS is a Agilent liquid chromatography instrument combined with a 6300 series Agilent ion trap. It has a mass range of 50-2200 between 0.6 to 0.25 resolution and mass range of 200-4000 with resolution of less than 3. The scan speed varies from 1650-27000 for the respective mass ranges." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000476
name: 6340 Ion Trap LC/MS
def: "The 6340 Ion Trap LC/MS is a Agilent liquid chromatography instrument combined with a 6300 series Agilent ion trap. It has a mass range of 50-2200 between 0.6 to 0.25 resolution and mass range of 200-4000 with resolution of less than 3. The scan speed varies from 1650-27000 for the respective mass ranges." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000477
name: 6410 Triple Quadrupole LC/MS
def: "The 6410 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer. Mass range of the mass spectrometer is 15-1650 m/z, resolution is at three settings of 0.7 u (unit), 1.2 u (wide) and 2.5 u (widest). The mass accuracy for 6410 mass spectrometer is 0.1 across the mass range. The collision cell is a hexapole with linear acceleration." [PSI:MS]
synonym: "6410 Triple Quad LC/MS" EXACT []
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000478
name: 1200 series LC/MSD VL
def: "The LC/MSD VL ion trap is part of the family of Agilent ion trap mass spectrometers. It has ESI, APCI and APPI ion sources and is a useful ion trap when the amount of sample is not the limiting factor." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000479
name: purgatory
def: "OBSOLETE Terms that will likely become obsolete unless there are wails of dissent." [PSI:MS]
comment: The whole branch purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000480
name: mass analyzer attribute
def: "Analyzer properties that are associated with a value." [PSI:MS]
relationship: part_of MS:1000451 ! mass analyzer

[Term]
id: MS:1000481
name: detector attribute
def: "Detector attribute recognized as a value." [PSI:MS]
relationship: part_of MS:1000453 ! detector

[Term]
id: MS:1000482
name: source attribute
def: "Property of a source device that need a value." [PSI:MS]
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1000483
name: Thermo Fisher Scientific instrument model
def: "Thermo Fisher Scientific instrument model. The company has gone through several names including Thermo Finnigan, Thermo Scientific." [PSI:MS]
synonym: "Thermo Scientific" RELATED []
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000484
name: orbitrap
def: "An ion trapping device that consists of an outer barrel-like electrode and a coaxial inner spindle-like electrode that form an electrostatic field with quadro-logarithmic potential distribution. The frequency of harmonic oscillations of the orbitally trapped ions along the axis of the electrostatic field is independent of the ion velocity and is inversely proportional to the square root of m/z so that the trap can be used as a mass analyzer." [PSI:MS]
is_a: MS:1000443 ! mass analyzer type

[Term]
id: MS:1000485
name: nanospray inlet
def: "Nanospray Inlet." [PSI:MS]
is_a: MS:1000057 ! electrospray inlet

[Term]
id: MS:1000486
name: source potential
def: "Potential difference at the MS source in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000487
name: ion optics attribute
def: "Ion optics involves components that help focus ion streams in mass spectrometry." [PSI:MS]
is_a: MS:1000462 ! ion optics

[Term]
id: MS:1000488
name: Hitachi instrument model
def: "Hitachi instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000489
name: Varian instrument model
def: "Varian instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000490
name: Agilent instrument model
def: "Agilent instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000491
name: Dionex instrument model
def: "Dionex instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000492
name: Thermo Electron instrument model
def: "Thermo Electron Corporation instrument model." [PSI:MS]
is_a: MS:1000483 ! Thermo Fisher Scientific instrument model

[Term]
id: MS:1000493
name: Finnigan MAT instrument model
def: "Finnigan MAT instrument model." [PSI:MS]
is_a: MS:1000483 ! Thermo Fisher Scientific instrument model

[Term]
id: MS:1000494
name: Thermo Scientific instrument model
def: "Thermo Scientific instrument model." [PSI:MS]
is_a: MS:1000483 ! Thermo Fisher Scientific instrument model

[Term]
id: MS:1000495
name: Applied Biosystems instrument model
def: "Applied Biosystems instrument model." [PSI:MS]
synonym: "ABI" EXACT []
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1000496
name: instrument attribute
def: "Instrument properties that are associated with a value." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000463 ! instrument

[Term]
id: MS:1000497
name: zoom scan
def: "Special scan mode where data with improved resolution is acquired. This is typically achieved by scanning a more narrow m/z window or scanning with a lower scan rate." [PSI:MS]
synonym: "enhanced resolution scan" EXACT []
is_a: MS:1000503 ! scan attribute

[Term]
id: MS:1000498
name: full scan
def: "OBSOLETE Feature of the ion trap mass spectrometer where MS data is acquired over a mass range." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000499
name: spectrum attribute
def: "Nonphysical characteristic attributed to a spectrum." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000500
name: scan window upper limit
def: "The lower m/z bound of a mass spectrometer scan window." [PSI:MS]
synonym: "mzRangeStop" RELATED []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000549 ! selection window attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000501
name: scan window lower limit
def: "The upper m/z bound of a mass spectrometer scan window." [PSI:MS]
synonym: "mzRangeStart" RELATED []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000549 ! selection window attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000502
name: dwell time
def: "The time spent gathering data across a peak." [PSI:MS]
synonym: "Scan Duration" RELATED []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000503
name: scan attribute
def: "Nonphysical characteristic attributed to a spectrum acquisition scan." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000441 ! scan

[Term]
id: MS:1000504
name: base peak m/z
def: "M/z value of the signal of highest intensity in the mass spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1003058 ! spectrum property
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000505
name: base peak intensity
def: "The intensity of the greatest peak in the mass spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1003058 ! spectrum property
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000506
name: ion role
def: "OBSOLETE Ion Role." [PSI:MS]
comment: This child of the former purgatory term ion was made obsolete.
is_obsolete: true

[Term]
id: MS:1000507
name: ion property
def: "Nonphysical characteristic attributed to an ion." [PSI:MS]
relationship: part_of MS:1002806 ! ion

[Term]
id: MS:1000508
name: ion chemical type
def: "OBSOLETE Ion Type." [PSI:MS]
comment: This child of the former purgatory term ion was made obsolete.
is_obsolete: true

[Term]
id: MS:1000509
name: activation energy
def: "Activation Energy." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_units UO:0000266 ! electronvolt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000510
name: precursor activation attribute
def: "Precursor Activation Attribute." [PSI:MS]
relationship: part_of MS:1000456 ! precursor activation

[Term]
id: MS:1000511
name: ms level
def: "Stage number achieved in a multi stage mass spectrometry acquisition." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1000499 ! spectrum attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1000512
name: filter string
def: "A string unique to Thermo instrument describing instrument settings for the scan." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000513
name: binary data array
def: "A data array of values." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum
relationship: part_of MS:1000625 ! chromatogram

[Term]
id: MS:1000514
name: m/z array
def: "A data array of m/z values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units MS:1000040 ! m/z

[Term]
id: MS:1000515
name: intensity array
def: "A data array of intensity values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit

[Term]
id: MS:1000516
name: charge array
def: "A data array of charge values." [PSI:MS]
xref: binary-data-type:MS\:1000519 "32-bit integer"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1000517
name: signal to noise array
def: "A data array of signal-to-noise values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1000518
name: binary data type
def: "Encoding type of binary data specifying the binary representation and precision, e.g. 64-bit float." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum
relationship: part_of MS:1000625 ! chromatogram

[Term]
id: MS:1000519
name: 32-bit integer
def: "Signed 32-bit little-endian integer." [PSI:MS]
is_a: MS:1000518 ! binary data type

[Term]
id: MS:1000520
name: 16-bit float
def: "OBSOLETE Signed 16-bit float." [PSI:MS]
is_a: MS:1000518 ! binary data type
is_obsolete: true

[Term]
id: MS:1000521
name: 32-bit float
def: "32-bit precision little-endian floating point conforming to IEEE-754." [PSI:MS]
is_a: MS:1000518 ! binary data type

[Term]
id: MS:1000522
name: 64-bit integer
def: "Signed 64-bit little-endian integer." [PSI:MS]
is_a: MS:1000518 ! binary data type

[Term]
id: MS:1000523
name: 64-bit float
def: "64-bit precision little-endian floating point conforming to IEEE-754." [PSI:MS]
is_a: MS:1000518 ! binary data type

[Term]
id: MS:1000524
name: data file content
def: "Describes the data content on the file." [PSI:MS]
relationship: part_of MS:1000577 ! source data file

[Term]
id: MS:1000525
name: spectrum representation
def: "Way in which the spectrum is represented, either with regularly spaced data points or with a list of centroided peaks." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000526
name: Waters raw format
def: "Waters data file format found in a Waters RAW directory, generated from an MS acquisition." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000527
name: highest observed m/z
def: "Highest m/z value observed in the m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000808 ! chromatogram attribute
is_a: MS:1003058 ! spectrum property
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000528
name: lowest observed m/z
def: "Lowest m/z value observed in the m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000808 ! chromatogram attribute
is_a: MS:1003058 ! spectrum property
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000529
name: instrument serial number
def: "Serial Number of the instrument." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000496 ! instrument attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000530
name: file format conversion
def: "Conversion of one file format to another." [PSI:MS]
is_a: MS:1000452 ! data transformation

[Term]
id: MS:1000531
name: software
def: "Software related to the recording or transformation of spectra." [PSI:MS]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1000532
name: Xcalibur
def: "Thermo Finnigan software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000693 ! Thermo Finnigan software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000533
name: Bioworks
def: "Thermo Finnigan software for data analysis of peptides and proteins." [PSI:MS]
synonym: "Bioworks Browser" RELATED []
is_a: MS:1000693 ! Thermo Finnigan software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000534
name: MassLynx
def: "Micromass software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000694 ! Waters software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000535
name: FlexAnalysis
def: "Bruker software for data analysis." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000536
name: Data Explorer
def: "Applied Biosystems software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000691 ! Applied Biosystems software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000537
name: 4700 Explorer
def: "Applied Biosystems software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000691 ! Applied Biosystems software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000538
name: massWolf
def: "A software for converting Waters raw directory format to mzXML or mzML. MassWolf was originally developed at the Institute for Systems Biology." [PSI:MS]
synonym: "wolf" EXACT []
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000539
name: Voyager Biospectrometry Workstation System
def: "Applied Biosystems MALDI-TOF data acquisition and analysis system." [PSI:MS]
is_a: MS:1000691 ! Applied Biosystems software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000540
name: FlexControl
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000541
name: ReAdW
def: "A software program for converting Thermo Finnigan RAW file format to mzXML or mzML. ReAdW was originally developed at the Institute for Systems Biology. Its whimsical interleaved spelling and capitalization is pronounced \"readraw\"." [PSI:MS]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000542
name: MzStar
def: "A software program for converting Applied Biosystems wiff file format to mzXML format. MzStar was originally developed at the Institute for Systems Biology. It is now obsoleted by the MzWiff program." [PSI:MS]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000543
name: data processing action
def: "Data processing attribute used to describe the type of data processing performed on the data file." [PSI:MS]
is_a: MS:1000452 ! data transformation

[Term]
id: MS:1000544
name: Conversion to mzML
def: "Conversion of a file format to Proteomics Standards Initiative mzML file format." [PSI:MS]
is_a: MS:1000530 ! file format conversion

[Term]
id: MS:1000545
name: Conversion to mzXML
def: "Conversion of a file format to Institute of Systems Biology mzXML file format." [PSI:MS]
is_a: MS:1000530 ! file format conversion

[Term]
id: MS:1000546
name: Conversion to mzData
def: "Conversion of a file format to Proteomics Standards Initiative mzData file format." [PSI:MS]
is_a: MS:1000530 ! file format conversion

[Term]
id: MS:1000547
name: object attribute
def: "Object Attribute." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000548
name: sample attribute
def: "Sample properties that are associated with a value." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000457 ! sample

[Term]
id: MS:1000549
name: selection window attribute
def: "Selection window properties that are associated with a value." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000441 ! scan

[Term]
id: MS:1000550
name: time unit
def: "OBSOLETE Time Unit." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Unit Ontology term time unit (UO:0000003).
is_obsolete: true

[Term]
id: MS:1000551
name: Analyst
def: "SCIEX or Applied Biosystems|MDS SCIEX software for data acquisition." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000552
name: maldi spot identifier
def: "OBSOLETE Maldi Spot Identifier." [PSI:MS]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1000553
name: Trapper
def: "A software program for converting Agilent MassHunter format to mzXML or mzML. Trapper was originally developed at the Institute for Systems Biology." [PSI:MS]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000554
name: LCQ Deca
def: "ThermoFinnigan LCQ Deca." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000555
name: LTQ Orbitrap Discovery
def: "LTQ Orbitrap Discovery." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000556
name: LTQ Orbitrap XL
def: "LTQ Orbitrap XL." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000557
name: LTQ FT Ultra
def: "LTQ FT Ultra." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000558
name: GC Quantum
def: "GC Quantum." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000559
name: spectrum type
def: "Spectrum type." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000560
name: mass spectrometer file format
def: "The format of the file being used. This could be a instrument or vendor specific proprietary file format or a converted open file format." [PSI:MS]
is_a: MS:1001459 ! file format

[Term]
id: MS:1000561
name: data file checksum type
def: "Checksum is a form of redundancy check, a simple way to protect the integrity of data by detecting errors in data." [PSI:MS]
relationship: part_of MS:1000577 ! source data file

[Term]
id: MS:1000562
name: ABI WIFF format
def: "Applied Biosystems WIFF file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000563
name: Thermo RAW format
def: "Thermo Scientific RAW file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000564
name: PSI mzData format
def: "Proteomics Standards Inititative mzData file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000565
name: Micromass PKL format
def: "Micromass PKL file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000566
name: ISB mzXML format
def: "Institute of Systems Biology mzXML file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000567
name: Bruker/Agilent YEP format
def: "Bruker/Agilent YEP file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000568
name: MD5
def: "MD5 (Message-Digest algorithm 5) is a (now deprecated) cryptographic hash function with a 128-bit hash value used to check the integrity of files." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000561 ! data file checksum type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000569
name: SHA-1
def: "SHA-1 (Secure Hash Algorithm-1) is a cryptographic hash function designed by the National Security Agency (NSA). It is also used to verify file integrity. Since 2011 it has been deprecated by the NIST as a U. S. government standard." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000561 ! data file checksum type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000570
name: spectra combination
def: "Method used to combine the mass spectra." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1000571
name: sum of spectra
def: "Spectra Sum." [PSI:MS]
is_a: MS:1000570 ! spectra combination

[Term]
id: MS:1000572
name: binary data compression type
def: "Compression Type." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum
relationship: part_of MS:1000625 ! chromatogram

[Term]
id: MS:1000573
name: median of spectra
def: "Spectra is combined by calculating the median of the spectra." [PSI:MS]
is_a: MS:1000570 ! spectra combination

[Term]
id: MS:1000574
name: zlib compression
def: "Zlib." [PSI:MS]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1000575
name: mean of spectra
def: "Spectra is combined by calculating the mean of the spectra." [PSI:MS]
is_a: MS:1000570 ! spectra combination

[Term]
id: MS:1000576
name: no compression
def: "No Compression." [PSI:MS]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1000577
name: source data file
def: "Data file from which an entity is sourced." [PSI:MS]
synonym: "source file" EXACT []
relationship: part_of MS:1001458 ! spectrum generation information
is_a: MS:1000499 ! spectrum attribute

[Term]
id: MS:1000578
name: LCQ Fleet
def: "LCQ Fleet." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000579
name: MS1 spectrum
def: "Mass spectrum created by a single-stage MS experiment or the first stage of a multi-stage experiment." [PSI:MS]
synonym: "full spectrum" EXACT []
synonym: "Q1 spectrum" EXACT []
synonym: "Q3 spectrum" EXACT []
synonym: "Single-Stage Mass Spectrometry" EXACT []
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000580
name: MSn spectrum
def: "MSn refers to multi-stage MS2 experiments designed to record product ion spectra where n is the number of product ion stages (progeny ions). For ion traps, sequential MS/MS experiments can be undertaken where n > 2 whereas for a simple triple quadrupole system n=2. Use the term ms level (MS:1000511) for specifying n." [PSI:MS]
synonym: "multiple-stage mass spectrometry spectrum" EXACT []
synonym: "nth generation product ion spectrum" EXACT []
synonym: "product ion spectrum" EXACT []
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000581
name: CRM spectrum
def: "Spectrum generated from MSn experiment with three or more stages of m/z separation and in which a particular multi-step reaction path is monitored." [PSI:MS]
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000582
name: SIM spectrum
def: "Spectrum obtained with the operation of a mass spectrometer in which the abundances of one ion or several ions of specific m/z values are recorded rather than the entire mass spectrum (Selected Ion Monitoring)." [PSI:MS]
synonym: "MIM spectrum" EXACT []
synonym: "multiple ion monitoring spectrum" EXACT []
synonym: "selected ion monitoring spectrum" EXACT []
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000583
name: SRM spectrum
def: "Spectrum obtained when data are acquired from specific product ions corresponding to m/z values of selected precursor ions a recorded via two or more stages of mass spectrometry. The precursor/product ion pair is called a transition pair. Data can be obtained for a single transition pair or multiple transition pairs. Multiple time segments of different transition pairs can exist in a single file. Single precursor ions can have multiple product ions consitituting multiple transition pairs. Selected reaction monitoring can be performed as tandem mass spectrometry in time or tandem mass spectrometry in space." [PSI:MS]
synonym: "MRM spectrum" EXACT []
synonym: "multiple reaction monitoring spectrum" EXACT []
synonym: "selected reaction monitoring spectrum" EXACT []
is_a: MS:1000294 ! mass spectrum

[Term]
id: MS:1000584
name: mzML format
def: "Proteomics Standards Inititative mzML file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000585
name: contact attribute
def: "Details about a person or organization to contact in case of concern or discussion about the file." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1000586
name: contact name
def: "Name of the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000587
name: contact address
def: "Postal address of the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000588
name: contact URL
def: "Uniform Resource Locator related to the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000589
name: contact email
def: "Email address of the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000590
name: contact affiliation
def: "Home institution of the contact person." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000591
name: MzWiff
def: "A software program for converting Applied Biosystems wiff file format to the mzXML or mzML format. MzWiff is currently maintained at the Institute for Systems Biology. It replaces the slower mzStar program." [PSI:MS]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000592
name: smoothing
def: "A process of reducing spikes of intensity in order to reduce noise while preserving real peak signal. Many algorithms can be applied for this process." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000593
name: baseline reduction
def: "A process of removal of varying intensities generated due to variable energy absorption before further processing can take place. Baseline reduction facilitates meaningful comparision between intensities of m/z values." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000594
name: low intensity data point removal
def: "The removal of very low intensity data points that are likely to be spurious noise rather than real signal." [PSI:MS]
synonym: "thresholding" EXACT []
is_a: MS:1001486 ! data filtering

[Term]
id: MS:1000595
name: time array
def: "A data array of relative time offset values from a reference time." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute

[Term]
id: MS:1000596
name: measurement method
def: "An attribute of resolution when recording the detector response in absence of the analyte." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000597
name: ion optics type
def: "The electrical potential used to impart kinetic energy to ions in a mass spectrometer." [PSI:MS]
is_a: MS:1000462 ! ion optics

[Term]
id: MS:1000598
name: electron transfer dissociation
def: "A process to fragment ions in a mass spectrometer by inducing fragmentation of cations (e.g. peptides or proteins) by transferring electrons to them." [PSI:MS]
synonym: "ETD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000599
name: pulsed q dissociation
def: "A process that involves precursor ion activation at high Q, a time delay to allow the precursor to fragment, then a rapid pulse to low Q where all fragment ions are trapped. The product ions can then be scanned out of the ion trap and detected." [PSI:MS]
synonym: "PQD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1000600
name: Proteios
def: "Database application and analysis platform for proteomics." [PSI:MS, source:http://www.proteios.org]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000601
name: ProteinLynx Global Server
def: "Waters software for data analysis." [PSI:MS]
is_a: MS:1000694 ! Waters software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000602
name: Shimadzu MALDI-TOF instrument model
def: "Shimadzu MALDI-TOF instrument model." [PSI:MS]
is_a: MS:1000124 ! Shimadzu instrument model

[Term]
id: MS:1000603
name: Shimadzu Scientific Instruments instrument model
def: "Shimadzu Scientific Instruments instrument model." [PSI:MS]
is_a: MS:1000124 ! Shimadzu instrument model

[Term]
id: MS:1000604
name: LCMS-IT-TOF
def: "Shimadzu Scientific Instruments LCMS-IT-TOF MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1000605
name: LCMS-2010EV
def: "Shimadzu Scientific Instruments LCMS-2010EV MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1000606
name: LCMS-2010A
def: "Shimadzu Scientific Instruments LCMS-2010A MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1000607
name: AXIMA CFR MALDI-TOF
def: "Shimadzu Biotech AXIMA CFR MALDI-TOF MS." [PSI:MS]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1000608
name: AXIMA-QIT
def: "Shimadzu Biotech AXIMA-QIT MS." [PSI:MS]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1000609
name: AXIMA-CFR plus
def: "Shimadzu Biotech AXIMA-CFR plus MS." [PSI:MS]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1000610
name: AXIMA Performance MALDI-TOF/TOF
def: "Shimadzu Biotech AXIMA Performance MALDI-TOF/TOF MS." [PSI:MS]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1000611
name: AXIMA Confidence MALDI-TOF
def: "Shimadzu Biotech AXIMA Confidence MALDI-TOF (curved field reflectron) MS." [PSI:MS]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1000612
name: AXIMA Assurance Linear MALDI-TOF
def: "Shimadzu Biotech AXIMA Assurance Linear MALDI-TOF MS." [PSI:MS]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1000613
name: DTA format
def: "SEQUEST DTA file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000614
name: ProteinLynx Global Server mass spectrum XML format
def: "Peak list file format used by ProteinLynx Global Server." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000615
name: ProteoWizard software
def: "ProteoWizard software for data processing and analysis. Primarily developed by the labs of P. Malick and D. Tabb." [PSI:MS]
synonym: "pwiz" EXACT []
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000616
name: preset scan configuration
def: "A user-defined scan configuration that specifies the instrumental settings in which a spectrum is acquired. An instrument may cycle through a list of preset scan configurations to acquire data. This is a more generic term for the Thermo \"scan event\", which is defined in the Thermo Xcalibur glossary as: a mass spectrometer scan that is defined by choosing the necessary scan parameter settings. Multiple scan events can be defined for each segment of time." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000617
name: wavelength array
def: "A data array of electromagnetic radiation wavelength values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units UO:0000018 ! nanometer

[Term]
id: MS:1000618
name: highest observed wavelength
def: "Highest wavelength observed in an EMR spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1003058 ! spectrum property
is_a: MS:1000808 ! chromatogram attribute
relationship: has_units UO:0000018 ! nanometer
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000619
name: lowest observed wavelength
def: "Lowest wavelength observed in an EMR spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1003058 ! spectrum property
is_a: MS:1000808 ! chromatogram attribute
relationship: has_units UO:0000018 ! nanometer
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000620
name: PDA spectrum
def: "OBSOLETE Spectrum generated from a photodiode array detector (ultraviolet/visible spectrum)." [PSI:MS]
comment: This term was made obsolete because it was replaced by absorption spectrum (MS:1000806).
is_a: MS:1000524 ! data file content
is_a: MS:1000559 ! spectrum type
is_obsolete: true

[Term]
id: MS:1000621
name: photodiode array detector
def: "An array detector used to record spectra in the ultraviolet and visible region of light." [PSI:MS]
synonym: "PDA" EXACT []
is_a: MS:1000345 ! array detector

[Term]
id: MS:1000622
name: Surveyor PDA
def: "Surveyor PDA." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000623
name: Accela PDA
def: "Accela PDA." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000624
name: inductive detector
def: "Inductive detector." [PSI:MS]
synonym: "image current detector" EXACT []
is_a: MS:1000026 ! detector type

[Term]
id: MS:1000625
name: chromatogram
def: "Representation of a chromatographic separation attribute measurement versus time." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000626
name: chromatogram type
def: "Type of chromatogram measurement being represented." [PSI:MS]
relationship: part_of MS:1000625 ! chromatogram

[Term]
id: MS:1000627
name: selected ion current chromatogram
def: "Representation of an array of the measurements of a specific single ion current versus time." [PSI:MS]
synonym: "SIC chromatogram" EXACT []
is_a: MS:1000810 ! ion current chromatogram

[Term]
id: MS:1000628
name: basepeak chromatogram
def: "Representation of an array of the most intense peaks versus time." [PSI:MS]
is_a: MS:1000810 ! ion current chromatogram

[Term]
id: MS:1000629
name: low intensity threshold
def: "Threshold below which some action is taken." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000630
name: data processing parameter
def: "Data processing parameter used in the data processing performed on the data file." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000631
name: high intensity threshold
def: "Threshold above which some action is taken." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000632
name: Q-Tof Premier
def: "Waters oa-ToF based Q-Tof Premier." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1000633
name: possible charge state
def: "A possible charge state of the ion in a situation where the charge of an ion is known to be one of several possible values rather than a completely unknown value or determined to be a specific charge with reasonable certainty." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1000634
name: DSQ
def: "ThermoFinnigan DSQ GC-MS." [PSI:MS]
is_a: MS:1000125 ! Thermo Finnigan instrument model

[Term]
id: MS:1000635
name: ITQ 700
def: "Thermo Scientific ITQ 700 GC-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000636
name: ITQ 900
def: "Thermo Scientific ITQ 900 GC-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000637
name: ITQ 1100
def: "Thermo Scientific ITQ 1100 GC-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000638
name: LTQ XL ETD
def: "Thermo Scientific LTQ XL MS with ETD." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000639
name: LTQ Orbitrap XL ETD
def: "Thermo Scientific LTQ Orbitrap XL MS with ETD." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000640
name: DFS
def: "Thermo Scientific DFS HR GC-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000641
name: DSQ II
def: "Thermo Scientific DSQ II GC-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000642
name: MALDI LTQ XL
def: "Thermo Scientific MALDI LTQ XL MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000643
name: MALDI LTQ Orbitrap
def: "Thermo Scientific MALDI LTQ Orbitrap MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000644
name: TSQ Quantum Access
def: "Thermo Scientific TSQ Quantum Access MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000645
name: Element XR
def: "Thermo Scientific Element XR HR-ICP-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000646
name: Element 2
def: "Thermo Scientific Element 2 HR-ICP-MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000647
name: Element GD
def: "Thermo Scientific Element GD Glow Discharge MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000648
name: GC IsoLink
def: "Thermo Scientific GC IsoLink Isotope Ratio MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000649
name: Exactive
def: "Thermo Scientific Exactive MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000650
name: Proteome Discoverer
def: "Thermo Scientific software for data analysis of peptides and proteins." [PSI:MS]
is_a: MS:1000693 ! Thermo Finnigan software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000651
name: 3200 QTRAP
def: "SCIEX or Applied Biosystems|MDS SCIEX QTRAP 3200." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000652
name: 4800 Plus MALDI TOF/TOF
def: "SCIEX or Applied Biosystems|MDS SCIEX 4800 Plus MALDI TOF-TOF Analyzer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000653
name: API 3200
def: "SCIEX or Applied Biosystems|MDS SCIEX API 3200 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000654
name: API 5000
def: "SCIEX or Applied Biosystems|MDS SCIEX API 5000 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000655
name: QSTAR Elite
def: "SCIEX or Applied Biosystems|MDS SCIEX QSTAR Elite." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000656
name: QSTAR Pulsar
def: "Applied Biosystems|MDS SCIEX QSTAR Pulsar." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000657
name: QSTAR XL
def: "Applied Biosystems|MDS SCIEX QSTAR XL." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000658
name: 4800 Proteomics Analyzer
def: "Applied Biosystems|MDS SCIEX 4800 Proteomics Analyzer." [PSI:MS]
is_a: MS:1000495 ! Applied Biosystems instrument model

[Term]
id: MS:1000659
name: 4000 Series Explorer Software
def: "SCIEX or Applied Biosystems software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000661
name: GPS Explorer
def: "SCIEX or Applied Biosystems software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000662
name: LightSight Software
def: "SCIEX or Applied Biosystems|MDS SCIEX software metabolite identification." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000663
name: ProteinPilot Software
def: "SCIEX or Applied Biosystems|MDS SCIEX software for protein ID and quant." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000664
name: TissueView Software
def: "Applied Biosystems|MDS SCIEX software for tissue imaging." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000665
name: MarkerView Software
def: "Applied Biosystems|MDS SCIEX software for metabolomics and biomarker profiling." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000666
name: MRMPilot Software
def: "Applied Biosystems|MDS SCIEX software for MRM assay development." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000667
name: BioAnalyst
def: "Applied Biosystems|MDS SCIEX software for bio-related data exploration." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000668
name: Pro ID
def: "Applied Biosystems|MDS SCIEX software for protein identification." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000669
name: Pro ICAT
def: "Applied Biosystems|MDS SCIEX software for protein ID and quant by ICAT." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000670
name: Pro Quant
def: "Applied Biosystems|MDS SCIEX software for protein ID and quant by iTRAQ." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000671
name: Pro BLAST
def: "Applied Biosystems|MDS SCIEX software for MS-BLAST identification." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000672
name: Cliquid
def: "SCIEX Cliquid software for data analysis and quantitation." [PSI:MS]
is_a: MS:1000690 ! SCIEX software

[Term]
id: MS:1000673
name: MIDAS Workflow Designer
def: "Applied Biosystems|MDS SCIEX software for MRM assay development." [PSI:MS]
is_a: MS:1000690 ! SCIEX software

[Term]
id: MS:1000674
name: MultiQuant
def: "Applied Biosystems|MDS SCIEX software for MRM-based quantitation." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000675
name: 6220 Time-of-Flight LC/MS
def: "The 6220 Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer. This time of flight mass spectrometer has a m/z range of 50-12000, mass accuracy of less than 2 ppm and resolution greater than 13,000 at m/z 2722. It has multiple ion sources and can be used with multimode ion sources." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000676
name: 6510 Quadrupole Time-of-Flight LC/MS
def: "The 6510 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer. This time of flight mass spectrometer has a m/z range of 50-12000, mass accuracy of less than 2 ppm and resolution greater than 13,000 at m/z 2722. It has multiple ion sources and can be used with multimode ion sources." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000677
name: 6520A Quadrupole Time-of-Flight LC/MS
def: "The 6520A Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer. This time of flight mass spectrometer has a m/z range of 50-12000, mass accuracy of less than 2 ppm and resolution greater than 26,000 at m/z 2722. It has multiple ion sources and can be used with multimode ion sources." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1000678
name: MassHunter Data Acquisition
def: "Software for data acquisition of 6000 series instruments." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000679
name: MassHunter Easy Access
def: "Software for open access data acquisition." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000680
name: MassHunter Qualitative Analysis
def: "Software for data analysis of data from 6000 series instruments." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000681
name: MassHunter Quantitative Analysis
def: "Software for quantitation of Triple Quadrupole and Quadrupole Time-of-Flight data." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000682
name: MassHunter Metabolite ID
def: "Software for identification of metabolites." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000683
name: MassHunter BioConfirm
def: "Software for protein characterization." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000684
name: Genespring MS
def: "Software for quantitation and statistical analysis of TOF and Q-TOF LC/MS data." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000685
name: MassHunter Mass Profiler
def: "Software for quantitation and statistical analysis of TOF and Q-TOF LC/MS data." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000686
name: METLIN
def: "Personal Metabolite Database for MassHunter Workstation. Software for identification of human metabolites." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000687
name: Spectrum Mill for MassHunter Workstation
def: "Software for protein identification and characterization of complex protein digest mixtures." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000688
name: 6300 Series Ion Trap Data Analysis Software
def: "Software for data analysis of 6300 series ion trap mass spectrometers." [PSI:MS]
is_a: MS:1000689 ! Agilent software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000689
name: Agilent software
def: "Agilent software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000690
name: SCIEX software
def: "SCIEX or Applied Biosystems software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000691
name: Applied Biosystems software
def: "Applied Biosystems|MDS SCIEX software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000692
name: Bruker software
def: "Bruker software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000693
name: Thermo Finnigan software
def: "Thermo Finnigan software for data acquisition and analysis." [PSI:MS]
synonym: "Bioworks Browser" RELATED []
is_a: MS:1000531 ! software

[Term]
id: MS:1000694
name: Waters software
def: "Waters software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000695
name: apex ultra
def: "Bruker Daltonics' apex ultra: ESI, MALDI, Nanospray, APCI, APPI, Qh-FT_ICR." [PSI:MS]
is_a: MS:1001556 ! Bruker Daltonics apex series

[Term]
id: MS:1000696
name: autoflex III smartbeam
def: "Bruker Daltonics' autoflex III smartbeam: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000697
name: Bruker Daltonics HCT Series
def: "Bruker Daltonics' HCT Series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1000698
name: HCTultra
def: "Bruker Daltonics' HCTultra: ESI TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1000697 ! Bruker Daltonics HCT Series

[Term]
id: MS:1000699
name: HCTultra PTM
def: "Bruker Daltonics' HCTultra PTM: ESI TOF, Nanospray, APCI, APPI, PTR." [PSI:MS]
is_a: MS:1000697 ! Bruker Daltonics HCT Series

[Term]
id: MS:1000700
name: HCTultra ETD II
def: "Bruker Daltonics' HCTultra ETD II: ESI Q-TOF, Nanospray, APCI, APPI, ETD." [PSI:MS]
is_a: MS:1000697 ! Bruker Daltonics HCT Series

[Term]
id: MS:1000701
name: microflex LT
def: "Bruker Daltonics' microflex LT: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000702
name: micrOTOF
def: "Bruker Daltonics' micrOTOF: ESI TOF, APCI, APPI." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1000703
name: micrOTOF-Q
def: "Bruker Daltonics' micrOTOF-Q: ESI Q-TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1000704
name: micrOTOF-Q II
def: "Bruker Daltonics' micrOTOF-Q II: ESI Q-TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1000705
name: ultraflex III TOF/TOF
def: "Bruker Daltonics' ultraflex III TOF/TOF: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1000706
name: apexControl
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000707
name: BioTools
def: "Bruker software for data analysis." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000708
name: CLINPROT
def: "Bruker CLINPROT software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000709
name: CLINPROT micro
def: "Bruker CLINPROT micro software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000710
name: CLINPROT robot
def: "Bruker CLINPROT robot software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000711
name: ClinProTools
def: "Bruker ClinProTools software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000712
name: Compass
def: "Bruker Compass software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000713
name: Compass for HCT/esquire
def: "Bruker Compass for HCT/esquire software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000714
name: Compass for micrOTOF
def: "Bruker Compass for micrOTOF software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000715
name: Compass OpenAccess
def: "Bruker compass OpenAccess software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000716
name: Compass Security Pack
def: "Bruker compass Security Pack software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000717
name: CompassXport
def: "Bruker stand-alone software for data conversion." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000718
name: CompassXtract
def: "Bruker software library for data access." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000719
name: DataAnalysis
def: "Bruker software for data analysis." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000720
name: dpControl
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000721
name: esquireControl
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000722
name: flexImaging
def: "Bruker software for data analysis." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000723
name: GENOLINK
def: "Bruker GENOLINK software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000724
name: GenoTools
def: "Bruker GenoTools software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000725
name: HCTcontrol
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000726
name: micrOTOFcontrol
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000727
name: PolyTools
def: "Bruker PolyTools software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000728
name: ProfileAnalysis
def: "Bruker software for data analysis." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000729
name: PROTEINEER
def: "Bruker PROTEINEER software." [PSI:PI]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000730
name: PROTEINEER dp
def: "Bruker PROTEINEER dp software." [PSI:PI]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000731
name: PROTEINEER fc
def: "Bruker PROTEINEER fc software." [PSI:PI]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000732
name: PROTEINEER spII
def: "Bruker PROTEINEER spII software." [PSI:PI]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000733
name: PROTEINEER-LC
def: "Bruker PROTEINEER-LC software." [PSI:PI]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000734
name: ProteinScape
def: "Bruker ProteinScape software." [PSI:PI]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1000735
name: PureDisk
def: "BrukerPureDisk software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000736
name: QuantAnalysis
def: "Bruker software for data analysis." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000737
name: spControl
def: "Bruker software for data acquisition." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001455 ! acquisition software

[Term]
id: MS:1000738
name: TargetAnalysis
def: "Bruker TargetAnalysis software." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000739
name: WARP-LC
def: "Bruker WARP-LC software." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1000740
name: parameter file
def: "Parameter file used to configure the acquisition of raw data on the instrument." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000741
name: Conversion to dta
def: "Conversion to dta format." [PSI:MS]
is_a: MS:1000530 ! file format conversion

[Term]
id: MS:1000742
name: Bioworks SRF format
def: "Thermo Finnigan SRF file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1000743
name: TSQ Quantum Ultra AM
def: "Thermo Scientific TSQ Quantum Ultra AM." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000744
name: selected ion m/z
def: "Mass-to-charge ratio of an selected ion." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000745
name: retention time alignment
def: "The correction of the spectrum scan times, as used e.g. in label-free proteomics." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000746
name: high intensity data point removal
def: "The removal of very high intensity data points." [PSI:MS]
is_a: MS:1001486 ! data filtering

[Term]
id: MS:1000747
name: completion time
def: "The time that a data processing action was finished." [PSI:MS]
xref: value-type:xsd\:dateTime "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_value_type xsd\:dateTime ! The allowed value-type for this CV term

[Term]
id: MS:1000748
name: SSQ 7000
def: "ThermoFinnigan SSQ 7000 MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000749
name: TSQ 7000
def: "ThermoFinnigan TSQ 7000 MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000750
name: TSQ
def: "ThermoFinnigan TSQ MS." [PSI:MS]
is_a: MS:1000493 ! Finnigan MAT instrument model

[Term]
id: MS:1000751
name: TSQ Quantum Ultra
def: "Thermo Scientific TSQ Quantum Ultra." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000752
name: TOPP software
def: "TOPP (The OpenMS proteomics pipeline) software." [PSI:MS]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1000753
name: BaselineFilter
def: "Removes the baseline from profile spectra using a top-hat filter." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000754
name: DBExporter
def: "Exports data from an OpenMS database to a file." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000755
name: DBImporter
def: "Imports data to an OpenMS database." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000756
name: FileConverter
def: "Converts between different MS file formats." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000757
name: FileFilter
def: "Extracts or manipulates portions of data from peak, feature or consensus feature files." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000758
name: FileMerger
def: "Merges several MS files into one file." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000759
name: InternalCalibration
def: "Applies an internal calibration." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000760
name: MapAligner
def: "OBSOLETE Corrects retention time distortions between maps." [PSI:MS]
comment: This term was made obsolete, because it is replaced by the terms under the 'TOPP map aligner' (MS:1002147) branch.
is_a: MS:1000752 ! TOPP software
is_obsolete: true

[Term]
id: MS:1000761
name: MapNormalizer
def: "Normalizes peak intensities in an MS run." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000762
name: NoiseFilter
def: "OBSOLETE Removes noise from profile spectra by using different smoothing techniques." [PSI:MS]
comment: This term was made obsolete, because it is replaced by the terms under the 'TOPP noise filter' (MS:1002131) branch.
is_a: MS:1000752 ! TOPP software
is_obsolete: true

[Term]
id: MS:1000763
name: PeakPicker
def: "OBSOLETE Finds mass spectrometric peaks in profile mass spectra." [PSI:MS]
comment: This term was made obsolete, because it is replaced by the terms under the 'TOPP peak picker' (MS:1002134) branch.
is_a: MS:1000752 ! TOPP software
is_obsolete: true

[Term]
id: MS:1000764
name: Resampler
def: "Transforms an LC/MS map into a resampled map or a png image." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000765
name: SpectraFilter
def: "OBSOLETE Applies a filter to peak spectra." [PSI:MS]
comment: This term was made obsolete, because it is replaced by the terms under the 'TOPP spectra filter' (MS:1002137) branch.
is_a: MS:1000752 ! TOPP software
is_obsolete: true

[Term]
id: MS:1000766
name: TOFCalibration
def: "Applies time of flight calibration." [PSI:MS]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1000767
name: native spectrum identifier format
def: "Describes how the native spectrum identifiers are formated." [PSI:MS]
synonym: "nativeID format" EXACT []
relationship: part_of MS:1000577 ! source data file

[Term]
id: MS:1000768
name: Thermo nativeID format
def: "Native format defined by controllerType=xsd:nonNegativeInteger controllerNumber=xsd:positiveInteger scan=xsd:positiveInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000769
name: Waters nativeID format
def: "Native format defined by function=xsd:positiveInteger process=xsd:nonNegativeInteger scan=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000770
name: WIFF nativeID format
def: "Native format defined by sample=xsd:nonNegativeInteger period=xsd:nonNegativeInteger cycle=xsd:nonNegativeInteger experiment=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000771
name: Bruker/Agilent YEP nativeID format
def: "Native format defined by scan=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000772
name: Bruker BAF nativeID format
def: "Native format defined by scan=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000773
name: Bruker FID nativeID format
def: "Native format defined by file=xsd:IDREF." [PSI:MS]
comment: The nativeID must be the same as the source file ID.
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000774
name: multiple peak list nativeID format
def: "Native format defined by index=xsd:nonNegativeInteger." [PSI:MS]
comment: Used for conversion of peak list files with multiple spectra, i.e. MGF, PKL, merged DTA files. Index is the spectrum number in the file, starting from 0.
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000775
name: single peak list nativeID format
def: "Native format defined by file=xsd:IDREF." [PSI:MS]
comment: The nativeID must be the same as the source file ID. Used for conversion of peak list files with one spectrum per file, typically folder of PKL or DTAs, each sourceFileRef is different.
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000776
name: scan number only nativeID format
def: "Native format defined by scan=xsd:nonNegativeInteger." [PSI:MS]
comment: Used for conversion from mzXML, or DTA folder where native scan numbers can be derived.
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000777
name: spectrum identifier nativeID format
def: "Native format defined by spectrum=xsd:nonNegativeInteger." [PSI:MS]
comment: Used for conversion from mzData. The spectrum id attribute is referenced.
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000778
name: charge state calculation
def: "A process that infers the charge state of an MSn spectrum's precursor(s) by the application of some algorithm." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000779
name: below precursor intensity dominance charge state calculation
def: "Infers charge state as single or ambiguously multiple by determining the fraction of intensity below the precursor m/z." [PSI:MS]
is_a: MS:1000778 ! charge state calculation

[Term]
id: MS:1000780
name: precursor recalculation
def: "A process that recalculates existing precursor selected ions with one or more algorithmically determined precursor selected ions." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1000781
name: msPrefix precursor recalculation
def: "Recalculates one or more precursor selected ions by peak detection in the isolation windows of high accuracy MS precursor scans." [PSI:MS]
is_a: MS:1000780 ! precursor recalculation

[Term]
id: MS:1000782
name: Savitzky-Golay smoothing
def: "Reduces intensity spikes by applying local polynomial regression (of degree k) on a distribution (of at least k+1 equally spaced points) to determine the smoothed value for each point. It tends to preserve features of the distribution such as relative maxima, minima and width, which are usually 'flattened' by other adjacent averaging techniques." [PSI:MS]
is_a: MS:1000592 ! smoothing

[Term]
id: MS:1000783
name: LOWESS smoothing
def: "Reduces intensity spikes by applying a modelling method known as locally weighted polynomial regression. At each point in the data set a low-degree polynomial is fit to a subset of the data, with explanatory variable values near the point whose response is being estimated. The polynomial is fit using weighted least squares, giving more weight to points near the point whose response is being estimated and less weight to points further away. The value of the regression function for the point is then obtained by evaluating the local polynomial using the explanatory variable values for that data point. The LOESS fit is complete after regression function values have been computed for each of the n data points. Many of the details of this method, such as the degree of the polynomial model and the weights, are flexible." [PSI:MS]
is_a: MS:1000592 ! smoothing

[Term]
id: MS:1000784
name: Gaussian smoothing
def: "Reduces intensity spikes by convolving the data with a one-dimensional Gaussian function." [PSI:MS]
synonym: "binomial smoothing" EXACT []
synonym: "Weierstrass transform" EXACT []
is_a: MS:1000592 ! smoothing

[Term]
id: MS:1000785
name: moving average smoothing
def: "Reduces intensity spikes by averaging each point with two or more adjacent points. The more adjacent points that used, the stronger the smoothing effect." [PSI:MS]
synonym: "box smoothing" EXACT []
synonym: "boxcar smoothing" EXACT []
synonym: "sliding average smoothing" EXACT []
is_a: MS:1000592 ! smoothing

[Term]
id: MS:1000786
name: non-standard data array
def: "A data array that contains data not covered by any other term in this group. Please do not use this term, if the binary data array type might be commonly used - contact the PSI-MS working group in order to have another CV term added." [PSI:MS]
xref: binary-data-type:MS\:1000519 "32-bit integer"
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000522 "64-bit integer"
xref: binary-data-type:MS\:1000523 "64-bit float"
xref: binary-data-type:MS\:1001479 "null-terminated ASCII string"
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000513 ! binary data array
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000787
name: inclusive low intensity threshold
def: "Threshold at or below which some action is taken." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000788
name: inclusive high intensity threshold
def: "Threshold at or above which some action is taken." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100
relationship: has_units UO:0000269 ! absorbance unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000789
name: enhanced multiply charged spectrum
def: "MS1 spectrum that is enriched in multiply-charged ions compared to singly-charged ions." [PSI:MS]
is_a: MS:1000579 ! MS1 spectrum

[Term]
id: MS:1000790
name: time-delayed fragmentation spectrum
def: "MSn spectrum in which the product ions are collected after a time delay, which allows the observation of lower energy fragmentation processes after precursor ion activation." [PSI:MS]
is_a: MS:1000580 ! MSn spectrum

[Term]
id: MS:1000791
name: enhanced resolution scan
def: "OBSOLETE Scan with enhanced resolution." [PSI:MS]
comment: This term was made obsolete because it was merged with zoom scan (MS:1000497).
is_obsolete: true

[Term]
id: MS:1000792
name: isolation window attribute
def: "Isolation window parameter." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000441 ! scan

[Term]
id: MS:1000793
name: isolation window upper limit
def: "OBSOLETE The highest m/z being isolated in an isolation window." [PSI:MS]
comment: This term was obsoleted in favour of using a target, lower, upper offset scheme. See terms 1000827-1000829.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000792 ! isolation window attribute
relationship: has_units MS:1000040 ! m/z
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000794
name: isolation window lower limit
def: "OBSOLETE The lowest m/z being isolated in an isolation window." [PSI:MS]
comment: This term was obsoleted in favour of using a target, lower, upper offset scheme. See terms 1000827-1000829.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000792 ! isolation window attribute
relationship: has_units MS:1000040 ! m/z
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000795
name: no combination
def: "Use this term if only one scan was recorded or there is no information about scans available." [PSI:MS]
is_a: MS:1000570 ! spectra combination

[Term]
id: MS:1000796
name: spectrum title
def: "Free-form text title describing a spectrum, usually a series of key value pairs as used in an MGF file." [PSI:MS]
comment: This is the preferred storage place for the spectrum TITLE from an MGF peak list.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
is_a: MS:1000499 ! spectrum attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000797
name: peak list scans
def: "A list of scan numbers and or scan ranges associated with a peak list. If possible the list of scans should be converted to native spectrum identifiers instead of using this term." [PSI:MS]
comment: This is the preferred storage place for the spectrum SCANS attribute from an MGF peak list.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
is_a: MS:1003058 ! spectrum property
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000798
name: peak list raw scans
def: "A list of raw scans and or scan ranges used to generate a peak list. If possible the list of scans should be converted to native spectrum identifiers instead of using this term." [PSI:MS]
comment: This is the preferred storage place for the spectrum RAWSCANS attribute from an MGF peak list.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
is_a: MS:1003058 ! spectrum property
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000799
name: custom unreleased software tool
def: "A software tool that has not yet been released. The value should describe the software. Please do not use this term for publicly available software - contact the PSI-MS working group in order to have another CV term added." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000531 ! software
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000800
name: mass resolving power
def: "The observed mass divided by the difference between two masses that can be separated: m/dm. The procedure by which dm was obtained and the mass at which the measurement was made should be reported." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000801
name: area peak picking
def: "Spectral peak processing conducted on the acquired data to convert profile data to centroided data. The area defined by all raw data points that belong to the peak is reported." [PSI:MS]
synonym: "sum peak picking" EXACT []
is_a: MS:1000035 ! peak picking

[Term]
id: MS:1000802
name: height peak picking
def: "Spectral peak processing conducted on the acquired data to convert profile data to centroided data. The maximum intensity of all raw data points that belong to the peak is reported." [PSI:MS]
synonym: "max peak picking" EXACT []
is_a: MS:1000035 ! peak picking

[Term]
id: MS:1000803
name: analyzer scan offset
def: "Offset between two analyzers in a constant neutral loss or neutral gain scan. The value corresponds to the neutral loss or neutral gain value." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000804
name: electromagnetic radiation spectrum
def: "A plot of the relative intensity of electromagnetic radiation as a function of the wavelength." [PSI:MS]
synonym: "EMR spectrum" EXACT []
is_a: MS:1000524 ! data file content
is_a: MS:1000559 ! spectrum type

[Term]
id: MS:1000805
name: emission spectrum
def: "A plot of the relative intensity of electromagnetic radiation emitted by atoms or molecules when excited." [PSI:MS]
is_a: MS:1000524 ! data file content
is_a: MS:1000559 ! spectrum type

[Term]
id: MS:1000806
name: absorption spectrum
def: "A plot of the relative intensity of electromagnetic radiation absorbed by atoms or molecules when excited." [PSI:MS]
is_a: MS:1000524 ! data file content
is_a: MS:1000559 ! spectrum type

[Term]
id: MS:1000807
name: Th/s
def: "Unit describing the scan rate of a spectrum in Thomson per second." [PSI:MS]
is_a: UO:0000000 ! unit

[Term]
id: MS:1000808
name: chromatogram attribute
def: "Chromatogram properties that are associated with a value." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000625 ! chromatogram

[Term]
id: MS:1000809
name: chromatogram title
def: "A free-form text title describing a chromatogram." [PSI:MS]
comment: This is the preferred storage place for the spectrum title.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000808 ! chromatogram attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000810
name: ion current chromatogram
def: "Representation of the current of ions versus time." [PSI:MS]
is_a: MS:1000524 ! data file content
is_a: MS:1000626 ! chromatogram type

[Term]
id: MS:1000811
name: electromagnetic radiation chromatogram
def: "Representation of electromagnetic properties versus time." [PSI:MS]
synonym: "EMR radiation chromatogram" EXACT []
is_a: MS:1000524 ! data file content
is_a: MS:1000626 ! chromatogram type

[Term]
id: MS:1000812
name: absorption chromatogram
def: "Representation of light absorbed by the sample versus time." [PSI:MS]
is_a: MS:1000811 ! electromagnetic radiation chromatogram

[Term]
id: MS:1000813
name: emission chromatogram
def: "Representation of light emitted by the sample versus time." [PSI:MS]
is_a: MS:1000811 ! electromagnetic radiation chromatogram

[Term]
id: MS:1000814
name: counts per second
def: "The number of counted events observed per second in one or a group of elements of a detector." [PSI:MS]
is_a: MS:1000043 ! intensity unit

[Term]
id: MS:1000815
name: Bruker BAF format
def: "Bruker BAF raw file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000816
name: Bruker U2 format
def: "Bruker HyStar U2 file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000817
name: HyStar
def: "Bruker software for hyphenated experiments." [PSI:MS]
is_a: MS:1000692 ! Bruker software

[Term]
id: MS:1000818
name: Acquity UPLC PDA
def: "Acquity UPLC Photodiode Array Detector." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model
is_a: MS:1000621 ! photodiode array detector

[Term]
id: MS:1000819
name: Acquity UPLC FLR
def: "Acquity UPLC Fluorescence Detector." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model
is_a: MS:1002308 ! fluorescence detector

[Term]
id: MS:1000820
name: flow rate array
def: "A data array of flow rate measurements." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units UO:0000271 ! microliters per minute

[Term]
id: MS:1000821
name: pressure array
def: "A data array of pressure measurements." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units UO:0000110 ! pascal

[Term]
id: MS:1000822
name: temperature array
def: "A data array of temperature measurements." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units UO:0000012 ! kelvin

[Term]
id: MS:1000823
name: Bruker U2 nativeID format
def: "Native format defined by declaration=xsd:nonNegativeInteger collection=xsd:nonNegativeInteger scan=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000824
name: no nativeID format
def: "No nativeID format indicates that the file tagged with this term does not contain spectra that can have a nativeID format." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000825
name: Bruker FID format
def: "Bruker FID file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000826
name: elution time
def: "The time of elution from all used chromatographic columns (one or more) in the chromatographic separation step, relative to the start of the chromatography." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000827
name: isolation window target m/z
def: "The primary or reference m/z about which the isolation window is defined." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000792 ! isolation window attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000828
name: isolation window lower offset
def: "The extent of the isolation window in m/z below the isolation window target m/z. The lower and upper offsets may be asymmetric about the target m/z." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000792 ! isolation window attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000829
name: isolation window upper offset
def: "The extent of the isolation window in m/z above the isolation window target m/z. The lower and upper offsets may be asymmetric about the target m/z." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000792 ! isolation window attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000831
name: sample preparation
def: "Properties of the preparation steps which took place before the measurement was performed." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000548 ! sample attribute

[Term]
id: MS:1000832
name: MALDI matrix application
def: "Attributes to describe the technique how the sample is prepared with the matrix solution." [PSI:MS]
relationship: part_of MS:1000831 ! sample preparation

[Term]
id: MS:1000833
name: matrix application type
def: "Describes the technique how the matrix is put on the sample target." [PSI:MS]
relationship: part_of MS:1000832 ! MALDI matrix application

[Term]
id: MS:1000834
name: matrix solution
def: "Describes the chemical solution used as matrix." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000832 ! MALDI matrix application
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000835
name: matrix solution concentration
def: "Concentration of the chemical solution used as matrix." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000832 ! MALDI matrix application
relationship: has_units UO:0000175 ! gram per liter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000836
name: dried droplet MALDI matrix preparation
def: "Dried droplet in MALDI matrix preparation." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1000837
name: printed MALDI matrix preparation
def: "Printed MALDI matrix preparation." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1000838
name: sprayed MALDI matrix preparation
def: "Sprayed MALDI matrix preparation." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1000839
name: precoated MALDI sample plate
def: "Precoated MALDI sample plate." [PSI:MS]
is_a: MS:1000833 ! matrix application type
is_a: MS:1001938 ! sample plate type

[Term]
id: MS:1000840
name: laser
def: "Device that emits light (electromagnetic radiation) through a process called stimulated emission. The term is an acronym for Light Amplification by Stimulated Emission of Radiation." [PSI:MS]
relationship: part_of MS:1000482 ! source attribute

[Term]
id: MS:1000841
name: laser attribute
def: "Laser properties that are associated with a value." [PSI:MS]
relationship: part_of MS:1000840 ! laser

[Term]
id: MS:1000842
name: laser type
def: "Type of laser used for desorption purpose." [PSI:MS]
relationship: part_of MS:1000840 ! laser

[Term]
id: MS:1000843
name: wavelength
def: "OBSOLETE The distance between two peaks of the emitted laser beam." [PSI:MS]
comment: This term was made obsolete because it was redundant with the Pato Ontology term wavelength (UO:0001242).
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000018 ! nanometer
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000844
name: focus diameter x
def: "Describes the diameter of the laser beam in x direction." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000017 ! micrometer
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000845
name: focus diameter y
def: "Describes the diameter of the laser beam in y direction." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000017 ! micrometer
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000846
name: pulse energy
def: "Describes output energy of the laser system. May be attenuated by filters or other means." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000112 ! joule
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000847
name: pulse duration
def: "Describes how long the laser beam was emitted from the laser device." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000150 ! nanosecond
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000848
name: attenuation
def: "Describes the reduction of the intensity of the laser beam energy." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000187 ! percent
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000849
name: impact angle
def: "Describes the angle between the laser beam and the sample target." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000841 ! laser attribute
relationship: has_units UO:0000185 ! degree
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000850
name: gas laser
def: "Laser which is powered by a gaseous medium." [PSI:MS]
is_a: MS:1000842 ! laser type

[Term]
id: MS:1000851
name: solid-state laser
def: "Solid state laser materials are commonly made by doping a crystalline solid host with ions that provide the required energy states." [PSI:MS]
is_a: MS:1000842 ! laser type

[Term]
id: MS:1000852
name: dye-laser
def: "Dye lasers use an organic dye as the gain medium." [PSI:MS]
is_a: MS:1000842 ! laser type

[Term]
id: MS:1000853
name: free electron laser
def: "Free electron laser uses a relativistic electron beam as the lasing medium which move freely through a magnetic structure, hence the term." [PSI:MS]
is_a: MS:1000842 ! laser type

[Term]
id: MS:1000854
name: LTQ XL
def: "Thermo Scientific LTQ XL MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000855
name: LTQ Velos
def: "Thermo Scientific LTQ Velos MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000856
name: LTQ Velos ETD
def: "Thermo Scientific LTQ Velos MS with ETD." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1000857
name: run attribute
def: "Properties of the described run." [PSI:MS]
is_a: MS:1000547 ! object attribute

[Term]
id: MS:1000858
name: fraction identifier
def: "Identier string that describes the sample fraction. This identifier should contain the fraction number(s) or similar information." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000857 ! run attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000859
name: molecule
def: "Group of two or more atoms held together by chemical bonds." [https://en.wikipedia.org/wiki/Molecule]
is_a: MS:1000881 ! molecular entity

[Term]
id: MS:1000860
name: peptide
def: "A molecule of low molecular weight that is composed of two or more amino acid residues." [PSI:MS]
is_a: MS:1000859 ! molecule

[Term]
id: MS:1000861
name: molecular entity property
def: "A physical characteristic of a molecular entity." [PSI:MS]
relationship: part_of MS:1000881 ! molecular entity

[Term]
id: MS:1000862
name: isoelectric point
def: "The pH of a solution at which a charged molecule does not migrate in an electric field." [PSI:MS]
synonym: "pI" EXACT []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000861 ! molecular entity property
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000863
name: predicted isoelectric point
def: "The pH of a solution at which a charged molecule would not migrate in an electric field, as predicted by a software algorithm." [PSI:MS]
synonym: "predicted pI" EXACT []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000862 ! isoelectric point
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000864
name: chemical formula
def: "A combination of symbols used to express the chemical composition of a molecule." [EDAM:0846]
is_a: MS:1003033 ! molecular entity attribute

[Term]
id: MS:1000865
name: empirical formula
def: "A chemical formula which expresses the proportions of the elements present in a substance." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000864 ! chemical formula
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000866
name: molecular formula
def: "A chemical compound formula expressing the number of atoms of each element present in a compound, without indicating how they are linked." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000864 ! chemical formula
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000867
name: structural formula
def: "A chemical formula showing the number of atoms of each element in a molecule, their spatial arrangement, and their linkage to each other." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000864 ! chemical formula
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000868
name: SMILES formula
def: "The simplified molecular input line entry specification or SMILES is a specification for unambiguously describing the structure of a chemical compound using a short ASCII string." [EDAM:2301]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000864 ! chemical formula
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000869
name: collision gas pressure
def: "The gas pressure of the collision gas used for collisional excitation." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_units UO:0000110 ! pascal
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000870
name: 4000 QTRAP
def: "OBSOLETE SCIEX or Applied Biosystems|MDS SCIEX QTRAP 4000." [PSI:MS]
comment: This term was obsoleted because was redundant to MS:1000139.
is_a: MS:1000121 ! SCIEX instrument model
is_obsolete: true

[Term]
id: MS:1000871
name: SRM software
def: "Software used to predict, select, or optimize transitions or analyze the results of selected reaction monitoring runs." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000872
name: MaRiMba
def: "Software used to predict transitions for selected reaction monitoring experiments based on observed spectrum libraries developed and distributed by the Institute for Systems Biology." [http://tools.proteomecenter.org/wiki/index.php?title=Software:TPP-MaRiMba]
is_a: MS:1000871 ! SRM software

[Term]
id: MS:1000873
name: peptide attribute calculation software
def: "Software used to predict or calculate numerical attributes of peptides." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1000874
name: SSRCalc
def: "Sequence Specific Retention Calculator estimates the retention time of peptides based on their sequence." [http://hs2.proteome.ca/SSRCalc/SSRCalc.html]
is_a: MS:1000873 ! peptide attribute calculation software

[Term]
id: MS:1000875
name: declustering potential
def: "Potential difference between the orifice and the skimmer in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000876
name: cone voltage
def: "Potential difference between the sampling cone/orifice in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000877
name: tube lens voltage
def: "Potential difference setting of the tube lens in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000878
name: external reference identifier
def: "An identifier/accession number to an external reference database." [PSI:MS]
is_a: MS:1002840 ! external reference data

[Term]
id: MS:1000879
name: PubMed identifier
def: "A unique identifier for a publication in the PubMed database (MIR:00000015)." [PSI:MS]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1000880
name: interchannel delay
def: "The duration of intervals between scanning, during which the instrument configuration is switched." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000881
name: molecular entity
def: "Constitutionally or isotopically distinct atom, molecule, ion, ion pair, radical, radical ion, complex, conformer, etc., identifiable as a separately distinguishable entity." [https://en.wikipedia.org/wiki/Molecular_entity]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1000882
name: protein
def: "A compound composed of one or more chains of amino acids in a specific order determined by the base sequence of nucleotides in the DNA of a gene." [PSI:MS]
is_a: MS:1000859 ! molecule

[Term]
id: MS:1000883
name: protein short name
def: "A short name or symbol of a protein (e.g., HSF 1 or HSF1_HUMAN)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000884 ! protein attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000884
name: protein attribute
def: "An nonphysical characterstic attributed to a specific protein." [PSI:MS]
relationship: part_of MS:1000882 ! protein
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1000885
name: protein accession
def: "Identifier for a specific protein in a database." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000884 ! protein attribute
is_a: MS:1003046 ! peptide-to-protein mapping attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000886
name: protein name
def: "A long name describing the function of the protein." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000884 ! protein attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000887
name: peptide attribute
def: "Nonphysical characteristic attributed to a peptide." [PSI:MS]
relationship: part_of MS:1000860 ! peptide

[Term]
id: MS:1000888
name: stripped peptide sequence
def: "Sequence of letter symbols denoting the order of amino acids that compose the peptide, with any amino acid mass modifications that might be present having been stripped away." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003050 ! peptidoform attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000889
name: peptidoform sequence
def: "Sequence of letter symbols denoting the order of amino acid residues that compose the peptidoform including the encoding of any residue modifications that are present." [PSI:MS]
comment: Make it more general as there are actually many other ways to display a modified peptide sequence.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003050 ! peptidoform attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000890
name: peptidoform labeling state
def: "A state description of how a peptide might be isotopically or isobarically labelled." [PSI:MS]
is_a: MS:1003050 ! peptidoform attribute

[Term]
id: MS:1000891
name: heavy labeled peptidoform
def: "A peptide that has been created or labelled with some heavier-than-usual isotopes." [PSI:MS]
is_a: MS:1000890 ! peptidoform labeling state

[Term]
id: MS:1000892
name: unlabeled peptidoform
def: "A peptide that has not been labelled with heavier-than-usual isotopes. This is often referred to as \"light\" to distinguish from \"heavy\"." [PSI:MS]
synonym: "light labeled peptide" EXACT []
is_a: MS:1000890 ! peptidoform labeling state

[Term]
id: MS:1000893
name: peptidoform group label
def: "An arbitrary string label used to mark a set of peptides that belong together in a set, whereby the members are differentiated by different isotopic labels. For example, the heavy and light forms of the same peptide will both be assigned the same peptide group label." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003050 ! peptidoform attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000894
name: retention time
def: "A time interval from the start of chromatography when an analyte exits a chromatographic column." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1003050 ! peptidoform attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000895
name: local retention time
def: "A time interval from the start of chromatography when an analyte exits an unspecified local chromatographic column and instrumental setup." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000894 ! retention time
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000896
name: normalized retention time
def: "A time interval from the start of chromatography when an analyte exits a standardized reference chromatographic column and instrumental setup." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000894 ! retention time
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000897
name: predicted retention time
def: "A time interval from the start of chromatography when an analyte exits a chromatographic column as predicted by a referenced software application." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000894 ! retention time
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000898
name: standard
def: "Something, such as a practice or a product, that is widely recognized or employed, especially because of its excellence." [PSI:MS]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1000899
name: de facto standard
def: "A practice or product that has become a standard not because it has been approved by a standards organization but because it is widely used and recognized by the industry as being standard." [PSI:MS]
is_a: MS:1000898 ! standard

[Term]
id: MS:1000900
name: minimum information standard
def: "A specification of a minimum amount of information needed to reproduce or fully interpret a scientific result." [PSI:MS]
is_a: MS:1000898 ! standard

[Term]
id: MS:1000901
name: retention time normalization standard
def: "A standard providing the retention times at which a set of reference compounds exit the reference chromatographic column." [PSI:MS]
is_a: MS:1000898 ! standard

[Term]
id: MS:1000902
name: H-PINS retention time normalization standard
def: "The de facto standard providing the retention times at which a set of halogenated reference peptides exit the reference chromatographic column." [DOI:10.1074/mcp.M800569-MCP200, PMID:19411281]
is_a: MS:1000901 ! retention time normalization standard

[Term]
id: MS:1000903
name: product ion series ordinal
def: "The ordinal of the fragment within a specified ion series. (e.g. 8 for a y8 ion)." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001221 ! product ion attribute
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1000904
name: product ion m/z delta
def: "The difference in m/z of the predicted m/z based on the assigned product ion minus the actual observed peak m/z." [PSI:PI]
is_a: MS:1001221 ! product ion attribute
relationship: has_units MS:1000040 ! m/z

[Term]
id: MS:1000905
name: percent of base peak times 100
def: "The magnitude of a peak expressed in terms of the percentage of the magnitude of the base peak intensity multiplied by 100. The base peak is therefore 10000. This unit is common in normalized spectrum libraries." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000043 ! intensity unit
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000906
name: peak intensity rank
def: "Ordinal specifying the rank in intensity of a peak in a spectrum. Base peak is 1. The next most intense peak is 2, etc." [PSI:MS]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
relationship: part_of MS:1000231 ! peak
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1000907
name: peak targeting suitability rank
def: "Ordinal specifying the rank of a peak in a spectrum in terms of suitability for targeting. The most suitable peak is 1. The next most suitability peak is 2, etc. Suitability is algorithm and context dependant." [PSI:MS]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
relationship: part_of MS:1000231 ! peak
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1000908
name: transition
def: "A set of two m/z values corresponding to the precursor m/z and a fragment m/z that in combination can be used to identify or quantify a specific ion, although not necessarily uniquely." [PSI:MS]
synonym: "reaction" EXACT []
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000909
name: transition validation method
def: "The strategy used to validate that a transition is effective." [PSI:MS]
relationship: part_of MS:1000908 ! transition

[Term]
id: MS:1000910
name: transition optimized on specified instrument
def: "The transition has been optimized by direct injection of the peptide into an instrument specified in a separate term, and the optimum voltages and fragmentation energies have been determined." [PSI:MS]
is_a: MS:1000909 ! transition validation method

[Term]
id: MS:1000911
name: transition validated with an MS/MS spectrum on specified instrument
def: "The transition has been validated by obtaining an MS2 spectrum and demonstrating that the peak is detectable on the instrument specified with a separate term." [PSI:MS]
is_a: MS:1000909 ! transition validation method

[Term]
id: MS:1000912
name: transition purported from an MS/MS spectrum on a different, specified instrument
def: "The transition has been purported by obtaining an MS2 spectrum and demonstrating that the peak is detectable on the instrument specified with a separate term. However, the detecting instrument is of a different type (e.g. ion trap) than the instrument that the transition will eventually be used on (e.g. triple quad)." [PSI:MS]
is_a: MS:1000909 ! transition validation method

[Term]
id: MS:1000913
name: transition predicted by informatic analysis
def: "The transition has been predicted by informatics software without any direct spectral evidence." [PSI:MS]
is_a: MS:1000909 ! transition validation method

[Term]
id: MS:1000914
name: tab delimited text format
def: "A file format that has two or more columns of tabular data where each column is separated by a TAB character." [PSI:MS]
is_a: MS:1001459 ! file format
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1000915
name: retention time window attribute
def: "An attribute of a window in time about which a peptide might elute from the column." [PSI:MS]
relationship: part_of MS:1000894 ! retention time

[Term]
id: MS:1000916
name: retention time window lower offset
def: "The extent of the retention time window in time units below the target retention time. The lower and upper offsets may be asymmetric about the target time." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000915 ! retention time window attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000917
name: retention time window upper offset
def: "The extent of the retention time window in time units above the target retention time. The lower and upper offsets may be asymmetric about the target time." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000915 ! retention time window attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000918
name: target list
def: "A list of peptides or compounds and their expected m/z coordinates that can be used to cause a mass spectrometry to obtain spectra of those molecules specifically." [PSI:MS]
relationship: part_of MS:1001458 ! spectrum generation information

[Term]
id: MS:1000919
name: target inclusion exclusion priority
def: "A priority setting specifying whether included or excluded targets have priority over the other." [PSI:MS]
relationship: part_of MS:1000918 ! target list

[Term]
id: MS:1000920
name: includes supersede excludes
def: "A priority setting specifying that included targets have priority over the excluded targets if there is a conflict." [PSI:MS]
is_a: MS:1000919 ! target inclusion exclusion priority

[Term]
id: MS:1000921
name: excludes supersede includes
def: "A priority setting specifying that excluded targets have priority over the included targets if there is a conflict." [PSI:MS]
is_a: MS:1000919 ! target inclusion exclusion priority

[Term]
id: MS:1000922
name: Skyline
def: "Software used to predict, select, and optimize transitions as well as analyze the results of selected reaction monitoring runs developed and distributed by the MacCoss lab at the University of Washington." [https://brendanx-uw1.gs.washington.edu/labkey/wiki/home/software/Skyline/page.view?name=default]
is_a: MS:1000871 ! SRM software
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1000923
name: TIQAM
def: "Software used to predict, select, and optimize transitions for selected reaction monitoring experiments developed and distributed by the Institute for Systems Biology." [http://tools.proteomecenter.org/TIQAM/TIQAM.html]
is_a: MS:1000871 ! SRM software

[Term]
id: MS:1000924
name: MaRiMba
def: "OBSOLETE Software used to predict transitions for selected reaction monitoring experiments based on observed spectrum libraries developed and distributed by the Institute for Systems Biology." [http://tools.proteomecenter.org/wiki/index.php?title=Software:TPP-MaRiMba]
comment: This term was made obsolete because it was redundant with an existing term (MS:1000872).
is_obsolete: true
replaced_by: MS:1000872

[Term]
id: MS:1000925
name: ATAQS
def: "Software suite used to predict, select, and optimize transitions as well as analyze the results of selected reaction monitoring runs developed and distributed by the Institute for Systems Biology." [PSI:MS]
is_a: MS:1000871 ! SRM software

[Term]
id: MS:1000926
name: product interpretation rank
def: "The integer rank given an interpretation of an observed product ion. For example, if y8 is selected as the most likely interpretation of a peak, then it is assigned a rank of 1." [PSI:MS]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001221 ! product ion attribute
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1000927
name: ion injection time
def: "The length of time spent filling an ion trapping device." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units UO:0000028 ! millisecond
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1000928
name: calibration spectrum
def: "A spectrum derived from a special calibration source, rather than from the primary injected sample. A calibration spectrum is typically derived from a substance that can be used to correct systematic shift in m/z for spectra of the primary inject sample." [PSI:MS]
is_a: MS:1000559 ! spectrum type

[Term]
id: MS:1000929
name: Shimadzu Biotech nativeID format
def: "Native format defined by source=xsd:string start=xsd:nonNegativeInteger end=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1000930
name: Shimadzu Biotech database entity
def: "Shimadzu Biotech format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1000931
name: QTRAP 5500
def: "Applied Biosystems|MDS SCIEX QTRAP 5500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000932
name: TripleTOF 5600
def: "SCIEX TripleTOF 5600, a quadrupole - quadrupole - time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1000933
name: protein modifications
def: "Encoding of modifications of the protein sequence from the specified accession, written in PEFF notation." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000884 ! protein attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1000934
name: gene name
def: "Name of the gene from which the protein is translated." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000884 ! protein attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001000
name: spectrum interpretation
def: "Collection of terms from the PSI Proteome Informatics standards describing the interpretation of spectra." [PSI:PI]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1001005
name: SEQUEST:CleavesAt
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001006
name: SEQUEST:ViewCV
def: "SEQUEST View Input Parameters." [PSI:PI]
is_a: MS:1002096 ! SEQUEST input parameter

[Term]
id: MS:1001007
name: SEQUEST:OutputLines
def: "Number of peptide results to show." [PSI:MS]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001009
name: SEQUEST:DescriptionLines
def: "Number of full protein descriptions to show for top N peptides." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001010
name: de novo search
def: "A de novo sequencing search (without database)." [PSI:PI]
is_a: MS:1001080 ! search type

[Term]
id: MS:1001011
name: search database details
def: "Details about the database searched." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001012
name: database source
def: "The organisation, project or laboratory from where the database is obtained (UniProt, NCBI, EBI, other)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001013
name: database name
def: "The name of the search database (nr, SwissProt or est_human)." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001014
name: database local file path
def: "OBSOLETE: Use attribute in mzIdentML instead. Local file path of the search database from the search engine's point of view." [PSI:PI]
is_a: MS:1001011 ! search database details
is_obsolete: true

[Term]
id: MS:1001015
name: database original uri
def: "URI, from where the search database was originally downloaded." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1001016
name: database version
def: "Version of the search database. In mzIdentML use the attribute instead." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001017
name: database release date
def: "OBSOLETE: Use attribute in mzIdentML instead. Release date of the search database." [PSI:PI]
is_a: MS:1001011 ! search database details
is_obsolete: true

[Term]
id: MS:1001018
name: database type
def: "Database containing amino acid or nucleic acid sequences." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001019
name: database filtering
def: "Was there filtering used on the database." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001020
name: DB filter taxonomy
def: "A taxonomy filter was to the database search." [PSI:PI]
is_a: MS:1001511 ! Sequence database filter types

[Term]
id: MS:1001021
name: DB filter on accession numbers
def: "Filtering applied specifically by accession number pattern." [PSI:PI]
is_a: MS:1001511 ! Sequence database filter types

[Term]
id: MS:1001022
name: DB MW filter
def: "Filtering applied specifically by protein molecular weight, specified as either a range or above/below a threshold value." [PSI:PI]
is_a: MS:1001511 ! Sequence database filter types

[Term]
id: MS:1001023
name: DB PI filter
def: "Filtering applied specifically by predicted protein isoelectric focussing point (pI), specified as either a range or above/below a threshold value." [PSI:PI]
is_a: MS:1001511 ! Sequence database filter types

[Term]
id: MS:1001024
name: translation frame
def: "The translated open reading frames from a nucleotide database considered in the search (range: 1-6)." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001025
name: translation table
def: "The translation table used to translate the nucleotides to amino acids." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001026
name: SEQUEST:NormalizeXCorrValues
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001027
name: DB filter on sequence pattern
def: "Filtering applied specifically by amino acid sequence pattern." [PSI:PI]
is_a: MS:1001511 ! Sequence database filter types

[Term]
id: MS:1001028
name: SEQUEST:SequenceHeaderFilter
def: "String in the header of a sequence entry for that entry to be searched." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001029
name: number of sequences searched
def: "The number of sequences (proteins / nucleotides) from the database search after filtering." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001030
name: number of peptide seqs compared to each spectrum
def: "Number of peptide seqs compared to each spectrum." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
is_a: MS:1001405 ! spectrum identification result details
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001031
name: spectral library search
def: "A search using a library of spectra." [PSI:PI]
is_a: MS:1001080 ! search type

[Term]
id: MS:1001032
name: SEQUEST:SequencePartialFilter
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001035
name: date / time search performed
def: "OBSOLETE: use attribute in mzIdentML instead. Date and time of the actual search run." [PSI:PI]
is_a: MS:1001184 ! search statistics
is_obsolete: true

[Term]
id: MS:1001036
name: search time taken
def: "The time taken to complete the search in seconds." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001184 ! search statistics
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001037
name: SEQUEST:ShowFragmentIons
def: "Flag indicating that fragment ions should be shown." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001038
name: SEQUEST:Consensus
def: "Specify depth as value of the CVParam." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001006 ! SEQUEST:ViewCV
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001040
name: intermediate analysis format
def: "Type of the source file, the mzIdentML was created from." [PSI:PI]
is_a: MS:1001459 ! file format

[Term]
id: MS:1001041
name: SEQUEST:sortCV
def: "SEQUEST View / Sort Input Parameters." [PSI:PI]
is_a: MS:1001006 ! SEQUEST:ViewCV

[Term]
id: MS:1001042
name: SEQUEST:LimitTo
def: "Specify \"number of dtas shown\" as value of the CVParam." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002096 ! SEQUEST input parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001044
name: cleavage agent details
def: "Details of cleavage agent (enzyme)." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001045
name: cleavage agent name
def: "The name of the cleavage agent." [PSI:PI]
is_a: MS:1001044 ! cleavage agent details

[Term]
id: MS:1001046
name: SEQUEST:sort by dCn
def: "Sort order of SEQUEST search results by the delta of the normalized correlation score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001047
name: SEQUEST:sort by dM
def: "Sort order of SEQUEST search results by the difference between a theoretically calculated and the corresponding experimentally measured molecular mass M." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001048
name: SEQUEST:sort by Ions
def: "Sort order of SEQUEST search results given by the ions." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001049
name: SEQUEST:sort by MH+
def: "Sort order of SEQUEST search results given by the mass of the protonated ion." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001050
name: SEQUEST:sort by P
def: "Sort order of SEQUEST search results given by the probability." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001051
name: multiple enzyme combination rules
def: "OBSOLETE: use attribute independent in mzIdentML instead. Description of multiple enzyme digestion protocol, if any." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001052
name: SEQUEST:sort by PreviousAminoAcid
def: "Sort order of SEQUEST search results given by the previous amino acid." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001053
name: SEQUEST:sort by Ref
def: "Sort order of SEQUEST search results given by the reference." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001055
name: modification parameters
def: "Modification parameters for the search engine run." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001056
name: modification specificity rule
def: "The specificity rules for the modifications applied by the search engine." [PSI:PI]
is_a: MS:1001055 ! modification parameters

[Term]
id: MS:1001057
name: tolerance on types
def: "OBSOLETE: Tolerance on types." [PSI:PI]
is_a: MS:1001055 ! modification parameters
is_obsolete: true

[Term]
id: MS:1001058
name: quality estimation by manual validation
def: "The quality estimation was done manually." [PSI:PI]
is_a: MS:1001060 ! quality estimation method details

[Term]
id: MS:1001059
name: SEQUEST:sort by RSp
def: "Sort order of SEQUEST search results given by the result 'Sp' of 'Rank/Sp' in the out file (peptide)." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001060
name: quality estimation method details
def: "Method for quality estimation (manually or with decoy database)." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001061
name: neutral loss
def: "OBSOLETE: replaced by MS:1000336 (neutral loss): Leave this to PSI-MOD." [PSI:PI]
is_a: MS:1001055 ! modification parameters
is_obsolete: true
replaced_by: MS:1000336

[Term]
id: MS:1001062
name: Mascot MGF format
def: "Mascot MGF file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001065
name: TODOscoring model
def: "OBSOLETE: There is Phenyx:ScoringModel for Phenyx! Scoring model (more detailed granularity). TODO: add some child terms." [PSI:PI]
comment: This term was made obsolete and is replaced by the term (MS:1001961).
is_a: MS:1001249 ! search input details
is_obsolete: true
replaced_by: MS:1001961

[Term]
id: MS:1001066
name: ions series considered in search
def: "The description of the DEPRECATED ion fragment series (including charges and neutral losses) that are considered by the search engine." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001068
name: SEQUEST:sort by Sp
def: "Sort order of SEQUEST search results by the Sp score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001069
name: SEQUEST:sort by TIC
def: "Sort order of SEQUEST search results given by the total ion current." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001070
name: SEQUEST:sort by Scan
def: "Sort order of SEQUEST search results given by the scan number." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001071
name: SEQUEST:sort by Sequence
def: "Sort order of SEQUEST search results given by the sequence." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001072
name: SEQUEST:sort by Sf
def: "Sort order of SEQUEST search results given by the SEQUEST result 'Sf'." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001073
name: database type amino acid
def: "Database contains amino acid sequences." [PSI:PI]
is_a: MS:1001018 ! database type

[Term]
id: MS:1001079
name: database type nucleotide
def: "Database contains nucleic acid sequences." [PSI:PI]
is_a: MS:1001018 ! database type

[Term]
id: MS:1001080
name: search type
def: "Enumeration of type of search value (i.e. from PMF, sequence tag, MS2)." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001081
name: pmf search
def: "A peptide mass fingerprint search." [PSI:PI]
is_a: MS:1001080 ! search type

[Term]
id: MS:1001082
name: tag search
def: "A sequence tag search." [PSI:PI]
is_a: MS:1001080 ! search type

[Term]
id: MS:1001083
name: ms-ms search
def: "An MS2 search (with fragment ions)." [PSI:PI]
is_a: MS:1001080 ! search type

[Term]
id: MS:1001084
name: database nr
def: "Non-redundant GenBank sequence database." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001085
name: protein-level identification attribute
def: "Protein level information." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1001086
name: SEQUEST:sort by XCorr
def: "Sort order of SEQUEST search results by the correlation score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001087
name: SEQUEST:ProcessCV
def: "SEQUEST View / Process Input Parameters." [PSI:PI]
is_a: MS:1002096 ! SEQUEST input parameter

[Term]
id: MS:1001088
name: protein description
def: "The protein description line from the sequence entry in the source database FASTA file." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
is_a: MS:1001342 ! database sequence details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001089
name: molecule taxonomy
def: "The taxonomy of the resultant molecule from the search." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
is_a: MS:1001342 ! database sequence details
is_a: MS:1001512 ! Sequence database filters
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001090
name: taxonomy nomenclature
def: "OBSOLETE: The system used to indicate taxonomy. There should be an enumerated list of options: latin name, NCBI TaxID, common name, Swiss-Prot species ID (ex. RABIT from the full protein ID ALBU_RABIT)." [PSI:PI]
is_a: MS:1001089 ! molecule taxonomy
is_obsolete: true
replaced_by: MS:1001467
replaced_by: MS:1001468
replaced_by: MS:1001469
replaced_by: MS:1001470

[Term]
id: MS:1001091
name: NoEnzyme
is_a: MS:1001045 ! cleavage agent name
comment: This term was made obsolete because it is ambiguous and is replaced by NoCleavage (MS:1001955) and unspecific cleavage (MS:1001956).
is_obsolete: true

[Term]
id: MS:1001092
name: peptide sequence-level identification statistic
def: "Identification confidence metric for a peptide." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1001093
name: sequence coverage
def: "The percent coverage for the protein based upon the matched peptide sequences (can be calculated)." [PSI:PI]
xref: value-type:xsd\:decimal "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
relationship: has_value_type xsd\:decimal ! The allowed value-type for this CV term

[Term]
id: MS:1001094
name: SEQUEST:sort by z
def: "Sort order of SEQUEST search results given by the charge." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001041 ! SEQUEST:sortCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001095
name: SEQUEST:ProcessAll
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001087 ! SEQUEST:ProcessCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001096
name: SEQUEST:TopPercentMostIntense
def: "Specify \"percentage\" as value of the CVParam." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001087 ! SEQUEST:ProcessCV
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001097
name: distinct peptide sequences
def: "This counts distinct sequences hitting the protein without regard to a minimal confidence threshold." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001098
name: confident distinct peptide sequences
def: "This counts the number of distinct peptide sequences. Multiple charge states and multiple modification states do NOT count as multiple sequences. The definition of 'confident' must be qualified elsewhere." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001099
name: confident peptide qualification
def: "The point of this entry is to define what is meant by confident for the term Confident distinct peptide sequence and/or Confident peptides. Example 1 - metric=Paragon:Confidence value=95 sense=greater than Example 2 - metric=Mascot:Eval value=0.05 sense=less than." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001100
name: confident peptide sequence number
def: "This counts the number of peptide sequences without regard to whether they are distinct. Multiple charges states and multiple modification states DO count as multiple peptides. The definition of 'confident' must be qualified elsewhere." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001101
name: protein group or subset relationship
def: "Protein group or subset relationships." [PSI:PI]
is_a: MS:1001085 ! protein-level identification attribute

[Term]
id: MS:1001102
name: SEQUEST:Chromatogram
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001006 ! SEQUEST:ViewCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001103
name: SEQUEST:InfoAndLog
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001006 ! SEQUEST:ViewCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001104
name: database UniProtKB/Swiss-Prot
def: "The name of the UniProtKB/Swiss-Prot knowledgebase." [PSI:PI]
is_a: MS:1002126 ! database UniProtKB

[Term]
id: MS:1001105
name: peptide sequence-level identification attribute
def: "Peptide level information." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1001106
name: SEQUEST:TopNumber
def: "Specify \"number\" as value of the CVParam." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001087 ! SEQUEST:ProcessCV
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001107
name: data stored in database
def: "Source file for this mzIdentML was a data set in a database." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001108
name: param: a ion
def: "Parameter information, type of product: a ion with charge on the N-terminal side." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001109
name: SEQUEST:CullTo
def: "Specify cull string as value of the CVParam." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001087 ! SEQUEST:ProcessCV
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001110
name: SEQUEST:modeCV
def: "SEQUEST Mode Input Parameters." [PSI:PI]
is_a: MS:1002096 ! SEQUEST input parameter

[Term]
id: MS:1001111
name: SEQUEST:Full
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001110 ! SEQUEST:modeCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001112
name: n-terminal flanking residue
def: "Residue preceding the first amino acid in the peptide sequence as it occurs in the protein. Use 'N-term' to denote if the peptide starts at the N terminus of the protein." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003046 ! peptide-to-protein mapping attribute
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001113
name: c-terminal flanking residue
def: "Residue following the last amino acid in the peptide sequence as it occurs in the protein. Use 'C-term' to denote if the peptide ends at the C terminus of the protein." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003046 ! peptide-to-protein mapping attribute
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001114
name: retention time(s)
def: "OBSOLETE Retention time of the spectrum from the source file." [PSI:PI]
comment: This term was made obsolete because scan start time (MS:1000016) should be used instead.
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001115
name: scan number(s)
def: "OBSOLETE: use spectrumID attribute of SpectrumIdentificationResult. Take from mzData." [PSI:PI]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1001116
name: single protein identification statistic
def: "Results specific for one protein as part of a protein ambiguity group (a result not valid for all the other proteins in the protein ambiguity group)." [PSI:PI]
is_a: MS:1001085 ! protein-level identification attribute

[Term]
id: MS:1001117
name: theoretical mass
def: "The theoretical mass of the molecule (e.g. the peptide sequence and its modifications)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001118
name: param: b ion
def: "Parameter information, type of product: b ion with charge on the N-terminal side." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001119
name: param: c ion
def: "Parameter information, type of product: c ion with charge on the N-terminal side." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001120
name: SEQUEST:FormatAndLinks
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001110 ! SEQUEST:modeCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001121
name: number of matched peaks
def: "The number of peaks that were matched as qualified by the ion series considered field. If a peak matches multiple ions then only 1 would be added the count." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001122
name: ions series considered
def: "The ion series that were used during the calculation of the count (e.g. a, b, c, d, v, w, x, y, z, a-H2O, a-NH3, b-H2O, b-NH3, y-H2O, y-NH3, b-H20, b+, z-, z+1, z+2, b-H3PO4, y-H3PO4, immonium, internal ya, internal yb)." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1001123
name: number of peaks used
def: "The number of peaks from the original peak list that are used to calculate the scores for a particular search engine. All ions that have the opportunity to match or be counted even if they don't." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001124
name: number of peaks submitted
def: "The number of peaks from the original peaks listed that were submitted to the search engine." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001125
name: manual validation
def: "Result of quality estimation: decision of a manual validation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
is_a: MS:1001116 ! single protein identification statistic
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001126
name: SEQUEST:Fast
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001110 ! SEQUEST:modeCV
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001127
name: peptide sharing details
def: "Accessions Containing Sequence - Accessions for each protein containing this peptide." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1001128
name: SEQUEST:selectCV
def: "SEQUEST Select Input Parameters." [PSI:PI]
is_a: MS:1002096 ! SEQUEST input parameter

[Term]
id: MS:1001129
name: quantification information
def: "Quantification information." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001130
name: peptide raw area
def: "OBSOLETE Peptide raw area." [PSI:PI]
comment: This term was made obsolete because it is replaced by 'MS1 feature area' (MS:1001844).
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001131
name: error on peptide area
def: "Error on peptide area." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001132
name: peptide ratio
def: "Peptide ratio." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001133
name: error on peptide ratio
def: "Error on peptide ratio." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001134
name: protein ratio
def: "Protein ratio." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001135
name: error on protein ratio
def: "Error on protein ratio." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001136
name: p-value (protein diff from 1 randomly)
def: "OBSOLETE P-value (protein diff from 1 randomly)." [PSI:PI]
comment: This term was made obsolete because it is replaced by 't-test p-value' (MS:1001855).
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001137
name: absolute quantity
def: "Absolute quantity in terms of real concentration or molecule copy number in sample." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001138
name: error on absolute quantity
def: "Error on absolute quantity." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001139
name: quantitation software name
def: "Quantitation software name." [PSI:PI]
is_a: MS:1000531 ! software
is_a: MS:1001129 ! quantification information

[Term]
id: MS:1001140
name: quantitation software version
def: "OBSOLETE Quantitation software version." [PSI:PI]
comment: This term was made obsolete because part of mzQuantML schema.
is_a: MS:1001129 ! quantification information
is_obsolete: true

[Term]
id: MS:1001141
name: intensity of precursor ion
def: "The intensity of the precursor ion." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001142
name: database IPI_human
def: "International Protein Index database for Homo sapiens sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001143
name: PSM-level search engine specific statistic
def: "Search engine specific peptide spectrum match scores." [PSI:PI]
is_a: MS:1002347 ! PSM-level identification statistic

[Term]
id: MS:1001144
name: SEQUEST:SelectDefault
is_a: MS:1001128 ! SEQUEST:selectCV

[Term]
id: MS:1001145
name: SEQUEST:SelectAdvancedCV
def: "SEQUEST Select Advanced Input Parameters." [PSI:PI]
is_a: MS:1001128 ! SEQUEST:selectCV

[Term]
id: MS:1001146
name: param: a ion-NH3 DEPRECATED
def: "Ion a-NH3 parameter information, type of product: a ion with lost ammonia." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1001147
name: protein ambiguity group result details
is_a: MS:1001085 ! protein-level identification attribute
is_a: MS:1001153 ! search engine specific score

[Term]
id: MS:1001148
name: param: a ion-H2O DEPRECATED
def: "Ion a-H2O if a significant and fragment includes STED." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1001149
name: param: b ion-NH3 DEPRECATED
def: "Ion b-NH3 parameter information, type of product: b ion with lost ammonia." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1001150
name: param: b ion-H2O DEPRECATED
def: "Ion b-H2O if b significant and fragment includes STED." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1001151
name: param: y ion-NH3 DEPRECATED
def: "Ion y-NH3 parameter information, type of product: y ion with lost ammonia." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1001152
name: param: y ion-H2O DEPRECATED
comment: This term was made obsolete - use MS:1001262 and MS:1002455 instead.
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1001153
name: search engine specific score
def: "Search engine specific scores." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1001154
name: SEQUEST:probability
def: "The SEQUEST result 'Probability'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001155
name: SEQUEST:xcorr
def: "The SEQUEST result 'XCorr'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001156
name: SEQUEST:deltacn
def: "The SEQUEST result 'DeltaCn'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001157
name: SEQUEST:sp
def: "The SEQUEST result 'Sp' (protein)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001158
name: SEQUEST:Uniq
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001159
name: SEQUEST:expectation value
def: "The SEQUEST result 'Expectation value'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001153 ! search engine specific score
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001160
name: SEQUEST:sf
def: "The SEQUEST result 'Sf'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001161
name: SEQUEST:matched ions
def: "The SEQUEST result 'Matched Ions'." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1001162
name: SEQUEST:total ions
def: "The SEQUEST result 'Total Ions'." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1001163
name: SEQUEST:consensus score
def: "The SEQUEST result 'Consensus Score'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001153 ! search engine specific score
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001164
name: Paragon:unused protscore
def: "The Paragon result 'Unused ProtScore'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001165
name: Paragon:total protscore
def: "The Paragon result 'Total ProtScore'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001166
name: Paragon:score
def: "The Paragon result 'Score'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001167
name: Paragon:confidence
def: "The Paragon result 'Confidence'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001168
name: Paragon:expression error factor
def: "The Paragon result 'Expression Error Factor'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001169
name: Paragon:expression change p-value
def: "The Paragon result 'Expression change P-value'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001170
name: Paragon:contrib
def: "The Paragon result 'Contrib'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001171
name: Mascot:score
def: "The Mascot result 'Score'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001172
name: Mascot:expectation value
def: "The Mascot result 'expectation value'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001173
name: Mascot:matched ions
def: "The Mascot result 'Matched ions'." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001174
name: Mascot:total ions
def: "The Mascot result 'Total ions'." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001175
name: peptide shared in multiple proteins
def: "A peptide matching multiple proteins." [PSI:PI]
is_a: MS:1001127 ! peptide sharing details

[Term]
id: MS:1001176
name: (?<=[KR])(?\!P)
def: "Regular expression for Trypsin." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001177
name: number of molecular hypothesis considered
def: "Number of Molecular Hypothesis Considered - This is the number of molecules (e.g. peptides for proteomics) considered for a particular search." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001184 ! search statistics
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001178
name: database EST
def: "Expressed sequence tag nucleotide sequence database." [PSI:PI]
is_a: MS:1001079 ! database type nucleotide

[Term]
id: MS:1001180
name: Cleavage agent regular expression
def: "Regular expressions for cleavage enzymes." [PSI:PI]
relationship: part_of MS:1001044 ! cleavage agent details
is_a: MS:1002479 ! regular expression

[Term]
id: MS:1001184
name: search statistics
def: "The details of the actual run of the search." [PSI:PI]
is_a: MS:1001405 ! spectrum identification result details

[Term]
id: MS:1001189
name: modification specificity peptide N-term
def: "As parameter for search engine: apply the modification only at the N-terminus of a peptide." [PSI:PI]
is_a: MS:1001056 ! modification specificity rule

[Term]
id: MS:1001190
name: modification specificity peptide C-term
def: "As parameter for search engine: apply the modification only at the C-terminus of a peptide." [PSI:PI]
is_a: MS:1001056 ! modification specificity rule

[Term]
id: MS:1001191
name: p-value
def: "OBSOLETE Quality estimation by p-value." [PSI:PI]
comment: This term was made obsolete because now is split into peptide and protein terms.
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
is_a: MS:1001198 ! protein identification confidence metric
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001192
name: Expect value
def: "Result of quality estimation: Expect value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
is_a: MS:1001116 ! single protein identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001193
name: confidence score
def: "Result of quality estimation: confidence score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
is_a: MS:1001116 ! single protein identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001194
name: quality estimation with decoy database
def: "Quality estimation by decoy database." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001060 ! quality estimation method details
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001195
name: decoy DB type reverse
def: "Decoy type: Amino acids of protein sequences are used in reverse order." [PSI:PI]
is_a: MS:1001450 ! decoy DB details

[Term]
id: MS:1001196
name: decoy DB type randomized
def: "Decoy type: Amino acids of protein sequences are randomized (keeping the original protein mass)." [PSI:PI]
is_a: MS:1001450 ! decoy DB details

[Term]
id: MS:1001197
name: DB composition target+decoy
def: "Decoy database composition: database contains original (target) and decoy entries." [PSI:PI]
is_a: MS:1001450 ! decoy DB details

[Term]
id: MS:1001198
name: protein identification confidence metric
def: "Identification confidence metric for a protein." [PSI:PI]
is_a: MS:1001116 ! single protein identification statistic

[Term]
id: MS:1001199
name: Mascot DAT format
def: "Source file for this mzIdentML was in Mascot DAT file format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001200
name: SEQUEST out file format
def: "Source file for this mzIdentML was in SEQUEST out file format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001201
name: DB MW filter maximum
def: "Maximum value of molecular weight filter." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001512 ! Sequence database filters
relationship: has_units UO:0000221 ! dalton
relationship: has_units UO:0000222 ! kilodalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001202
name: DB MW filter minimum
def: "Minimum value of molecular weight filter." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001512 ! Sequence database filters
relationship: has_units UO:0000221 ! dalton
relationship: has_units UO:0000222 ! kilodalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001203
name: DB PI filter maximum
def: "Maximum value of isoelectric point filter." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001512 ! Sequence database filters
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001204
name: DB PI filter minimum
def: "Minimum value of isoelectric point filter." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001512 ! Sequence database filters
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001207
name: Mascot
def: "The name of the Mascot search engine." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001208
name: SEQUEST
def: "The name of the SEQUEST search engine." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001209
name: Phenyx
def: "The name of the Phenyx search engine." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001210
name: mass type settings
def: "The type of mass difference value to be considered by the search engine (monoisotopic or average)." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001211
name: parent mass type mono
def: "Mass type setting for parent mass was monoisotopic." [PSI:PI]
is_a: MS:1001210 ! mass type settings

[Term]
id: MS:1001212
name: parent mass type average
def: "Mass type setting for parent mass was average isotopic." [PSI:PI]
is_a: MS:1001210 ! mass type settings

[Term]
id: MS:1001213
name: search result details
def: "OBSOLETE: Scores and global result characteristics." [PSI:PI]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1001214
name: protein-level global FDR
def: "Estimation of the global false discovery rate of proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002705 ! protein-level result list statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001215
name: SEQUEST:PeptideSp
def: "The SEQUEST result 'Sp' in out file (peptide)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001217
name: SEQUEST:PeptideRankSp
def: "The SEQUEST result 'Sp' of 'Rank/Sp' in out file (peptide). Also called 'rsp'." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1001218
name: SEQUEST:PeptideNumber
def: "The SEQUEST result '#' in out file (peptide)." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1001219
name: SEQUEST:PeptideIdnumber
def: "The SEQUEST result 'Id#' in out file (peptide)." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1001220
name: frag: y ion
def: "Fragmentation information, type of product: y ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001221
name: product ion attribute
def: "Fragmentation information like ion types." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1001222
name: frag: b ion - H2O
def: "Fragmentation information, type of product: b ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001223
name: frag: y ion - H2O
def: "Fragmentation information, type of product: y ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001224
name: frag: b ion
def: "Fragmentation information, type of product: b ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001225
name: product ion m/z
def: "The m/z of the product ion." [PSI:PI]
synonym: "fragment ion m/z" EXACT []
is_a: MS:1001221 ! product ion attribute
relationship: has_units MS:1000040 ! m/z

[Term]
id: MS:1001226
name: product ion intensity
def: "The intensity of a single product ion." [PSI:PI]
synonym: "fragment ion intensity" EXACT []
is_a: MS:1001221 ! product ion attribute
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100

[Term]
id: MS:1001227
name: product ion m/z error
def: "The product ion m/z error." [PSI:PI]
is_a: MS:1001221 ! product ion attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_units UO:0000166 ! parts per notation unit

[Term]
id: MS:1001228
name: frag: x ion
def: "Fragmentation information, type of product: x ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001229
name: frag: a ion
def: "Fragmentation information, type of product: a ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001230
name: frag: z ion
def: "Fragmentation information, type of product: z ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001231
name: frag: c ion
def: "Fragmentation information, type of product: c ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001232
name: frag: b ion - NH3
def: "Ion b-NH3 fragmentation information, type of product: b ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001233
name: frag: y ion - NH3
def: "Ion y-NH3 fragmentation information, type of product: y ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001234
name: frag: a ion - H2O
def: "Fragmentation information, type of product: a ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001235
name: frag: a ion - NH3
def: "Ion a-NH3 fragmentation information, type of product: a ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001236
name: frag: d ion
def: "Fragmentation information, type of product: d ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001237
name: frag: v ion
def: "Fragmentation information, type of product: v ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001238
name: frag: w ion
def: "Fragmentation information, type of product: w ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001239
name: frag: immonium ion
def: "Fragmentation information, type of product: immonium ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001240
name: non-identified ion
def: "Non-identified ion." [PSI:PI]
is_a: MS:1001221 ! product ion attribute

[Term]
id: MS:1001241
name: co-eluting ion
def: "Co-eluting ion." [PSI:PI]
is_a: MS:1001221 ! product ion attribute

[Term]
id: MS:1001242
name: SEQUEST out folder
def: "Source file for this mzIdentML was a SEQUEST folder with its out files." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001243
name: SEQUEST summary
def: "Source file for this mzIdentML was a SEQUEST summary page (proteins)." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001245
name: PerSeptive PKS format
def: "PerSeptive peak list file format." [http://www.matrixscience.com/help/data_file_help.html#PKS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001246
name: SCIEX API III format
def: "PE SCIEX peak list file format." [http://www.matrixscience.com/help/data_file_help.html#API]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001247
name: Bruker XML format
def: "Bruker data exchange XML format." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001249
name: search input details
def: "Details describing the search input." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001250
name: local FDR
def: "Result of quality estimation: the local FDR at the current position of a sorted list." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
is_a: MS:1001116 ! single protein identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001251
name: Trypsin
def: "Enzyme trypsin." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001176 ! (?<=[KR])(?!P)

[Term]
id: MS:1001252
name: DB source EBI
def: "Database source EBI." [PSI:PI]
is_a: MS:1001012 ! database source

[Term]
id: MS:1001253
name: DB source NCBI
def: "Database source NCBI." [PSI:PI]
is_a: MS:1001012 ! database source

[Term]
id: MS:1001254
name: DB source UniProt
def: "Database source UniProt." [PSI:PI]
is_a: MS:1001012 ! database source

[Term]
id: MS:1001255
name: fragment mass type average
def: "Mass type setting for fragment mass was average isotopic." [PSI:PI]
is_a: MS:1001210 ! mass type settings

[Term]
id: MS:1001256
name: fragment mass type mono
def: "Mass type setting for fragment mass was monoisotopic." [PSI:PI]
is_a: MS:1001210 ! mass type settings

[Term]
id: MS:1001257
name: param: v ion
def: "Parameter information, type of product: side chain loss v ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001258
name: param: d ion
def: "Parameter information, type of product: side chain loss d ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001259
name: param: immonium ion
def: "Parameter information, type of product: immonium ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001260
name: param: w ion
def: "Parameter information, type of product: side chain loss w ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001261
name: param: x ion
def: "Parameter information, type of product: x ion with charge on the C-terminal side." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001262
name: param: y ion
def: "Parameter information, type of product: y ion with charge on the C-terminal side." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001263
name: param: z ion
def: "Parameter information, type of product: z ion with charge on the C-terminal side." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001266
name: role type
def: "Role of a Person or Organization." [PSI:PI]
is_a: MS:1000585 ! contact attribute

[Term]
id: MS:1001267
name: software vendor
def: "Software vendor role." [PSI:PI]
is_a: MS:1001266 ! role type

[Term]
id: MS:1001268
name: programmer
def: "Programmer role." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001266 ! role type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001269
name: instrument vendor
def: "Instrument vendor role." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001266 ! role type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001270
name: lab personnel
def: "Lab personnel role." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001266 ! role type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001271
name: researcher
def: "Researcher role." [PSI:PI]
is_a: MS:1001266 ! role type

[Term]
id: MS:1001272
name: (?<=R)(?\!P)
def: "Regular expression for Arg-C." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001273
name: (?=[BD])
def: "Regular expression for Asp-N." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001274
name: (?=[DE])
def: "Regular expression for Asp-N-ambic." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001275
name: ProteinScape SearchEvent
def: "Source data for this mzIdentML was a ProteinScape SearchEvent." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001276
name: ProteinScape Gel
def: "Source data for this mzIdentML was a ProteinScape Gel." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001283
name: decoy DB accession regexp
def: "Specify the regular expression for decoy accession numbers." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001450 ! decoy DB details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001284
name: decoy DB derived from
def: "OBSOLETE The name of the database, the search database was derived from." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_a: MS:1001450 ! decoy DB details
is_obsolete: true

[Term]
id: MS:1001285
name: database IPI_mouse
def: "International Protein Index database for Mus musculus sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001286
name: database IPI_rat
def: "International Protein Index database for Rattus norvegicus sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001287
name: database IPI_zebrafish
def: "International Protein Index database for Danio rerio sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001288
name: database IPI_chicken
def: "International Protein Index database for Gallus gallus sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001289
name: database IPI_cow
def: "International Protein Index database for Bos taurus sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001290
name: database IPI_arabidopsis
def: "International Protein Index database for Arabidopsis thaliana sequences." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1001291
name: decoy DB from nr
def: "OBSOLETE Decoy database from a non-redundant GenBank sequence database." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001292
name: decoy DB from IPI_rat
def: "OBSOLETE Decoy database from a International Protein Index database for Rattus norvegicus." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001293
name: decoy DB from IPI_mouse
def: "OBSOLETE Decoy database from a International Protein Index database for Mus musculus." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001294
name: decoy DB from IPI_arabidopsis
def: "OBSOLETE Decoy database from a International Protein Index database for Arabidopsis thaliana." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001295
name: decoy DB from EST
def: "OBSOLETE Decoy database from an expressed sequence tag nucleotide sequence database." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001296
name: decoy DB from IPI_zebrafish
def: "OBSOLETE Decoy database from a International Protein Index database for Danio rerio." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001297
name: decoy DB from UniProtKB/Swiss-Prot
def: "OBSOLETE Decoy database from a Swiss-Prot protein sequence database." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001298
name: decoy DB from IPI_chicken
def: "OBSOLETE Decoy database from a International Protein Index database for Gallus gallus." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001299
name: decoy DB from IPI_cow
def: "OBSOLETE Decoy database from a International Protein Index database for Bos taurus." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001300
name: decoy DB from IPI_human
def: "OBSOLETE Decoy database from a International Protein Index database for Homo sapiens." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1001301
name: protein rank
def: "The rank of the protein in a list sorted by the search engine." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001085 ! protein-level identification attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001302
name: search engine specific input parameter
def: "Search engine specific input parameters." [PSI:PI]
is_a: MS:1002093 ! search engine input parameter

[Term]
id: MS:1001303
name: Arg-C
def: "Endoproteinase Arg-C." [PSI:PI]
synonym: "Trypsin/R" EXACT []
synonym: "Clostripain" EXACT []
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001272 ! (?<=R)(?!P)

[Term]
id: MS:1001304
name: Asp-N
def: "Endoproteinase Asp-N." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001273 ! (?=[BD])

[Term]
id: MS:1001305
name: Asp-N_ambic
def: "Enzyme Asp-N, Ammonium Bicarbonate (AmBic)." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001274 ! (?=[DE])

[Term]
id: MS:1001306
name: Chymotrypsin
def: "Enzyme chymotrypsin." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001332 ! (?<=[FYWL])(?!P)

[Term]
id: MS:1001307
name: CNBr
def: "Cyanogen bromide." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001333 ! (?<=M)

[Term]
id: MS:1001308
name: Formic_acid
def: "Formic acid." [PubChem_Compound:284]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001334 ! ((?<=D))|((?=D))

[Term]
id: MS:1001309
name: Lys-C
def: "Endoproteinase Lys-C." [PSI:PI]
synonym: "Trypsin/K" EXACT []
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001335 ! (?<=K)(?!P)

[Term]
id: MS:1001310
name: Lys-C/P
def: "Proteinase Lys-C/P." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001336 ! (?<=K)

[Term]
id: MS:1001311
name: PepsinA
def: "PepsinA proteinase." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001337 ! (?<=[FL])

[Term]
id: MS:1001312
name: TrypChymo
def: "Cleavage agent TrypChymo." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001338 ! (?<=[FYWLKR])(?!P)

[Term]
id: MS:1001313
name: Trypsin/P
def: "Cleavage agent Trypsin/P." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001339 ! (?<=[KR])

[Term]
id: MS:1001314
name: V8-DE
def: "Cleavage agent V8-DE." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001340 ! (?<=[BDEZ])(?!P)

[Term]
id: MS:1001315
name: V8-E
def: "Cleavage agent V8-E." [PSI:PI]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001341 ! (?<=[EZ])(?!P)

[Term]
id: MS:1001316
name: Mascot:SigThreshold
def: "Significance threshold below which the p-value of a peptide match must lie to be considered statistically significant (default 0.05)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001317
name: Mascot:MaxProteinHits
def: "The number of protein hits to display in the report. If 'Auto', all protein hits that have a protein score exceeding the average peptide identity threshold are reported. Otherwise an integer at least 1." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001318
name: Mascot:ProteinScoringMethod
def: "Mascot protein scoring method; either 'Standard' or 'MudPIT'." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001319
name: Mascot:MinMSMSThreshold
def: "Mascot peptide match ion score threshold. If between 0 and 1, then peptide matches whose expect value exceeds the thresholds are suppressed; if at least 1, then peptide matches whose ion score is below the threshold are suppressed." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001320
name: Mascot:ShowHomologousProteinsWithSamePeptides
def: "If true, show (sequence or spectrum) same-set proteins. Otherwise they are suppressed." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001321
name: Mascot:ShowHomologousProteinsWithSubsetOfPeptides
def: "If true, show (sequence or spectrum) sub-set and subsumable proteins. Otherwise they are suppressed." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001322
name: Mascot:RequireBoldRed
def: "Only used in Peptide Summary and Select Summary reports. If true, a peptide match must be 'bold red' to be included in the report; bold red means the peptide is a top ranking match in a query and appears for the first time (in linear order) in the list of protein hits." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001323
name: Mascot:UseUnigeneClustering
def: "If true, then the search results are against a nucleic acid database and Unigene clustering is enabled. Otherwise UniGene clustering is not in use." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001324
name: Mascot:IncludeErrorTolerantMatches
def: "If true, then the search results are error tolerant and peptide matches from the second pass are included in search results. Otherwise no error tolerant peptide matches are included." [http://www.matrixscience.com/help/error_tolerant_help.html]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001325
name: Mascot:ShowDecoyMatches
def: "If true, then the search results are against an automatically generated decoy database and the reported peptide matches and protein hits come from the decoy database. Otherwise peptide matches and protein hits come from the original database." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001326
name: add_others
def: "OBSOLETE." [PSI:PI]
comment: This former purgatory term was made obsolete.
is_obsolete: true

[Term]
id: MS:1001328
name: OMSSA:evalue
def: "OMSSA E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001329
name: OMSSA:pvalue
def: "OMSSA p-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001330
name: X\!Tandem:expect
def: "The X!Tandem expectation value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001331
name: X\!Tandem:hyperscore
def: "The X!Tandem hyperscore." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001332
name: (?<=[FYWL])(?\!P)
def: "Regular expression for Chymotrypsin." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001333
name: (?<=M)
def: "Regular expression for CNBr." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001334
name: ((?<=D))|((?=D))
def: "Regular expression for formic acid." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001335
name: (?<=K)(?\!P)
def: "Regular expression for Lys-C." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001336
name: (?<=K)
def: "Regular expression for Lys-C/P." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001337
name: (?<=[FL])
def: "Regular expression for PepsinA." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001338
name: (?<=[FYWLKR])(?\!P)
def: "Regular expression for TrypChymo." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001339
name: (?<=[KR])
def: "Regular expression for Trypsin/P." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001340
name: (?<=[BDEZ])(?\!P)
def: "Regular expression for V8-DE." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001341
name: (?<=[EZ])(?\!P)
def: "Regular expression for V8-E." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001342
name: database sequence details
def: "Details about a single database sequence." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001343
name: NA sequence
def: "The sequence is a nucleic acid sequence." [PSI:PI]
is_a: MS:1001342 ! database sequence details

[Term]
id: MS:1001344
name: AA sequence
def: "The sequence is a amino acid sequence." [PSI:PI]
is_a: MS:1001342 ! database sequence details

[Term]
id: MS:1001345
name: mass table source
def: "Children of this term specify the source of the mass table used." [PSI:PI]
is_a: MS:1001354 ! mass table options

[Term]
id: MS:1001346
name: AAIndex mass table
def: "The masses used in the mass table are taken from AAIndex." [PSI:PI]
is_a: MS:1001345 ! mass table source

[Term]
id: MS:1001347
name: database file formats
def: "The children of this term define file formats of the sequence database used." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001348
name: FASTA format
def: "The sequence database was stored in the FASTA format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001349
name: ASN.1
def: "The sequence database was stored in the Abstract Syntax Notation 1 format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001350
name: NCBI *.p*
def: "The sequence database was stored in the NCBI formatdb (*.p*) format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001351
name: clustal aln
def: "ClustalW ALN (multiple alignment) format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001352
name: embl em
def: "EMBL entry format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001353
name: NBRF PIR
def: "The NBRF PIR was used as format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001354
name: mass table options
def: "Root node for options for the mass table used." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001355
name: peptide descriptions
def: "Descriptions of peptides." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1001356
name: spectrum descriptions
def: "Descriptions of the input spectra." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001357
name: spectrum quality descriptions
def: "Description of the quality of the input spectrum." [PSI:PI]
is_a: MS:1001356 ! spectrum descriptions

[Term]
id: MS:1001358
name: msmsEval quality
def: "This term reports the quality of the spectrum assigned by msmsEval." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001357 ! spectrum quality descriptions
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001359
name: ambiguous residues
def: "Children of this term describe ambiguous residues." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001360
name: alternate single letter codes
def: "List of standard residue one letter codes which are used to replace a non-standard." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001359 ! ambiguous residues
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001361
name: alternate mass
def: "List of masses a non-standard letter code is replaced with." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001359 ! ambiguous residues
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001362
name: number of unmatched peaks
def: "The number of unmatched peaks." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1002345 ! PSM-level attribute
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001363
name: peptide unique to one protein
def: "A peptide matching only one." [PSI:PI]
is_a: MS:1001127 ! peptide sharing details

[Term]
id: MS:1001364
name: peptide sequence-level global FDR
def: "Estimation of the global false discovery rate for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002703 ! peptide sequence-level result list statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001365
name: frag: internal yb ion
def: "Fragmentation information, type of product: internal yb ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001366
name: frag: internal ya ion
def: "Fragmentation information, type of product: internal ya ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001367
name: frag: z+1 ion
def: "Fragmentation information, type of product: z+1 ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001368
name: frag: z+2 ion
def: "Fragmentation information, type of product: z+2 ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001369
name: text format
def: "Simple text file format of \"m/z [intensity]\" values for a PMF (or single MS2) search." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001370
name: Mascot:homology threshold
def: "The Mascot result 'homology threshold'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001371
name: Mascot:identity threshold
def: "The Mascot result 'identity threshold'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001372
name: SEQUEST:Sequences
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001373
name: SEQUEST:TIC
def: "SEQUEST total ion current." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001374
name: SEQUEST:Sum
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001375
name: Phenyx:Instrument Type
def: "The instrument type parameter value in Phenyx." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001376
name: Phenyx:Scoring Model
def: "The selected scoring model in Phenyx." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001377
name: Phenyx:Default Parent Charge
def: "The default parent charge value in Phenyx." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001378
name: Phenyx:Trust Parent Charge
def: "The parameter in Phenyx that specifies if the experimental charge state is to be considered as correct." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001379
name: Phenyx:Turbo
def: "The turbo mode parameter in Phenyx." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001380
name: Phenyx:Turbo:ErrorTol
def: "The maximal allowed fragment m/z error filter considered in the turbo mode of Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001381
name: Phenyx:Turbo:Coverage
def: "The minimal peptide sequence coverage value, expressed in percent, considered in the turbo mode of Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001382
name: Phenyx:Turbo:Series
def: "The list of ion series considered in the turbo mode of Phenyx." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001383
name: Phenyx:MinPepLength
def: "The minimal number of residues for a peptide to be considered for a valid identification in Phenyx." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001384
name: Phenyx:MinPepzscore
def: "The minimal peptide z-score for a peptide to be considered for a valid identification in Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001385
name: Phenyx:MaxPepPvalue
def: "The maximal peptide p-value for a peptide to be considered for a valid identification in Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001386
name: Phenyx:AC Score
def: "The minimal protein score required for a protein database entry to be displayed in the list of identified proteins in Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001387
name: Phenyx:Conflict Resolution
def: "The parameter in Phenyx that specifies if the conflict resolution algorithm is to be used." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002097 ! Phenyx input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001388
name: Phenyx:AC
def: "The primary sequence database identifier of a protein in Phenyx." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001389
name: Phenyx:ID
xref: value-type:xsd\:string "The allowed value-type for this CV term."
def: "A secondary sequence database identifier of a protein in Phenyx." [PSI:PI]
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001390
name: Phenyx:Score
def: "The protein score of a protein match in Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001391
name: Phenyx:Peptides1
def: "First number of phenyx result \"#Peptides\"." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001392
name: Phenyx:Peptides2
def: "Second number of phenyx result \"#Peptides\"." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001393
name: Phenyx:Auto
def: "The value of the automatic peptide acceptance filter in Phenyx." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001394
name: Phenyx:User
def: "The value of the user-defined peptide acceptance filter in Phenyx." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001395
name: Phenyx:Pepzscore
def: "The z-score value of a peptide sequence match in Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001396
name: Phenyx:PepPvalue
def: "The p-value of a peptide sequence match in Phenyx." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001397
name: Phenyx:NumberOfMC
def: "The number of missed cleavages of a peptide sequence in Phenyx." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001398
name: Phenyx:Modif
def: "The expression of the nature and position(s) of modified residue(s) on a matched peptide sequence in Phenyx." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001399
name: OMSSA csv format
def: "Source file for this mzIdentML was in OMSSA csv file format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001400
name: OMSSA xml format
def: "Source file for this mzIdentML was in OMSSA xml file format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001401
name: X\!Tandem xml format
def: "Source file for this mzIdentML was in X!Tandem xml file format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001405
name: spectrum identification result details
def: "This subsection describes terms which can describe details of spectrum identification results." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001406
name: param: internal yb ion
def: "Parameter information, type of product: internal yb ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001407
name: param: internal ya ion
def: "Parameter information, type of product: internal ya ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001408
name: param: z+1 ion
def: "Parameter information, type of product: z+1 ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001409
name: param: z+2 ion
def: "Parameter information, type of product: z+2 ion." [PSI:PI]
is_a: MS:1002473 ! ion series considered in search

[Term]
id: MS:1001410
name: translation start codons
def: "The translation start codons used to translate the nucleotides to amino acids." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001411
name: search tolerance specification
def: "Specification of the search tolerance." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001412
name: search tolerance plus value
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001411 ! search tolerance specification
relationship: has_units UO:0000166 ! parts per notation unit
relationship: has_units UO:0000169 ! parts per million
relationship: has_units UO:0000187 ! percent
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001413
name: search tolerance minus value
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001411 ! search tolerance specification
relationship: has_units UO:0000166 ! parts per notation unit
relationship: has_units UO:0000169 ! parts per million
relationship: has_units UO:0000187 ! percent
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001414
name: MGF scans
def: "OBSOLETE: replaced by MS:1000797 (peak list scans): This term can hold the scans attribute from an MGF input file." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
is_obsolete: true
replaced_by: MS:1000797
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001415
name: MGF raw scans
def: "OBSOLETE: replaced by MS:1000798 (peak list raw scans): This term can hold the raw scans attribute from an MGF input file." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
is_obsolete: true
replaced_by: MS:1000798
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001416
name: spectrum title
def: "OBSOLETE: replaced by MS:1000796 (spectrum title): Holds the spectrum title from different input file formats, e.g. MGF TITLE." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
is_obsolete: true
replaced_by: MS:1000796
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001417
name: SpectraST:dot
def: "SpectraST dot product of two spectra, measuring spectral similarity." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001418
name: SpectraST:dot_bias
def: "SpectraST measure of how much of the dot product is dominated by a few peaks." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001419
name: SpectraST:discriminant score F
def: "SpectraST spectrum score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001420
name: SpectraST:delta
def: "SpectraST normalised difference between dot product of top hit and runner-up." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001421
name: pepXML format
def: "The XML-based pepXML file format for encoding PSM information, created and maintained by the Trans-Proteomic Pipeline developers." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001422
name: protXML format
def: "The XML-based protXML file format for encoding protein identifications, created and maintained by the Trans-Proteomic Pipeline developers." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001423
name: translation table description
def: "A URL that describes the translation table used to translate the nucleotides to amino acids." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1001424
name: ProteinExtractor:Methodname
def: "Name of the used method in the ProteinExtractor algorithm." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001425
name: ProteinExtractor:GenerateNonRedundant
def: "Flag indicating if a non redundant scoring should be generated." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001426
name: ProteinExtractor:IncludeIdentified
def: "Flag indicating if identified proteins should be included." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001427
name: ProteinExtractor:MaxNumberOfProteins
def: "The maximum number of proteins to consider." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001428
name: ProteinExtractor:MaxProteinMass
def: "The maximum considered mass for a protein." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001429
name: ProteinExtractor:MinNumberOfPeptides
def: "The minimum number of proteins to consider." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001430
name: ProteinExtractor:UseMascot
def: "Flag indicating to include Mascot scoring for calculation of the ProteinExtractor meta score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001431
name: ProteinExtractor:MascotPeptideScoreThreshold
def: "Only peptides with scores higher than that threshold are taken into account in Mascot scoring for calculation of the ProteinExtractor meta score." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001432
name: ProteinExtractor:MascotUniqueScore
def: "In the final result each protein must have at least one peptide above this Mascot score threshold in ProteinExtractor meta score calculation." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001433
name: ProteinExtractor:MascotUseIdentityScore
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001434
name: ProteinExtractor:MascotWeighting
def: "Influence of Mascot search engine in the process of merging the search engine specific protein lists into the global protein list of ProteinExtractor." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001435
name: ProteinExtractor:UseSequest
def: "Flag indicating to include SEQUEST scoring for calculation of the ProteinExtractor meta score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001436
name: ProteinExtractor:SequestPeptideScoreThreshold
def: "Only peptides with scores higher than that threshold are taken into account in SEQUEST scoring for calculation of the ProteinExtractor meta score." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001437
name: ProteinExtractor:SequestUniqueScore
def: "In the final result each protein must have at least one peptide above this SEQUEST score threshold in ProteinExtractor meta score calculation." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001438
name: ProteinExtractor:SequestWeighting
def: "Influence of SEQUEST search engine in the process of merging the search engine specific protein lists into the global protein list of ProteinExtractor." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001439
name: ProteinExtractor:UseProteinSolver
def: "Flag indicating to include ProteinSolver scoring for calculation of the ProteinExtractor meta score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001440
name: ProteinExtractor:ProteinSolverPeptideScoreThreshold
def: "Only peptides with scores higher than that threshold are taken into account in ProteinSolver scoring for calculation of the ProteinExtractor meta score." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001441
name: ProteinExtractor:ProteinSolverUniqueScore
def: "In the final result each protein must have at least one peptide above this ProteinSolver score threshold in ProteinExtractor meta score calculation." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001442
name: ProteinExtractor:ProteinSolverWeighting
def: "Influence of ProteinSolver search engine in the process of merging the search engine specific protein lists into the global protein list of ProteinExtractor." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001443
name: ProteinExtractor:UsePhenyx
def: "Flag indicating to include Phenyx scoring for calculation of the ProteinExtractor meta score." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001444
name: ProteinExtractor:PhenyxPeptideScoreThreshold
def: "Only peptides with scores higher than that threshold are taken into account in Phenyx scoring for calculation of the ProteinExtractor meta score." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001445
name: ProteinExtractor:PhenyxUniqueScore
def: "In the final result each protein must have at least one peptide above this Phenyx score threshold in ProteinExtractor meta score calculation." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001446
name: ProteinExtractor:PhenyxWeighting
def: "Influence of Phenyx search engine in the process of merging the search engine specific protein lists into the global protein list of ProteinExtractor." [DOI:10.4172/jpb.1000056]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001447
name: prot:FDR threshold
def: "False-discovery rate threshold for proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002485 ! protein-level statistical threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001448
name: pep:FDR threshold
def: "False-discovery rate threshold for peptides." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002484 ! peptide-level statistical threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001449
name: OMSSA e-value threshold
def: "Threshold for OMSSA e-value for quality estimation." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002099 ! OMSSA input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001450
name: decoy DB details
def: "Details of decoy generation and database structure." [PSI:PI]
is_a: MS:1001011 ! search database details

[Term]
id: MS:1001451
name: decoy DB generation algorithm
def: "Name of algorithm used for decoy generation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001450 ! decoy DB details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001452
name: decoy DB type shuffle
def: "Decoy type: Amino acids of protein sequences are used in a random order." [PSI:PI]
is_a: MS:1001450 ! decoy DB details

[Term]
id: MS:1001453
name: DB composition only decoy
def: "Decoy database composition: database contains only decoy entries." [PSI:PI]
is_a: MS:1001450 ! decoy DB details

[Term]
id: MS:1001454
name: quality estimation with implicite decoy sequences
def: "Decoy entries are generated during the search, not explicitly stored in a database (like Mascot Decoy)." [PSI:PI]
is_a: MS:1001060 ! quality estimation method details

[Term]
id: MS:1001455
name: acquisition software
def: "Acquisition software." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1001456
name: analysis software
def: "Analysis software." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1001457
name: data processing software
def: "Data processing software." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1001458
name: spectrum generation information
def: "Vocabularies describing the spectrum generation information." [PSI:PI]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1001459
name: file format
def: "Format of data files." [PSI:MS]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1001460
name: unknown modification
def: "This term should be given if the modification was unknown." [PSI:PI]
is_a: MS:1001471 ! peptide modification details

[Term]
id: MS:1001461
name: greylag
def: "Greylag identification software." [http://greylag.org/]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001462
name: PEFF format
def: "The sequence database was stored in the PEFF (PSI enhanced FastA file) format." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1001463
name: Phenyx XML format
def: "Phenyx open XML file format." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001464
name: DTASelect format
def: "DTASelect file format." [PMID:12643522, http://www.scripps.edu/cravatt/protomap/dtaselect_instructions.html]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001466
name: MS2 format
def: "MS2 file format for MS2 spectral data." [PMID:15317041, DOI:10.1002/rcm.1603, http://fields.scripps.edu/sequest/SQTFormat.html]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001467
name: taxonomy: NCBI TaxID
def: "This term is used if a NCBI TaxID is specified, e.g. 9606 for Homo sapiens." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001089 ! molecule taxonomy
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001468
name: taxonomy: common name
def: "This term is used if a common name is specified, e.g. human. Recommend using MS:1001467 (taxonomy: NCBI TaxID) where possible." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001089 ! molecule taxonomy
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001469
name: taxonomy: scientific name
def: "This term is used if a scientific name is specified, e.g. Homo sapiens. Recommend using MS:1001467 (taxonomy: NCBI TaxID) where possible." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001089 ! molecule taxonomy
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001470
name: taxonomy: Swiss-Prot ID
def: "This term is used if a swiss prot taxonomy id is specified, e.g. Human. Recommend using MS:1001467 (taxonomy: NCBI TaxID) where possible." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001089 ! molecule taxonomy
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001471
name: peptide modification details
def: "The children of this term can be used to describe modifications." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001472
name: selected ion monitoring chromatogram
def: "Representation of an array of the measurements of a selectively monitored ion versus time." [PSI:MS]
synonym: "SIM chromatogram" EXACT []
is_a: MS:1000810 ! ion current chromatogram

[Term]
id: MS:1001473
name: selected reaction monitoring chromatogram
def: "Representation of an array of the measurements of a selectively monitored reaction versus time." [PSI:MS]
synonym: "SRM chromatogram" EXACT []
is_a: MS:1000810 ! ion current chromatogram

[Term]
id: MS:1001474
name: consecutive reaction monitoring chromatogram
def: "OBSOLETE Representation of an array of the measurements of a series of monitored reactions versus time." [PSI:MS]
comment: This term was made obsolete because, by design, it can't be properly represented in mzML 1.1. CRM experiments must be represented in a spectrum-centric way.
synonym: "CRM chromatogram" EXACT []
is_a: MS:1000810 ! ion current chromatogram
is_obsolete: true

[Term]
id: MS:1001475
name: OMSSA
def: "Open Mass Spectrometry Search Algorithm was used to analyze the spectra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001476
name: X\!Tandem
def: "X!Tandem was used to analyze the spectra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001477
name: SpectraST
def: "SpectraST was used to analyze the spectra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001478
name: Mascot Parser
def: "Mascot Parser was used to analyze the spectra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001479
name: null-terminated ASCII string
def: "Sequence of zero or more non-zero ASCII characters terminated by a single null (0) byte." [PSI:MS]
is_a: MS:1000518 ! binary data type

[Term]
id: MS:1001480
name: SCIEX TOF/TOF nativeID format
def: "Native format defined by jobRun=xsd:nonNegativeInteger spotLabel=xsd:string spectrum=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1001481
name: SCIEX TOF/TOF database
def: "Applied Biosystems/MDS Analytical Technologies TOF/TOF instrument database." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001482
name: 5800 TOF/TOF
def: "SCIEX 5800 TOF-TOF Analyzer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1001483
name: SCIEX TOF/TOF Series Explorer Software
def: "SCIEX or Applied Biosystems software for TOF/TOF data acquisition and analysis." [PSI:MS]
is_a: MS:1000690 ! SCIEX software
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001484
name: intensity normalization
def: "Normalization of data point intensities." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1001485
name: m/z calibration
def: "Calibration of data point m/z positions." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1001486
name: data filtering
def: "Filtering out part of the data." [PSI:MS]
is_a: MS:1000543 ! data processing action

[Term]
id: MS:1001487
name: ProteinExtractor
def: "An algorithm for protein determination/assembly integrated into Bruker's ProteinScape." [PSI:MS]
is_a: MS:1000692 ! Bruker software
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001488
name: Mascot Distiller
def: "Mascot Distiller." [PSI:PI]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001489
name: Mascot Integra
def: "Mascot Integra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001490
name: Percolator
def: "Percolator." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001491
name: percolator:Q value
def: "Percolator:Q value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001492
name: percolator:score
def: "Percolator:score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001493
name: percolator:PEP
def: "Posterior error probability." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001494
name: no threshold
def: "In case no threshold was used." [PSI:PI]
is_a: MS:1002482 ! statistical threshold

[Term]
id: MS:1001495
name: ProteinScape:SearchResultId
def: "The SearchResultId of this peptide as SearchResult in the ProteinScape database." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001496
name: ProteinScape:SearchEventId
def: "The SearchEventId of the SearchEvent in the ProteinScape database." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001497
name: ProteinScape:ProfoundProbability
def: "The Profound probability score stored by ProteinScape." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001498
name: Profound:z value
def: "The Profound z value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001499
name: Profound:Cluster
def: "The Profound cluster score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001500
name: Profound:ClusterRank
def: "The Profound cluster rank." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001501
name: MSFit:Mowse score
def: "The MSFit Mowse score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001502
name: Sonar:Score
def: "The Sonar score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001503
name: ProteinScape:PFFSolverExp
def: "The ProteinSolver exp value stored by ProteinScape." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001504
name: ProteinScape:PFFSolverScore
def: "The ProteinSolver score stored by ProteinScape." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001505
name: ProteinScape:IntensityCoverage
def: "The intensity coverage of the identified peaks in the spectrum calculated by ProteinScape." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001506
name: ProteinScape:SequestMetaScore
def: "The SEQUEST meta score calculated by ProteinScape from the original SEQUEST scores." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001507
name: ProteinExtractor:Score
def: "The score calculated by ProteinExtractor." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001508
name: Agilent MassHunter nativeID format
def: "Native format defined by scanId=xsd:nonNegativeInteger." [PSI:PI]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1001509
name: Agilent MassHunter format
def: "A data file format found in an Agilent MassHunter directory which contains raw data acquired by an Agilent mass spectrometer." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001510
name: TSQ Vantage
def: "TSQ Vantage." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1001511
name: Sequence database filter types
def: "Filter types which are used to filter a sequence database." [PSI:PI]
is_a: MS:1001019 ! database filtering

[Term]
id: MS:1001512
name: Sequence database filters
def: "Sequence database filters which actually can contains values, e.g. to limit PI value of the sequences used to search." [PSI:PI]
is_a: MS:1001019 ! database filtering

[Term]
id: MS:1001513
name: DB sequence filter pattern
def: "DB sequence filter pattern." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001512 ! Sequence database filters
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001514
name: DB accession filter string
def: "DB accession filter string." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001512 ! Sequence database filters
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001515
name: frag: c ion - H2O
def: "Fragmentation information, type of product: c ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001516
name: frag: c ion - NH3
def: "Fragmentation information, type of product: c ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001517
name: frag: z ion - H2O
def: "Fragmentation information, type of product: z ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001518
name: frag: z ion - NH3
def: "Fragmentation information, type of product: z ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001519
name: frag: x ion - H2O
def: "Fragmentation information, type of product: x ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001520
name: frag: x ion - NH3
def: "Fragmentation information, type of product: x ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001521
name: frag: precursor ion - H2O
def: "Fragmentation information, type of product: precursor ion without water." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001522
name: frag: precursor ion - NH3
def: "Fragmentation information, type of product: precursor ion without ammonia." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001523
name: frag: precursor ion
def: "Fragmentation information, type of product: precursor ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1001524
name: fragment neutral loss
def: "This term can describe a neutral loss m/z value that is lost from an ion." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001471 ! peptide modification details
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001525
name: precursor neutral loss
def: "This term can describe a neutral loss m/z value that is lost from an ion." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001471 ! peptide modification details
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001526
name: spectrum from database integer nativeID format
def: "Native format defined by databasekey=xsd:long." [PSI:MS]
comment: A unique identifier of a spectrum stored in a database (e.g. a PRIMARY KEY identifier).
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1001527
name: Proteinscape spectra
def: "Spectra from Bruker/Protagen Proteinscape database." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001528
name: Mascot query number
def: "Native format defined by query=xsd:nonNegativeInteger." [PSI:MS]
comment: The spectrum (query) number in a Mascot results file, starting from 1.
is_a: MS:1000767 ! native spectrum identifier format
is_a: MS:1001405 ! spectrum identification result details

[Term]
id: MS:1001529
name: spectra data details
def: "Child-terms contain information to map the results back to spectra." [PSI:MS]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1001530
name: mzML unique identifier
def: "Native format defined by mzMLid=xsd:IDREF." [PSI:MS]
comment: A unique identifier of a spectrum stored in an mzML file.
is_a: MS:1001529 ! spectra data details

[Term]
id: MS:1001531
name: spectrum from ProteinScape database nativeID format
def: "Native format defined by databasekey=xsd:long." [PSI:MS]
comment: A unique identifier of a spectrum stored in a ProteinScape database.
is_a: MS:1000767 ! native spectrum identifier format
is_a: MS:1001529 ! spectra data details

[Term]
id: MS:1001532
name: spectrum from database string nativeID format
def: "Native format defined by databasekey=xsd:string." [PSI:MS]
comment: A unique identifier of a spectrum stored in a database (e.g. a PRIMARY KEY identifier).
is_a: MS:1000767 ! native spectrum identifier format
is_a: MS:1001529 ! spectra data details

[Term]
id: MS:1001533
name: Bruker Daltonics esquire series
def: "Bruker Daltonics' esquire series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001534
name: Bruker Daltonics flex series
def: "Bruker Daltonics' flex series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001535
name: Bruker Daltonics BioTOF series
def: "Bruker Daltonics' BioTOF series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001536
name: Bruker Daltonics micrOTOF series
def: "Bruker Daltonics' micrOTOF series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001537
name: BioTOF
def: "Bruker Daltonics' BioTOF: ESI TOF." [PSI:MS]
is_a: MS:1001535 ! Bruker Daltonics BioTOF series

[Term]
id: MS:1001538
name: BioTOF III
def: "Bruker Daltonics' BioTOF III: ESI TOF." [PSI:MS]
is_a: MS:1001535 ! Bruker Daltonics BioTOF series

[Term]
id: MS:1001539
name: UltroTOF-Q
def: "Bruker Daltonics' UltroTOF-Q: ESI Q-TOF (MALDI optional)." [PSI:MS]
is_a: MS:1001535 ! Bruker Daltonics BioTOF series

[Term]
id: MS:1001540
name: micrOTOF II
def: "Bruker Daltonics' micrOTOF II: ESI TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1001541
name: maXis
def: "Bruker Daltonics' maXis: ESI Q-TOF, Nanospray, APCI, APPI." [PSI:MS]
is_a: MS:1001547 ! Bruker Daltonics maXis series

[Term]
id: MS:1001542
name: amaZon ETD
def: "Bruker Daltonics' amaZon ETD: ESI quadrupole ion trap, Nanospray, APCI, APPI, ETD, PTR." [PSI:MS]
is_a: MS:1001545 ! Bruker Daltonics amaZon series

[Term]
id: MS:1001543
name: microflex LRF
def: "Bruker Daltonics' microflex LRF: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1001544
name: ultrafleXtreme
def: "Bruker Daltonics' ultrafleXtreme: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1001545
name: Bruker Daltonics amaZon series
def: "Bruker Daltonics' amaZon series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001546
name: amaZon X
def: "Bruker Daltonics' amaZon X: ESI quadrupole ion trap, APCI, APPI, ETD, PTR." [PSI:MS]
is_a: MS:1001545 ! Bruker Daltonics amaZon series

[Term]
id: MS:1001547
name: Bruker Daltonics maXis series
def: "Bruker Daltonics' maXis series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001548
name: Bruker Daltonics solarix series
def: "Bruker Daltonics' solarix: ESI quadrupole ion trap, APCI, APPI, ETD, PTR." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001549
name: solariX
def: "Bruker Daltonics' solariX: ESI, MALDI, Qh-FT_ICR." [PSI:MS]
is_a: MS:1001548 ! Bruker Daltonics solarix series

[Term]
id: MS:1001550
name: microflex II
def: "Bruker Daltonics' microflex II: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1001553
name: autoflex II TOF/TOF
def: "Bruker Daltonics' autoflex II TOF/TOF: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1001554
name: autoflex III TOF/TOF smartbeam
def: "Bruker Daltonics' autoflex III TOF/TOF smartbeam: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1001555
name: autoflex
def: "Bruker Daltonics' autoflex: MALDI TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1001556
name: Bruker Daltonics apex series
def: "Bruker Daltonics' apex series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1001557
name: Shimadzu Corporation software
def: "Shimadzu Corporation software." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1001558
name: MALDI Solutions
def: "Shimadzu Biotech software for data acquisition, processing, and analysis." [PSI:MS]
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software
is_a: MS:1001557 ! Shimadzu Corporation software

[Term]
id: MS:1001559
name: SCIEX TOF/TOF T2D nativeID format
def: "Native format defined by file=xsd:IDREF." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1001560
name: SCIEX TOF/TOF T2D format
def: "Applied Biosystems/MDS Analytical Technologies TOF/TOF instrument export format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001561
name: Scaffold
def: "Scaffold analysis software." [http://www.proteomesoftware.com]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001562
name: Scaffold nativeID format
def: "Scaffold native ID format." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1001563
name: SEQUEST SQT format
def: "Source file for this mzIdentML was in SEQUEST SQT format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001564
name: Discoverer MSF format
def: "Source file for this mzIdentML was in Thermo Scientific Discoverer MSF format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001565
name: IdentityE XML format
def: "Source file for this mzIdentML was in Waters IdentityE XML format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001566
name: ProteinLynx XML format
def: "Source file for this mzIdentML was in Waters ProteinLynx XML format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001567
name: SpectrumMill directories
def: "Source file for this mzIdentML was in Agilent SpectrumMill directory format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1001568
name: Scaffold:Peptide Probability
def: "Scaffold peptide probability score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001569
name: IdentityE Score
def: "Waters IdentityE peptide score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001570
name: ProteinLynx:Log Likelihood
def: "ProteinLynx log likelihood score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001571
name: ProteinLynx:Ladder Score
def: "Waters ProteinLynx Ladder score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001572
name: SpectrumMill:Score
def: "Spectrum mill peptide score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001573
name: SpectrumMill:SPI
def: "SpectrumMill SPI score (%)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001574
name: report only spectra assigned to identified proteins
def: "Flag indicating to report only the spectra assigned to identified proteins." [PSI:PI]
is_a: MS:1001060 ! quality estimation method details

[Term]
id: MS:1001575
name: Scaffold: Minimum Peptide Count
def: "Minimum number of peptides a protein must have to be accepted." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002106 ! Scaffold input parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001576
name: Scaffold: Minimum Protein Probability
def: "Minimum protein probability a protein must have to be accepted." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002106 ! Scaffold input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001577
name: Scaffold: Minimum Peptide Probability
def: "Minimum probability a peptide must have to be accepted for protein scoring." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002106 ! Scaffold input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001578
name: minimum number of enzymatic termini
def: "Minimum number of enzymatic termini a peptide must have to be accepted." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1002094 ! common search engine input parameter
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001579
name: Scaffold:Protein Probability
def: "Scaffold protein probability score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001580
name: SpectrumMill:Discriminant Score
def: "Discriminant score from Agilent SpectrumMill software." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001581
name: FAIMS compensation voltage
def: "The DC potential applied to the asymmetric waveform in FAIMS that compensates for the difference between high and low field mobility of an ion." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
synonym: "FAIMS CV" EXACT []
is_a: MS:1002892 ! ion mobility attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001582
name: XCMS
def: "Bioconductor package XCMS for preprocessing high-throughput, untargeted analyte profiling data." [PSI:MS]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001583
name: MaxQuant
def: "MaxQuant is a quantitative proteomics software package designed for analyzing large mass spectrometric data sets. It is specifically aimed at high resolution MS data." [PSI:MS]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001584
name: combined pmf + ms-ms search
def: "Search that includes data from Peptide Mass Fingerprint (PMF) and MS2 (aka Peptide Fragment Fingerprint - PFF)." [PSI:MS]
is_a: MS:1001080 ! search type

[Term]
id: MS:1001585
name: MyriMatch
def: "Tabb Lab software for directly comparing peptides in a database to tandem mass spectra." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001586
name: DirecTag
def: "Tabb Lab software for generating sequence tags from tandem mass spectra." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001587
name: TagRecon
def: "Tabb Lab software for reconciling sequence tags to a protein database." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001588
name: Pepitome
def: "Tabb Lab software for spectral library searches on tandem mass spectra." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001589
name: MyriMatch:MVH
def: "Using the multivariate hypergeometric distribution and a peak list divided into several intensity classes, this score is the negative natural log probability that the predicted peaks matched to experimental peaks by random chance." [PSI:MS]
synonym: "Pepitome:MVH" EXACT []
synonym: "TagRecon:MVH" EXACT []
is_a: MS:1001143 ! PSM-level search engine specific statistic

[Term]
id: MS:1001590
name: MyriMatch:mzFidelity
def: "The negative natural log probability that predicted peaks match to experimental peaks by random chance by scoring the m/z delta of the matches in a multinomial distribution." [PSI:MS]
synonym: "Pepitome:mzFidelity" EXACT []
synonym: "TagRecon:mzFidelity" EXACT []
is_a: MS:1001143 ! PSM-level search engine specific statistic

[Term]
id: MS:1001591
name: anchor protein
def: "A representative protein selected from a set of sequence same-set or spectrum same-set proteins." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001592
name: family member protein
def: "A protein with significant homology to another protein, but some distinguishing peptide matches." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001593
name: group member with undefined relationship OR ortholog protein
def: "TO ENDETAIL: a really generic relationship OR ortholog protein." [PSI:MS]
is_a: MS:1001101 ! protein group or subset relationship

[Term]
id: MS:1001594
name: sequence same-set protein
def: "A protein which is indistinguishable or equivalent to another protein, having matches to an identical set of peptide sequences." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001595
name: spectrum same-set protein
def: "A protein which is indistinguishable or equivalent to another protein, having matches to a set of peptide sequences that cannot be distinguished using the evidence in the mass spectra." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001596
name: sequence sub-set protein
def: "A protein with a sub-set of the peptide sequence matches for another protein, and no distinguishing peptide matches." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001597
name: spectrum sub-set protein
def: "A protein with a sub-set of the matched spectra for another protein, where the matches cannot be distinguished using the evidence in the mass spectra, and no distinguishing peptide matches." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001598
name: sequence subsumable protein
def: "A sequence same-set or sequence sub-set protein where the matches are distributed across two or more proteins." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001599
name: spectrum subsumable protein
def: "A spectrum same-set or spectrum sub-set protein where the matches are distributed across two or more proteins." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001600
name: protein inference confidence category
def: "Confidence category of inferred protein (conclusive, non conclusive, ambiguous group or indistinguishable)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001601
name: ProteomeDiscoverer:Spectrum Files:Raw File names
def: "OBSOLETE Name and location of the .raw file or files." [PSI:MS]
comment: This term was made obsolete because it's recommended to use one of the 'mass spectrometer file format' terms (MS:1000560) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001602
name: ProteomeDiscoverer:SRF File Selector:SRF File Path
def: "OBSOLETE Path and name of the .srf (SEQUEST Result Format) file." [PSI:MS]
comment: This term was made obsolete. Use attribute in mzIdentML / mzQuantML instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001603
name: ProteomeDiscoverer:Spectrum Selector:Ionization Source
def: "OBSOLETE Ionization source (electro-, nano-, thermospray, electron impact, APCI, MALDI, FAB etc)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use one of the 'inlet type' (MS:1000007) or 'ionization type' (MS:1000008) terms instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001604
name: ProteomeDiscoverer:Activation Type
def: "OBSOLETE Fragmentation method used (CID, MPD, ECD, PQD, ETD, HCD, Any)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use one of the 'ionization type' terms (MS:1000008) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001605
name: ProteomeDiscoverer:Spectrum Selector:Lower RT Limit
def: "Lower retention-time limit." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001606
name: ProteomeDiscoverer:Mass Analyzer
def: "OBSOLETE Type of mass spectrometer used (ITMS, FTMS, TOFMS, SQMS, TQMS, SectorMS)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use mass analyzer type (MS:1000443) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001607
name: ProteomeDiscoverer:Max Precursor Mass
def: "Maximum mass limit of a singly charged precursor ion." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001608
name: ProteomeDiscoverer:Min Precursor Mass
def: "Minimum mass limit of a singly charged precursor ion." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001609
name: ProteomeDiscoverer:Spectrum Selector:Minimum Peak Count
def: "Minimum number of peaks in a tandem mass spectrum that is allowed to pass the filter and to be subjected to further processing in the workflow." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001610
name: ProteomeDiscoverer:MS Order
def: "OBSOLETE Level of the mass spectrum (MS2 ... MS10)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use MS1 spectrum (MS:1000579) or MSn spectrum (MS:1000580) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001611
name: ProteomeDiscoverer:Polarity Mode
def: "OBSOLETE Polarity mode (positive or negative)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use scan polarity (MS:1000465) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001612
name: ProteomeDiscoverer:Spectrum Selector:Precursor Selection
def: "Determines which precursor mass to use for a given MSn scan. This option applies only to higher-order MSn scans (n >= 3)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001613
name: ProteomeDiscoverer:SN Threshold
def: "Signal-to-Noise ratio below which peaks are removed." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001614
name: ProteomeDiscoverer:Scan Type
def: "OBSOLETE Scan type for the precursor ion (full, Single Ion Monitoring (SIM), Single Reaction Monitoring (SRM))." [PSI:MS]
comment: This term was made obsolete because it's recommended to use MS1 spectrum (MS:1000579), MSn spectrum (MS:1000580), CRM spectrum (MS:1000581), SIM spectrum (MS:1000582) or SRM spectrum (MS:1000583) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001615
name: ProteomeDiscoverer:Spectrum Selector:Total Intensity Threshold
def: "Used to filter out tandem mass spectra that have a total intensity current(sum of the intensities of all peaks in a spectrum) below the specified value." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001616
name: ProteomeDiscoverer:Spectrum Selector:Unrecognized Activation Type Replacements
def: "Specifies the fragmentation method to use in the search algorithm if it is not included in the scan header." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001617
name: ProteomeDiscoverer:Spectrum Selector:Unrecognized Charge Replacements
def: "Specifies the charge state of the precursor ions, if it is not defined in the scan header." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001618
name: ProteomeDiscoverer:Spectrum Selector:Unrecognized Mass Analyzer Replacements
def: "Specifies the mass spectrometer to use to produce the spectra, if it is not included in the scan header." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001619
name: ProteomeDiscoverer:Spectrum Selector:Unrecognized MS Order Replacements
def: "Specifies the MS scan order used to produce the product spectra, if it is not included in the scan header." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001620
name: ProteomeDiscoverer:Spectrum Selector:Unrecognized Polarity Replacements
def: "Specifies the polarity of the ions monitored if it is not included in the scan header." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001621
name: ProteomeDiscoverer:Spectrum Selector:Upper RT Limit
def: "Upper retention-time limit." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001622
name: ProteomeDiscoverer:Non-Fragment Filter:Mass Window Offset
def: "Specifies the size of the mass-to-charge ratio (m/z) window in daltons used to remove precursors." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001623
name: ProteomeDiscoverer:Non-Fragment Filter:Maximum Neutral Loss Mass
def: "Maximum allowed mass of a neutral loss." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001624
name: ProteomeDiscoverer:Non-Fragment Filter:Remove Charge Reduced Precursor
def: "Determines whether the charge-reduced precursor peaks found in an ETD or ECD spectrum are removed." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001625
name: ProteomeDiscoverer:Non-Fragment Filter:Remove Neutral Loss Peaks
def: "Determines whether neutral loss peaks are removed from ETD and ECD spectra." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001626
name: ProteomeDiscoverer:Non-Fragment Filter:Remove Only Known Masses
def: "Determines whether overtone peaks are removed from LTQ FT or LTQ FT Ultra ECD spectra." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001627
name: ProteomeDiscoverer:Non-Fragment Filter:Remove Precursor Overtones
def: "Determines whether precursor overtone peaks in the spectrum are removed from the input spectrum." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001628
name: ProteomeDiscoverer:Non-Fragment Filter:Remove Precursor Peak
def: "Determines whether precursor artifact peaks from the MS2 input spectra are removed." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001629
name: ProteomeDiscoverer:Spectrum Grouper:Allow Mass Analyzer Mismatch
def: "Determines whether the fragment spectrum for scans with the same precursor mass is grouped, regardless of mass analyzer and activation type." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001630
name: ProteomeDiscoverer:Spectrum Grouper:Allow MS Order Mismatch
def: "Determines whether spectra from different MS order scans can be grouped together." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001631
name: ProteomeDiscoverer:Spectrum Grouper:Max RT Difference
def: "OBSOLETE Chromatographic window where precursors to be grouped must reside to be considered the same species." [PSI:MS]
comment: This term was made obsolete because it's recommended to use retention time window width (MS:1001907) instead.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001632
name: ProteomeDiscoverer:Spectrum Grouper:Precursor Mass Criterion
def: "Groups spectra measured within the given mass and retention-time tolerances into a single spectrum for analysis." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001633
name: ProteomeDiscoverer:Xtract:Highest Charge
def: "Highest charge state that is allowed for the deconvolution of multiply charged data." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001634
name: ProteomeDiscoverer:Xtract:Highest MZ
def: "OBSOLETE Highest mass-to-charge (mz) value for spectral peaks in the measured spectrum that are considered for Xtract." [PSI:MS]
comment: This term was made obsolete because it's recommended to use scan window upper limit (MS:1000500) instead.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001635
name: ProteomeDiscoverer:Xtract:Lowest Charge
def: "Lowest charge state that is allowed for the deconvolution of multiply charged data." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001636
name: ProteomeDiscoverer:Xtract:Lowest MZ
def: "OBSOLETE Lowest mass-to-charge (mz) value for spectral peaks in the measured spectrum that are considered for Xtract." [PSI:MS]
comment: This term was made obsolete because it's recommended to use scan window lower limit (MS:1000501) instead.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001637
name: ProteomeDiscoverer:Xtract:Monoisotopic Mass Only
def: "Determines whether the isotopic pattern, i.e. all isotopes of a mass are removed from the spectrum." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001638
name: ProteomeDiscoverer:Xtract:Overlapping Remainder
def: "Fraction of the more abundant peak that an overlapping multiplet must exceed in order to be processed (deconvoluted)." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001639
name: ProteomeDiscoverer:Xtract:Required Fitting Accuracy
def: "Accuracy required for a pattern fit to be considered valid." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001640
name: ProteomeDiscoverer:Xtract:Resolution At 400
def: "Resolution at mass 400." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001641
name: ProteomeDiscoverer:Lowest Charge State
def: "Minimum charge state below which peptides are filtered out." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001642
name: ProteomeDiscoverer:Highest Charge State
def: "Maximum charge above which peptides are filtered out." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001643
name: ProteomeDiscoverer:Spectrum Score Filter:Let Pass Above Scores
def: "Determines whether spectra with scores above the threshold score are retained rather than filtered out." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001644
name: ProteomeDiscoverer:Dynamic Modification
def: "Determine dynamic post-translational modifications (PTMs)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001645
name: ProteomeDiscoverer:Static Modification
def: "Static Modification to all occurrences of a named amino acid." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001646
name: ProteomeDiscoverer:Mascot:Decoy Search
def: "OBSOLETE Determines whether the Proteome Discoverer application searches an additional decoy database." [PSI:MS]
comment: This term was made obsolete because it's recommended to use quality estimation with decoy database (MS:1001194) instead.
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001647
name: ProteomeDiscoverer:Mascot:Error tolerant Search
def: "Determines whether to search error-tolerant." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001648
name: ProteomeDiscoverer:Mascot:Max MGF File Size
def: "Maximum size of the .mgf (Mascot Generic Format) file in MByte." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001649
name: ProteomeDiscoverer:Mascot:Mascot Server URL
def: "URL (Uniform resource Locator) of the Mascot server." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001650
name: ProteomeDiscoverer:Mascot:Number of attempts to submit the search
def: "Number of attempts to submit the Mascot search." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001651
name: ProteomeDiscoverer:Mascot:X Static Modification
def: "Number of attempts to submit the Mascot search." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001652
name: ProteomeDiscoverer:Mascot:User Name
def: "OBSOLETE Name of the user submitting the Mascot search." [PSI:MS]
comment: This term was made obsolete because it's recommended to use researcher (MS:1001271) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001653
name: ProteomeDiscoverer:Mascot:Time interval between attempts to submit a search
def: "Time interval between attempts to submit a search in seconds." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001654
name: ProteomeDiscoverer:Enzyme Name
def: "OBSOLETE Specifies the enzyme reagent used for protein digestion." [PSI:MS]
comment: This term was made obsolete because it's recommended to use cleavage agent name (MS:1001045) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001655
name: ProteomeDiscoverer:Fragment Mass Tolerance
def: "OBSOLETE Mass tolerance used for matching fragment peaks in Da or mmu." [PSI:MS]
comment: This term was made obsolete because it's recommended to use search tolerance minus value (MS:1001413) or search tolerance plus value (MS:1001412) instead.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001656
name: Mascot:Instrument
def: "Type of instrument used to acquire the data in the raw file." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001657
name: ProteomeDiscoverer:Maximum Missed Cleavage Sites
def: "Maximum number of missed cleavage sites to consider during the digest." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001658
name: ProteomeDiscoverer:Mascot:Peptide CutOff Score
def: "Minimum score in the IonScore column that each peptide must exceed in order to be reported." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001659
name: ProteomeDiscoverer:Precursor Mass Tolerance
def: "OBSOLETE Mass window for which precursor ions are considered to be the same species." [PSI:MS]
comment: This term was made obsolete because it's recommended to use search tolerance minus value (MS:1001413) or search tolerance plus value (MS:1001412) instead.
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001660
name: ProteomeDiscoverer:Mascot:Protein CutOff Score
def: "Minimum protein score in the IonScore column that each protein must exceed in order to be reported." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001661
name: ProteomeDiscoverer:Protein Database
def: "OBSOLETE Database to use in the search (configured on the Mascot server)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use database name (MS:1001013) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001662
name: ProteomeDiscoverer:Mascot:Protein Relevance Factor
def: "Specifies a factor that is used in calculating a threshold that determines whether a protein appears in the results report." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001663
name: ProteomeDiscoverer:Target FDR Relaxed
def: "Specifies the relaxed target false discovery rate (FDR, 0.0 - 1.0) for peptide hits with moderate confidence." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001664
name: ProteomeDiscoverer:Target FDR Strict
def: "Specifies the strict target false discovery rate (FDR, 0.0 - 1.0) for peptide hits with high confidence." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001665
name: ProteomeDiscoverer:Mascot:Taxonomy
def: "OBSOLETE Limits searches to entries from a particular species or group of species." [PSI:MS]
comment: This term was made obsolete because it's recommended to use taxonomy: scientific name (MS:1001469) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001666
name: ProteomeDiscoverer:Use Average Precursor Mass
def: "OBSOLETE Use average mass for the precursor." [PSI:MS]
comment: This term was made obsolete because it's recommended to use parent mass type average (MS:1001212) instead.
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001667
name: Mascot:use MudPIT scoring
def: "OBSOLETE Determines whether to use MudPIT or normal scoring." [PSI:MS]
comment: This term was made obsolete because it's recommended to use Mascot:ProteinScoringMethod (MS:1001318) instead.
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
is_obsolete: true
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001668
name: ProteomeDiscoverer:Absolute XCorr Threshold
def: "Minimum cross-correlation threshold that determines whether peptides in an .srf file are imported." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001669
name: ProteomeDiscoverer:SEQUEST:Calculate Probability Score
def: "Determines whether to calculate a probability score for every peptide match." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001670
name: ProteomeDiscoverer:SEQUEST:CTerminal Modification
def: "Dynamic C-terminal modification that is used during the search." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001671
name: ProteomeDiscoverer:SEQUEST:Fragment Ion Cutoff Percentage
def: "Percentage of the theoretical ions that must be found in order for a peptide to be scored and retained." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001672
name: ProteomeDiscoverer:SEQUEST:Max Identical Modifications Per Peptide
def: "Maximum number of identical modifications that a single peptide can have." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001673
name: ProteomeDiscoverer:Max Modifications Per Peptide
def: "Maximum number of different modifications that a peptide can have, e.g. because of steric hindrance." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001674
name: ProteomeDiscoverer:SEQUEST:Maximum Peptides Considered
def: "Maximum number of peptides that are searched and scored per spectrum." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001675
name: ProteomeDiscoverer:Maximum Peptides Output
def: "Maximum number of peptide matches reported per spectrum." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001676
name: ProteomeDiscoverer:Maximum Protein References Per Peptide
def: "Maximum number of proteins that a single identified peptide can be associated with during protein assembly." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001677
name: ProteomeDiscoverer:SEQUEST:NTerminal Modification
def: "Dynamic N-terminal modification that is used during the search." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001678
name: ProteomeDiscoverer:Peptide CTerminus
def: "Static modification for the C terminal of the peptide used during the search." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001679
name: ProteomeDiscoverer:Peptide NTerminus
def: "Static modification for the N terminal of the peptide used during the search." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001680
name: ProteomeDiscoverer:SEQUEST:Peptide Relevance Factor
def: "Specifies a factor to apply to the protein score." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001681
name: ProteomeDiscoverer:Protein Relevance Threshold
def: "Specifies a peptide threshold that determines whether the protein that it is a part of is scored and retained in the report." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001682
name: ProteomeDiscoverer:Search Against Decoy Database
def: "OBSOLETE Determines whether the Proteome Discoverer application searches against a decoy database." [PSI:MS]
comment: This term was made obsolete because it's recommended to use quality estimation with decoy database (MS:1001194) instead.
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001683
name: ProteomeDiscoverer:SEQUEST:Use Average Fragment Masses
def: "Use average masses for the fragments." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001684
name: ProteomeDiscoverer:Use Neutral Loss a Ions
def: "Determines whether a ions with neutral loss are used for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001685
name: ProteomeDiscoverer:Use Neutral Loss b Ions
def: "Determines whether b ions with neutral loss are used for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001686
name: ProteomeDiscoverer:Use Neutral Loss y Ions
def: "Determines whether y ions with neutral loss are used for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001687
name: ProteomeDiscoverer:Use Neutral Loss z Ions
def: "Determines whether z ions with neutral loss are used for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001688
name: ProteomeDiscoverer:SEQUEST:Weight of a Ions
def: "Uses a ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001689
name: ProteomeDiscoverer:SEQUEST:Weight of b Ions
def: "Uses b ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001690
name: ProteomeDiscoverer:SEQUEST:Weight of c Ions
def: "Uses c ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001691
name: ProteomeDiscoverer:SEQUEST:Weight of d Ions
def: "Uses c ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001692
name: ProteomeDiscoverer:SEQUEST:Weight of v Ions
def: "Uses c ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001693
name: ProteomeDiscoverer:SEQUEST:Weight of w Ions
def: "Uses c ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001694
name: ProteomeDiscoverer:SEQUEST:Weight of x Ions
def: "Uses x ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001695
name: ProteomeDiscoverer:SEQUEST:Weight of y Ions
def: "Uses y ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001696
name: ProteomeDiscoverer:SEQUEST:Weight of z Ions
def: "Uses z ions for spectrum matching with this relative factor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001697
name: ProteomeDiscoverer:ZCore:Protein Score Cutoff
def: "Sets a minimum protein score that each protein must exceed in order to be reported." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001698
name: ProteomeDiscoverer:Reporter Ions Quantizer:Integration Method
def: "Specifies which peak to select if more than one peak is found inside the integration window." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001699
name: ProteomeDiscoverer:Reporter Ions Quantizer:Integration Window Tolerance
def: "Specifies the mass-to-charge window that enables one to look for the reporter peaks." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001700
name: ProteomeDiscoverer:Reporter Ions Quantizer:Quantitation Method
def: "Quantitation method for isobarically labeled quantitation." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001701
name: ProteomeDiscoverer:Spectrum Exporter:Export Format
def: "OBSOLETE Format of the exported spectra (dta, mgf or mzData)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use one of the 'mass spectrometer file format' terms (MS:1000560) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001702
name: ProteomeDiscoverer:Spectrum Exporter:File name
def: "Name of the output file that contains the exported data." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001703
name: ProteomeDiscoverer:Search Modifications Only For Identified Proteins
def: "Influences the modifications search." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001704
name: ProteomeDiscoverer:SEQUEST:Std High Confidence XCorr Charge1
def: "Standard high confidence XCorr parameter for charge = 1." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001705
name: ProteomeDiscoverer:SEQUEST:Std High Confidence XCorr Charge2
def: "Standard high confidence XCorr parameter for charge = 2." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001706
name: ProteomeDiscoverer:SEQUEST:Std High Confidence XCorr Charge3
def: "Standard high confidence XCorr parameter for charge = 3." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001707
name: ProteomeDiscoverer:SEQUEST:Std High Confidence XCorr Charge4
def: "Standard high confidence XCorr parameter for charge >= 4." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001708
name: ProteomeDiscoverer:SEQUEST:Std Medium Confidence XCorr Charge1
def: "Standard medium confidence XCorr parameter for charge = 1." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001709
name: ProteomeDiscoverer:SEQUEST:Std Medium Confidence XCorr Charge2
def: "Standard medium confidence XCorr parameter for charge = 2." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001710
name: ProteomeDiscoverer:SEQUEST:Std Medium Confidence XCorr Charge3
def: "Standard medium confidence XCorr parameter for charge = 3." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001711
name: ProteomeDiscoverer:SEQUEST:Std Medium Confidence XCorr Charge4
def: "Standard medium confidence XCorr parameter for charge >= 4." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001712
name: ProteomeDiscoverer:SEQUEST:FT High Confidence XCorr Charge1
def: "FT high confidence XCorr parameter for charge = 1." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001713
name: ProteomeDiscoverer:SEQUEST:FT High Confidence XCorr Charge2
def: "FT high confidence XCorr parameter for charge = 2." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001714
name: ProteomeDiscoverer:SEQUEST:FT High Confidence XCorr Charge3
def: "FT high confidence XCorr parameter for charge = 3." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001715
name: ProteomeDiscoverer:SEQUEST:FT High Confidence XCorr Charge4
def: "FT high confidence XCorr parameter for charge >= 4." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001716
name: ProteomeDiscoverer:SEQUEST:FT Medium Confidence XCorr Charge1
def: "FT medium confidence XCorr parameter for charge = 1." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001717
name: ProteomeDiscoverer:SEQUEST:FT Medium Confidence XCorr Charge2
def: "FT medium confidence XCorr parameter for charge = 2." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001718
name: ProteomeDiscoverer:SEQUEST:FT Medium Confidence XCorr Charge3
def: "FT medium confidence XCorr parameter for charge = 3." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001719
name: ProteomeDiscoverer:SEQUEST:FT Medium Confidence XCorr Charge4
def: "FT medium confidence XCorr parameter for charge >= 4." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001720
name: ProteomeDiscoverer:1. Dynamic Modification
def: "OBSOLETE ProteomeDiscoverer's 1st dynamic post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Dynamic Modification (MS:1001644) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001721
name: ProteomeDiscoverer:2. Dynamic Modification
def: "OBSOLETE ProteomeDiscoverer's 2nd dynamic post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Dynamic Modification (MS:1001644) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001722
name: ProteomeDiscoverer:3. Dynamic Modification
def: "OBSOLETE ProteomeDiscoverer's 3rd dynamic post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Dynamic Modification (MS:1001644) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001723
name: ProteomeDiscoverer:4. Dynamic Modification
def: "OBSOLETE ProteomeDiscoverer's 4th dynamic post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Dynamic Modification (MS:1001644) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001724
name: ProteomeDiscoverer:Static Modification for X
def: "Static Modification for X." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001725
name: ProteomeDiscoverer:Initial minimal peptide probability
def: "Minimal initial peptide probability to contribute to analysis." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001726
name: ProteomeDiscoverer:Minimal peptide probability
def: "Minimum adjusted peptide probability contributing to protein probability." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001727
name: ProteomeDiscoverer:Minimal peptide weight
def: "Minimum peptide weight contributing to protein probability." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001728
name: ProteomeDiscoverer:Number of input1 spectra
def: "Number of spectra from 1+ precursor ions." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001729
name: ProteomeDiscoverer:Number of input2 spectra
def: "Number of spectra from 2+ precursor ions." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001730
name: ProteomeDiscoverer:Number of input3 spectra
def: "Number of spectra from 3+ precursor ions." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001731
name: ProteomeDiscoverer:Number of input4 spectra
def: "Number of spectra from 4+ precursor ions." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001732
name: ProteomeDiscoverer:Number of input5 spectra
def: "Number of spectra from 5+ precursor ions." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001733
name: ProteomeDiscoverer:Number of predicted correct proteins
def: "Total number of predicted correct protein ids (sum of probabilities)." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001734
name: ProteomeDiscoverer:Organism
def: "OBSOLETE Sample organism (used for annotation purposes)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use taxonomy: scientific name (MS:1001469) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001735
name: ProteomeDiscoverer:Reference Database
def: "OBSOLETE Full path database name." [PSI:MS]
comment: This term was made obsolete. Use attribute in mzIdentML / mzQuantML instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001736
name: ProteomeDiscoverer:Residue substitution list
def: "Residues considered equivalent when comparing peptides." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001737
name: ProteomeDiscoverer:Source file extension
def: "OBSOLETE File type (if not pepXML)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use mass spectrometer file format (MS:1000560) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001738
name: ProteomeDiscoverer:Source Files
def: "OBSOLETE Input pepXML files." [PSI:MS]
comment: This term was made obsolete because it's recommended to use pepXML file (MS:1001421) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001739
name: ProteomeDiscoverer:Source Files old
def: "OBSOLETE Input pepXML files (old)." [PSI:MS]
comment: This term was made obsolete because it's recommended to use pepXML file (MS:1001421) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001740
name: ProteomeDiscoverer:WinCyg reference database
def: "Windows full path for database." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001741
name: ProteomeDiscoverer:WinCyg source files
def: "Windows pepXML file names." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001742
name: LTQ Orbitrap Velos
def: "Finnigan LTQ Orbitrap Velos MS." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1001743
name: ProteomeDiscoverer:Mascot:Weight of A Ions
def: "Determines if to use A ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001744
name: ProteomeDiscoverer:Mascot:Weight of B Ions
def: "Determines if to use B ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001745
name: ProteomeDiscoverer:Mascot:Weight of C Ions
def: "Determines if to use C ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001746
name: ProteomeDiscoverer:Mascot:Weight of D Ions
def: "Determines if to use D ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001747
name: ProteomeDiscoverer:Mascot:Weight of V Ions
def: "Determines if to use V ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001748
name: ProteomeDiscoverer:Mascot:Weight of W Ions
def: "Determines if to use W ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001749
name: ProteomeDiscoverer:Mascot:Weight of X Ions
def: "Determines if to use X ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001750
name: ProteomeDiscoverer:Mascot:Weight of Y Ions
def: "Determines if to use Y ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001751
name: ProteomeDiscoverer:Mascot:Weight of Z Ions
def: "Determines if to use z ions for spectrum matching." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001752
name: ProteomeDiscoverer:Spectrum Selector:Use New Precursor Reevaluation
def: "Determines if to use precursor reevaluation." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001753
name: ProteomeDiscoverer:Spectrum Selector:SN Threshold FTonly
def: "Signal-to-Noise ratio below which peaks are removed (in FT mode only)." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001754
name: ProteomeDiscoverer:Mascot:Please Do not Touch this
def: "Unknown Mascot parameter which ProteomeDiscoverer uses for mascot searches." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001755
name: contact phone number
def: "Phone number of the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001756
name: contact fax number
def: "Fax number for the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001757
name: contact toll-free phone number
def: "Toll-free phone number of the contact person or organization." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000585 ! contact attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001758
name: Mascot:SigThresholdType
def: "Significance threshold type used in Mascot reporting (either 'identity' or 'homology')." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001759
name: Mascot:ProteinGrouping
def: "Strategy used by Mascot to group proteins with same peptide matches (one of 'none', 'Occam's razor' or 'family clustering')." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001760
name: Percolator:features
def: "List of Percolator features that were used in processing the peptide matches. Typical Percolator features are 'retentionTime', 'dM', 'mScore', 'lgDScore', 'mrCalc', 'charge' and 'dMppm'." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002107 ! Percolator input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001761
name: ACQUITY UPLC
def: "Waters LC-system ACQUITY UPLC." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001762
name: ACQUITY UPLC H-Class
def: "Waters LC-system ACQUITY UPLC H-Class." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001763
name: ACQUITY UPLC H-Class Bio
def: "Waters LC-system ACQUITY UPLC H-Class Bio." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001764
name: ACQUITY UPLC I-Class
def: "Waters LC-system ACQUITY UPLC I-Class." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001765
name: ACQUITY UPLC Systems with 2D Technology
def: "Waters LC-system ACQUITY UPLC Systems with 2D Technology." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001766
name: nanoACQUITY UPLC
def: "Waters LC-system nanoACQUITY UPLC." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001767
name: nanoACQUITY UPLC System with 1D Technology
def: "Waters LC-system nanoACQUITY UPLC System with 1D Technology." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001768
name: nanoACQUITY UPLC with HDX Technology
def: "Waters LC-system nanoACQUITY UPLC with HDX Technology." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001769
name: TRIZAIC UPLC nanoTile
def: "Waters LC-system TRIZAIC UPLC nanoTile." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001770
name: GCT Premier
def: "Waters oa-ToF based GCT Premier." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001771
name: MALDI Synapt G2 HDMS
def: "Waters oa-ToF based MALDI Synapt G2 HDMS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001772
name: MALDI Synapt G2 MS
def: "Waters oa-ToF based MALDI Synapt G2 MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001773
name: MALDI Synapt G2-S HDMS
def: "Waters oa-ToF based MALDI Synapt G2 MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001774
name: MALDI Synapt G2-S MS
def: "Waters oa-ToF based MALDI Synapt G2-S MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001775
name: MALDI Synapt HDMS
def: "Waters oa-ToF based MALDI Synapt HDMS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001776
name: MALDI Synapt MS
def: "Waters oa-ToF based MALDI Synapt MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001777
name: Synapt G2 HDMS
def: "Waters oa-ToF based Synapt G2 HDMS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001778
name: Synapt G2 MS
def: "Waters oa-ToF based Synapt G2 MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001779
name: Synapt G2-S HDMS
def: "Waters oa-ToF based Synapt G2-S HDMS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001780
name: Synapt G2-S MS
def: "Waters oa-ToF based Synapt G2-S MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001781
name: Synapt HDMS
def: "Waters oa-ToF based Synapt HDMS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001782
name: Synapt MS
def: "Waters oa-ToF based Synapt MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001783
name: Xevo G2 Q-Tof
def: "Waters oa-ToF based Xevo G2 Q-Tof." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001784
name: Xevo G2 Tof
def: "Waters oa-ToF based Xevo G2 Tof." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001785
name: Xevo Q-Tof
def: "Waters oa-ToF based Xevo Q-Tof." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001786
name: 3100
def: "Waters quadrupole based 3100." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001787
name: Acquity SQD
def: "Waters quadrupole based Acquity SQD." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001788
name: Acquity TQD
def: "Waters quadrupole based Acquity TQD." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001789
name: Quattro micro GC
def: "Waters (triple) quadrupole based Quattro micro GC." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001790
name: Xevo TQ MS
def: "Waters quadrupole based Xevo TQ MS." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001791
name: Xevo TQD
def: "Waters quadrupole based Xevo TQD." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001792
name: Xevo TQ-S
def: "Waters quadrupole based Xevo TQ-S." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1001793
name: Mascot:PreferredTaxonomy
def: "NCBI TaxID taxonomy ID to prefer when two or more proteins match the same set of peptides or when protein entry in database represents multiple sequences." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001795
name: Empower
def: "Waters Empower software for liquid chromatography and mass spectrometry acquisition." [PSI:MS]
is_a: MS:1000694 ! Waters software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001796
name: UNIFY
def: "Waters UNIFY software for liquid chromatography and mass spectrometry acquisition." [PSI:MS]
is_a: MS:1000694 ! Waters software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001797
name: travelling wave ion mobility mass spectrometer
def: "OBSOLETE An ion mobility mass spectrometry technique based on the superimposition of travelling voltage waves on a radially-confining RF voltage in a gas-filled, stacked-ring ion guide." [PSI:MS]
comment: This child of the former purgatory term ion mobility spectrometry was made obsolete.
synonym: "TWIMS" EXACT []
is_obsolete: true

[Term]
id: MS:1001798
name: LECO software
def: "LECO software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1001799
name: ChromaTOF software
def: "Software for acquisition, processing and analysis of data for LECO instruments." [PSI:MS]
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software
is_a: MS:1001798 ! LECO software

[Term]
id: MS:1001800
name: LECO instrument model
def: "LECO instrument model." [PSI:MS]
is_a: MS:1000031 ! instrument model

[Term]
id: MS:1001801
name: Pegasus HRT
def: "LECO high resolution time-of-flight GC mass spectrometer." [PSI:MS]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1001802
name: Citius HRT
def: "LECO high resolution time-of-flight LC mass spectrometer." [PSI:MS]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1001803
name: Pegasus
def: "LECO GC time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1001804
name: TruTOF
def: "LECO bench-top GC time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1001805
name: quantification datatype
def: "The data type of the value reported in a QuantLayer." [PSI:MS]
is_a: MS:1001129 ! quantification information

[Term]
id: MS:1001806
name: quantification object attribute
def: "Attributes describing the details of an object relevant for reporting quantification workflows or values." [PSI:MS]
is_a: MS:1001129 ! quantification information

[Term]
id: MS:1001807
name: study variable attribute
def: "Attribute describing a study variable." [PSI:MS]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1001808
name: technical replicate
def: "The study variable is 'technical replicate'. The string value denotes the category of technical replicate, e.g. 'run generated from same sample'." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001807 ! study variable attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001809
name: biological replicate
def: "The study variable is 'biological replicate'. This means, the run was generated from another individual or sample." [PSI:MS]
is_a: MS:1001807 ! study variable attribute

[Term]
id: MS:1001810
name: experimental condition 'case'
def: "The experimental condition is 'case' in contrast to 'control'." [PSI:MS]
is_a: MS:1001807 ! study variable attribute

[Term]
id: MS:1001811
name: experimental condition 'control'
def: "The experimental condition is 'control' in contrast to 'case'." [PSI:MS]
is_a: MS:1001807 ! study variable attribute

[Term]
id: MS:1001812
name: experimental condition 'disease'
def: "The experimental condition is 'disease' in contrast to 'healthy'." [PSI:MS]
is_a: MS:1001807 ! study variable attribute

[Term]
id: MS:1001813
name: experimental condition 'healthy'
def: "The experimental condition is 'healthy' in contrast to 'disease'." [PSI:MS]
is_a: MS:1001807 ! study variable attribute

[Term]
id: MS:1001814
name: generic experimental condition
def: "The experimental condition is given in the value of this term." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001807 ! study variable attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001815
name: time series, time point X
def: "The experimental design followed a time series design. The time point of this run is given in the value of this term." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001807 ! study variable attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001816
name: dilution series, concentration X
def: "The experimental design followed a dilution series design. The concentration of this run is given in the value of this term." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001807 ! study variable attribute
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001817
name: raw file attribute
def: "Attribute describing a raw file." [PSI:MS]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1001818
name: one sample run
def: "The raw file contains the run of one sample (e.g. spectral counting, LC-MS label-free)." [PSI:MS]
is_a: MS:1001817 ! raw file attribute

[Term]
id: MS:1001819
name: two sample run
def: "The raw file contains the run of two samples (e.g. SILAC, metabolic labelling)." [PSI:MS]
is_a: MS:1001817 ! raw file attribute

[Term]
id: MS:1001820
name: three sample run
def: "The raw file contains the run of three samples (e.g. 3-plex SILAC)." [PSI:MS]
is_a: MS:1001817 ! raw file attribute

[Term]
id: MS:1001821
name: four sample run
def: "The raw file contains the run of four samples (e.g. 4-plex iTraq)." [PSI:MS]
is_a: MS:1001817 ! raw file attribute

[Term]
id: MS:1001822
name: eight sample run
def: "The raw file contains the run of eight samples (e.g. 8-plex iTraq)." [PSI:MS]
is_a: MS:1001817 ! raw file attribute

[Term]
id: MS:1001823
name: raw files group attribute
def: "Attribute describing, how raw files build a raw file group." [PSI:MS]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1001824
name: merge of runs of 1D gel bands
def: "Attribute describing, how raw files build a raw file group." [PSI:MS]
is_a: MS:1001823 ! raw files group attribute

[Term]
id: MS:1001825
name: feature list attribute
def: "Attribute describing a feature list." [PSI:MS]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1001826
name: mass trace reporting: rectangles
def: "The mass trace of the features of this feature list specifies rectangles. Each mass trace has the syntax (RT_start,MZ_start,RT_end,MZ_end), i.e. opposite corners are given." [PSI:MS]
is_a: MS:1001825 ! feature list attribute

[Term]
id: MS:1001827
name: mass trace reporting: polygons
def: "The mass trace of the features of this feature list specifies polygons. Each mass trace has the syntax (RT_1, MZ_1, RT_2, MZ_2, ... , RT_i, MZ_i, ... , RT_n, MZ_n), where the line (RT_n, MZ_n)->(RT_1, MZ_1) is implicit." [PSI:MS]
is_a: MS:1001825 ! feature list attribute

[Term]
id: MS:1001828
name: feature attribute
def: "Attribute describing a feature." [PSI:MS]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1001829
name: SRM transition ID
def: "Identifier for an SRM transition in an external document describing additional information about the transition." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001828 ! feature attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001830
name: Progenesis LC-MS
def: "Software from Nonlinear Dynamics for LC-MS label-free workflow." [PSI:MS]
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1001831
name: SILACAnalyzer
def: "Software for SILAC workflow." [PSI:MS]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1001832
name: quantitation software comment or customizations
def: "Quantitation software comment or any customizations to the default setup of the software." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001129 ! quantification information
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001833
name: quantitation analysis summary
def: "The overall workflow of this quantitation report." [PSI:PI]
is_a: MS:1001129 ! quantification information

[Term]
id: MS:1001834
name: LC-MS label-free quantitation analysis
def: "LC-MS label-free workflow (RT m/z map)." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1001835
name: SILAC quantitation analysis
def: "SILAC workflow (heavy, light, and sometimes medium peak)." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1001836
name: spectral counting quantitation analysis
def: "Spectral counting workflow (number of identified MS2 spectra as approximation of peptide / protein quant)." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1001837
name: iTRAQ quantitation analysis
def: "Quantification analysis using the SCIEX amine-reactive isobaric tags for relative and absolute quantification (iTRAQ) labelling workflow, wherein 2-8 reporter ions are measured in MS2 spectra near in the 114-121 m/z range." [PSI:PI, PMID:15385600]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1001838
name: SRM quantitation analysis
def: "Selected Reaction Monitoring workflow (XIC quantitation of precursor / fragment mass pair)." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1001839
name: metabolic labeling 14N / 15N quantitation analysis
def: "Metabolic labeling workflow (heavy and light versions of peptides, depending on number of nitrogens)." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1001840
name: LC-MS feature intensity
def: "Maximum peak intensity of the LC-MS feature." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001841
name: LC-MS feature volume
def: "Real (intensity times area) volume of the LC-MS feature." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001842
name: sequence-level spectral count
def: "The number of MS2 spectra identified for a raw peptide sequence without PTMs and charge state in spectral counting." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001843
name: MS1 feature maximum intensity
def: "Maximum intensity of MS1 feature." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001844
name: MS1 feature area
def: "Area of MS1 feature." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001845
name: peak area
def: "OBSOLETE Area of MS1 peak (e.g. SILAC, 15N)." [PSI:PI]
comment: This term was made obsolete because it was a duplication of MS:1001844.
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001846
name: isotopic pattern area
def: "Area of all peaks belonging to the isotopic pattern of light or heavy peak (e.g. 15N)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001847
name: reporter ion intensity
def: "Intensity of MS2 reporter ion (e.g. iTraq)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001848
name: simple ratio of two values
def: "Simple ratio of two values (enumerator and denominator)." [PSI:PI]
is_a: MS:1002066 ! ratio calculation method

[Term]
id: MS:1001849
name: sum of MatchedFeature values
def: "OBSOLETE Peptide quantification value calculated as sum of MatchedFeature quantification values." [PSI:PI]
comment: This term was made obsolete because the concept MatchedFeature was dropped.
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001850
name: normalized peptide value
def: "Normalized peptide value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001851
name: protein value: sum of peptide values
def: "Protein quantification value calculated as sum of peptide values." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001852
name: normalized protein value
def: "Normalized protein value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001853
name: max fold change
def: "Global datatype: Maximum of all pair-wise fold changes of group means (e.g. Progenesis)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001854
name: ANOVA p-value
def: "Global datatype: p-value of ANOVA of group means (e.g. Progenesis)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002072 ! p-value
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001855
name: t-test p-value
def: "P-value of t-Test of two groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002072 ! p-value
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001856
name: reporter ion raw value
def: "Intensity (or area) of MS2 reporter ion (e.g. iTraq)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001857
name: reporter ion normalized value
def: "Normalized value of MS2 reporter ion (e.g. iTraq)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001858
name: XIC area
def: "Area of the extracted ion chromatogram (e.g. of a transition in SRM)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001859
name: normalized XIC area
def: "Normalized area of the extracted ion chromatogram (e.g. of a transition in SRM)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001860
name: protein value: mean of peptide ratios
def: "Protein quantification value calculated as mean of peptide ratios." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001861
name: quantification data processing
def: "Terms used to describe types of quantification data processing." [PSI:MS]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1001862
name: normalization to mean of sum of all proteins
def: "Normalization of protein values to the mean of the sum of all protein PSM counts (e.g. spectral counting)." [PSI:MS]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1001863
name: quantile normalization, proteins
def: "Normalization of protein values to approach the same distribution." [PSI:MS]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1001864
name: quantile normalization, peptides
def: "Normalization of peptide values to approach the same distribution." [PSI:MS]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1001865
name: Progenesis automatic alignment
def: "Automatic RT alignment of Progenesis software." [PSI:MS]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1001866
name: Progenesis manual alignment
def: "RT alignment of Progenesis software using automatic and manual vectors." [PSI:MS]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1001867
name: Progenesis normalization
def: "Normalization as performed by Progenesis LC-MS." [PSI:MS]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1001868
name: distinct peptide-level q-value
def: "Estimation of the q-value for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs, possibly with different mass modifications, mapping to the same sequence have been collapsed to one entry)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002484 ! peptide-level statistical threshold
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001869
name: protein-level q-value
def: "Estimation of the q-value for proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001870
name: peptide sequence-level p-value
def: "Estimation of the p-value for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001871
name: protein-level p-value
def: "Estimation of the p-value for proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001872
name: peptide sequence-level e-value
def: "Estimation of the e-value for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
relationship: has_domain MS:1002306 ! value greater than zero
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001873
name: protein-level e-value
def: "Estimation of the e-value for proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
relationship: has_domain MS:1002306 ! value greater than zero
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001874
name: FDRScore
def: "OBSOLETE A smoothing of the distribution of q-values calculated for PSMs from individual search engines, such that ordering of result quality is maintained and all FDRScore values are guaranteed to have a value > 0." [PMID:19253293]
comment: This term was made obsolete because it was split into the more specific terms for PSM-level FDRScore (1002355), distinct peptide-level FDRScore (MS:1002360), protein-level FDRScore (MS:1002365) and protein group-level FDRScore (MS:1002374).
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001875
name: modification motif
def: "The regular expression describing the sequence motif for a modification." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001056 ! modification specificity rule
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001876
name: modification probability
def: "The a priori probability of a modification." [PSI:PI]
is_a: MS:1001056 ! modification specificity rule

[Term]
id: MS:1001877
name: ChromaTOF HRT software
def: "Software for acquisition, processing and analysis of data for LECO instruments." [PSI:MS]
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software
is_a: MS:1001798 ! LECO software

[Term]
id: MS:1001878
name: MALDI Solutions Microbial Identification
def: "Shimadzu Biotech software for data acquisition, processing, and analysis." [PSI:MS]
is_a: MS:1001558 ! MALDI Solutions

[Term]
id: MS:1001879
name: offset voltage
def: "The potential difference between two adjacent interface voltages affecting in-source collision induced dissociation." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001880
name: in-source collision-induced dissociation
def: "The dissociation of an ion as a result of collisional excitation during ion transfer from an atmospheric pressure ion source and the mass spectrometer vacuum." [PSI:MS]
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1001881
name: mz5 format
def: "mz5 file format, modelled after mzML." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1001882
name: transition validation attribute
def: "Attributes of the quality of a transition that affect its selection as appropriate." [PSI:MS]
relationship: part_of MS:1000908 ! transition

[Term]
id: MS:1001883
name: coefficient of variation
def: "Variation of a set of signal measurements calculated as the standard deviation relative to the mean." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1001882 ! transition validation attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001884
name: signal-to-noise ratio
def: "Unitless number providing the ratio of the total measured intensity of a signal relative to the estimated noise level for that signal." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1001882 ! transition validation attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001885
name: command-line parameters
def: "Parameters string passed to a command-line interface software application, omitting the executable name." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001886
name: SQID
def: "Software for data analysis of peptides and proteins." [PSI:MS]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001887
name: SQID:score
def: "The SQID result 'Score'." [PSI:PI]
is_a: MS:1001143 ! PSM-level search engine specific statistic

[Term]
id: MS:1001888
name: SQID:deltaScore
def: "The SQID result 'deltaScore'." [PSI:PI]
is_a: MS:1001143 ! PSM-level search engine specific statistic

[Term]
id: MS:1001889
name: SQID:protein score
def: "The SQID result 'protein score'." [PSI:PI]
is_a: MS:1002363 ! search engine specific score for proteins

[Term]
id: MS:1001890
name: Progenesis:protein normalised abundance
def: "The data type normalised abundance for proteins produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001891
name: Progenesis:peptide normalised abundance
def: "The data type normalised abundance for peptides produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001892
name: Progenesis:protein raw abundance
def: "The data type raw abundance for proteins produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001893
name: Progenesis:peptide raw abundance
def: "The data type raw abundance for peptide produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001894
name: Progenesis:confidence score
def: "The data type confidence score produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001895
name: Progenesis:peptide count
def: "The data type peptide count produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001896
name: Progenesis:feature intensity
def: "The data type feature intensity produced by Progenesis LC-MS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001897
name: MaxQuant:peptide counts (unique)
def: "The data type peptide counts (unique) produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001898
name: MaxQuant:peptide counts (all)
def: "The data type peptide counts (all) produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001899
name: MaxQuant:peptide counts (razor+unique)
def: "The data type peptide counts (razor+unique) produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001900
name: MaxQuant:sequence length
def: "The data type sequence length produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001901
name: MaxQuant:PEP
def: "The data type PEP (posterior error probability) produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001902
name: MaxQuant:LFQ intensity
def: "The data type LFQ intensity produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001903
name: MaxQuant:feature intensity
def: "The data type feature intensity produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001904
name: MaxQuant:MS/MS count
def: "The data type MS2 count produced by MaxQuant." [PSI:MS]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1001905
name: emPAI value
def: "The emPAI value of protein abundance, produced from the emPAI algorithm." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001906
name: APEX value
def: "The APEX value of protein abundance, produced from the APEX software." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001907
name: retention time window width
def: "The full width of a retention time window for a chromatographic peak." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000915 ! retention time window attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001908
name: ISQ
def: "Thermo Scientific ISQ single quadrupole MS with the ExtractraBrite source." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1001909
name: Velos Plus
def: "Thermo Scientific second generation Velos." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1001910
name: LTQ Orbitrap Elite
def: "Thermo Scientific LTQ Orbitrap Elite, often just referred to as the Orbitrap Elite." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1001911
name: Q Exactive
def: "Thermo Scientific Q Exactive." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1001912
name: PinPoint
def: "Thermo Scientific PinPoint SRM analysis software." [PSI:MS]
is_a: MS:1000693 ! Thermo Finnigan software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001913
name: S-lens voltage
def: "Potential difference setting of the Thermo Scientific S-lens stacked-ring ion guide in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001914
name: pymzML
def: "Python module to interface mzML Data." [PSI:MS]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001915
name: leukocyte elastase
def: "Enzyme leukocyte elastase (EC 3.4.21.37)." [BRENDA:3.4.21.37]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001957 ! (?<=[ALIV])(?!P)

[Term]
id: MS:1001916
name: proline endopeptidase
def: "Enzyme proline endopeptidase (EC 3.4.21.26)." [BRENDA:3.4.21.26]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001958 ! (?<=[HKR]P)(?!P)

[Term]
id: MS:1001917
name: glutamyl endopeptidase
def: "Enzyme glutamyl endopeptidase (EC 3.4.21.19)." [BRENDA:3.4.21.19]
synonym: "staphylococcal protease" EXACT []
synonym: "Glu-C" EXACT []
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001959 ! (?<=[^E]E)

[Term]
id: MS:1001918
name: 2-iodobenzoate
def: "Chemical iodobenzoate. Cleaves after W." [PubChem_Compound:4739928]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001960 ! (?<=W)

[Term]
id: MS:1001919
name: ProteomeXchange accession number
def: "Main identifier of a ProteomeXchange dataset." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001921
name: ProteomeXchange accession number version number
def: "Version number of a ProteomeXchange accession number." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001922
name: Digital Object Identifier (DOI)
def: "DOI unique identifier of a publication." [PSI:PI, http://dx.doi.org]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
synonym: "doi" EXACT []
is_a: MS:1000878 ! external reference identifier
relationship: has_regexp MS:1002480 ! (10[.][0-9]\{4,\}(?:[.][0-9]+)*/(?:(?![\"&\'<>])[^ \t\\r\n\\v\\f])+)
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001923
name: external reference keyword
def: "Free text attribute that can enrich the information about an entity." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002840 ! external reference data
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001924
name: journal article keyword
def: "Keyword present in a scientific publication." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001923 ! external reference keyword
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001925
name: submitter keyword
def: "Keyword assigned by the data submitter." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001923 ! external reference keyword
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001926
name: curator keyword
def: "Keyword assigned by a data curator." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001923 ! external reference keyword
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001927
name: Tranche file hash
def: "Hash assigned by the Tranche resource to an individual file." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001928
name: Tranche project hash
def: "Hash assigned by the Tranche resource to a whole project." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001929
name: PRIDE experiment URI
def: "URI that allows the access to one experiment in the PRIDE database." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1001930
name: PRIDE project URI
def: "URI that allows the access to one project in the PRIDE database." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1001931
name: source interface
def: "The source interface." [PSI:MS]
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1001932
name: source interface model
def: "The source interface model." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1001931 ! source interface
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001933
name: source sprayer
def: "The source sprayer." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1000458 ! source
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001934
name: source sprayer type
def: "The source sprayer type." [PSI:MS]
relationship: part_of MS:1001933 ! source sprayer

[Term]
id: MS:1001935
name: source sprayer manufacturer
def: "The source sprayer manufacturer." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1001933 ! source sprayer
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001936
name: source sprayer model
def: "The source sprayer model." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1001933 ! source sprayer
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001937
name: sample plate
def: "Plate where the sample solution is spotted in a MALDI or similar instrument." [PSI:MS]
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1001938
name: sample plate type
def: "The sample plate type." [PSI:MS]
relationship: part_of MS:1001937 ! sample plate

[Term]
id: MS:1001939
name: stainless steel plate
def: "Stainless steel plate." [PSI:MS]
is_a: MS:1001938 ! sample plate type

[Term]
id: MS:1001940
name: coated glass plate
def: "Coated glass plate." [PSI:MS]
is_a: MS:1001938 ! sample plate type

[Term]
id: MS:1001941
name: electrospray supply type
def: "Whether the sprayer is fed or is loaded with sample once." [PSI:MS]
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1001942
name: static supply electrospray
def: "The sprayer is loaded with sample once." [PSI:MS]
is_a: MS:1001941 ! electrospray supply type

[Term]
id: MS:1001943
name: fed supply electrospray
def: "The sprayer is continuously fed with sample." [PSI:MS]
is_a: MS:1001941 ! electrospray supply type

[Term]
id: MS:1001944
name: Collision cell exit potential
def: "Potential difference between Q2 and Q3 in a triple quadrupole instrument in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_units UO:0000218 ! volt
synonym: "CXP" EXACT []
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001945
name: Pegasus 4D
def: "LECO nominal mass resolution time-of-flight GCxGC mass spectrometer." [PSI:MS]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1001946
name: PEAKS Studio
def: "PEAKS Studio software for data analysis." [PSI:MS]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001947
name: PEAKS Online
def: "PEAKS Online software for high throughput data analysis." [PSI:MS]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001948
name: PEAKS Node
def: "PEAKS Node software for high throughput data analysis." [PSI:MS]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1001949
name: BSI software
def: "Bioinformatics Solutions Inc. Software for data processing and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1001950
name: PEAKS:peptideScore
def: "The PEAKS peptide '-10lgP Score'." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001951
name: PEAKS:proteinScore
def: "The PEAKS protein '-10lgP Score'." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001952
name: ZCore:probScore
def: "The ZCore probability score." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001953
name: source interface manufacturer
def: "The source interface manufacturer." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1001931 ! source interface
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001954
name: acquisition parameter
def: "Parameters used in the mass spectrometry acquisition." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1001458 ! spectrum generation information
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001955
name: no cleavage
def: "No cleavage." [PSI:MS]
is_a: MS:1001045 ! cleavage agent name

[Term]
id: MS:1001956
name: unspecific cleavage
def: "Unspecific cleavage." [PSI:MS]
is_a: MS:1001045 ! cleavage agent name

[Term]
id: MS:1001957
name: (?<=[ALIV])(?!P)
def: "Regular expression for leukocyte elastase." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001958
name: (?<=[HKR]P)(?!P)
def: "Regular expression for proline endopeptidase." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001959
name: (?<=[^E]E)
def: "Regular expression for glutamyl endopeptidase." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001960
name: (?<=W)
def: "Regular expression for 2-iodobenzoate." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1001961
name: peptide spectrum match scoring algorithm
def: "Algorithm used to score the match between a spectrum and a peptide ion." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: part_of MS:1001458 ! spectrum generation information
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001962
name: Mascot:C13 counts
def: "C13 peaks to use in peak detection." [PSI:MS]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1001963
name: ProteinExtractor:Weighting
def: "Weighting factor for protein list compilation by ProteinExtractor." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002098 ! ProteinExtractor input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001964
name: ProteinScape:second round Mascot
def: "Flag indicating a second round search with Mascot." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002100 ! ProteinScape input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001965
name: ProteinScape:second round Phenyx
def: "Flag indicating a second round search with Phenyx." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002100 ! ProteinScape input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1001966
name: product ion mobility
def: "The mobility of an MS2 product ion, as measured by ion mobility mass spectrometry." [PSI:MS]
is_a: MS:1001221 ! product ion attribute

[Term]
id: MS:1001967
name: product ion drift time
def: "OBSOLETE The ion drift time of an MS2 product ion." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002222 ! SRM transition attribute
relationship: has_units UO:0000028 ! millisecond
comment: This term was made obsolete because it was replaced by ion mobility drift time (MS:1002476).
is_obsolete: true
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1001968
name: PTM localization PSM-level statistic
def: "Statistic to convey the confidence of the localization of an amino acid modification on a peptide sequence at the PSM-level." [PSI:MS]
is_a: MS:1002689 ! PTM localization single result statistic

[Term]
id: MS:1001969
name: phosphoRS score
def: "phosphoRS score for PTM site location at the PSM-level." [DOI:10.1021/pr200611n, PMID:22073976]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001970
name: phosphoRS sequence probability
def: "Probability that the respective isoform is correct." [DOI:10.1021/pr200611n, PMID:22073976]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001971
name: phosphoRS site probability
def: "Estimate of the probability that the respective site is truly phosphorylated." [DOI:10.1021/pr200611n, PMID:22073976]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001972
name: PTM scoring algorithm version
def: "Version of the post-translational modification scoring algorithm." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001471 ! peptide modification details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001973
name: DeBunker
def: "DeBunker software." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001974
name: DeBunker:score
def: "Score specific to DeBunker." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001975
name: delta m/z
def: "The difference between a theoretically calculated m/z and the corresponding experimentally measured m/z. It can be expressed as absolute or relative value." [PSI:MS]
synonym: "m/z difference" EXACT []
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_units UO:0000166 ! parts per notation unit
relationship: has_units UO:0000187 ! percent
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001976
name: delta M
def: "The difference between a theoretically calculated molecular mass M and the corresponding experimentally measured M. It can be expressed as absolute or relative value." [PSI:MS]
synonym: "mass difference" EXACT []
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_units UO:0000166 ! parts per notation unit
relationship: has_units UO:0000187 ! percent
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1001977
name: MSQuant
def: "MSQuant software." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001978
name: MSQuant:PTM-score
def: "The PTM score from MSQuant software." [DOI:10.1021/pr900721e, PMID:19888749]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001979
name: MaxQuant:PTM Score
def: "The PTM score from MaxQuant software." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001980
name: MaxQuant:Phospho (STY) Probabilities
def: "The Phospho (STY) Probabilities from MaxQuant software." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001981
name: MaxQuant:Phospho (STY) Score Diffs
def: "The Phospho (STY) Score Diffs from MaxQuant software." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001982
name: MaxQuant:P-site localization probability
def: "The P-site localization probability value from MaxQuant software." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001983
name: MaxQuant:PTM Delta Score
def: "The PTM Delta Score value from MaxQuant software (Difference between highest scoring site and second highest)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001984
name: Ascore software
def: "Ascore software." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1001985
name: Ascore
def: "A-score for PTM site location at the PSM-level." [DOI:10.1038/nbt1240, PMID:16964243]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001986
name: H-Score
def: "H-Score for peptide phosphorylation site location." [DOI:10.1021/pr1006813, PMID:20836569]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1001987
name: vacuum drying MALDI sample preparation
def: "Vacuum-drying MALDI sample preparation crystallization method." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001988
name: crushed crystal MALDI sample preparation
def: "Crushed-crystal MALDI sample preparation method." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001989
name: fast evaporation MALDI sample preparation
def: "Fast-evaporation MALDI sample preparation method." [DOI:10.1021/ac00091a044]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001990
name: overlayer MALDI sample preparation
def: "Overlayer method combining features of the crushed-crystal method and the fast-evaporation method." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001991
name: sandwich MALDI sample preparation
def: "Sandwich MALDI sample preparation method." [DOI:10.1002/(SICI)1096-9888(199706)32:6<593::AID-JMS511>3.3.CO;2-4]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001992
name: spin coating MALDI sample preparation
def: "Spin coating MALDI sample preparation method." [DOI:10.1021/cc0500710, PMID:16283807]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001993
name: quick and dirty MALDI sample preparation
def: "Quick & dirty (Q&D) sample preparation separating matrix handling from sample handling." [PSI:MS]
is_a: MS:1000833 ! matrix application type

[Term]
id: MS:1001994
name: top hat baseline reduction
def: "Top-hat morphological filter based on the basic morphological operations 'erosion' and 'dilatation'." [PSI:MS]
is_a: MS:1000593 ! baseline reduction

[Term]
id: MS:1001995
name: convex hull baseline reduction
def: "Constructs the baseline by fitting multiple parabolas to the spectrum starting with the large scale structures." [PSI:MS]
is_a: MS:1000593 ! baseline reduction

[Term]
id: MS:1001996
name: median baseline reduction
def: "The spectrum that will be baseline subtracted is divided into a number of segments." [PSI:MS]
is_a: MS:1000593 ! baseline reduction

[Term]
id: MS:1001997
name: wavelet transformation smoothing
def: "The random noise is removed by using the undecimated wavelet transform." [DOI:10.1093/bioinformatics/btl355, PMID:16820428]
is_a: MS:1000592 ! smoothing

[Term]
id: MS:1001998
name: sophisticated numerical annotation procedure
def: "It searches for known patterns in the measured spectrum." [DOI:10.1021/ac951158i, PMID:21619291]
synonym: "SNAP" EXACT []
is_a: MS:1000801 ! area peak picking

[Term]
id: MS:1001999
name: area normalization
def: "Normalization of areas below the curves." [PSI:MS]
is_a: MS:1001484 ! intensity normalization

[Term]
id: MS:1002000
name: LIFT
def: "A Bruker's proprietary technique where molecular ions are initially accelerated at lower energy, then collide with inert gas in a collision cell that is then 'lifted' to high potential. The use of inert gas is optional, as it could lift also fragments provided by LID." [DOI:10.1007/s00216-003-2057-0 , PMID:12830354]
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1002001
name: MS1 label-based raw feature quantitation
def: "MS1 label-based raw feature quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002018 ! MS1 label-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002002
name: MS1 label-based peptide level quantitation
def: "MS1 label-based peptide level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002018 ! MS1 label-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002003
name: MS1 label-based protein level quantitation
def: "MS1 label-based protein level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002018 ! MS1 label-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002004
name: MS1 label-based proteingroup level quantitation
def: "MS1 label-based proteingroup level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002018 ! MS1 label-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002005
name: iRT retention time normalization standard
def: "A de facto standard providing the retention times at which a specific set of 10 reference peptides exit the reference chromatographic column. The kit may be obtain from Biognosys." [DOI:10.1002/pmic.201100463, http://www.biognosys.ch/products/rt-kit.html]
is_a: MS:1000901 ! retention time normalization standard

[Term]
id: MS:1002006
name: SRM transition type
def: "The type of the transitions, e.g. target or decoy." [PSI:MS]
synonym: "MRM transition type" EXACT []
relationship: part_of MS:1000908 ! transition

[Term]
id: MS:1002007
name: target SRM transition
def: "A transition used to target a specific compound that may be in the sample." [PSI:MS]
synonym: "target MRM transition" EXACT []
is_a: MS:1002006 ! SRM transition type

[Term]
id: MS:1002008
name: decoy SRM transition
def: "A transition not expected to be present in the sample and used to calculate statistical confidence of target transition detections in some workflows." [PSI:MS]
synonym: "decoy MRM transition" EXACT []
is_a: MS:1002006 ! SRM transition type

[Term]
id: MS:1002009
name: isobaric label quantitation analysis
def: "Quantitation analysis using an isobaric labelling workflow." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1002010
name: TMT quantitation analysis
def: "Quantitation analysis using the Thermo Fisher amine-reactive tandem mass tag (TMT) labelling workflow, wherein 2-10 reporter ions are measured in MS2 spectra in the 126-131 m/z." [PSI:PI, PMID:12713048]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002011
name: desorption electrospray ionization
def: "Combination of electrospray and desorption ionization method that ionizes gases, liquids and solids in open air under atmospheric pressure." [DOI:10.1126/science.1104404, PMID:15486296]
synonym: "DESI" EXACT []
is_a: MS:1000240 ! atmospheric pressure ionization

[Term]
id: MS:1002012
name: Mascot:PTM site assignment confidence
def: "Relative probability that PTM site assignment is correct, derived from the Mascot score difference between matches to the same spectrum (Mascot Delta Score)." [http://www.matrixscience.com/help/pt_mods_help.html#SITE]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_units UO:0000187 ! percent
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002013
name: collision energy ramp start
def: "Collision energy at the start of the collision energy ramp." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000045 ! collision energy
relationship: has_units UO:0000266 ! electronvolt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002014
name: collision energy ramp end
def: "Collision energy at the end of the collision energy ramp." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000045 ! collision energy
relationship: has_units UO:0000266 ! electronvolt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002015
name: spectral count peptide level quantitation
def: "Spectral count peptide level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001836 ! spectral counting quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002016
name: spectral count protein level quantitation
def: "Spectral count protein level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001836 ! spectral counting quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002017
name: spectral count proteingroup level quantitation
def: "Spectral count proteingroup level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001836 ! spectral counting quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002018
name: MS1 label-based analysis
def: "MS1 label-based analysis." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1002019
name: label-free raw feature quantitation
def: "Label-free raw feature quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001834 ! LC-MS label-free quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002020
name: label-free peptide level quantitation
def: "Label-free peptide level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001834 ! LC-MS label-free quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002021
name: label-free protein level quantitation
def: "Label-free protein level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001834 ! LC-MS label-free quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002022
name: label-free proteingroup level quantitation
def: "Label-free proteingroup level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001834 ! LC-MS label-free quantitation analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002023
name: MS2 tag-based analysis
def: "MS2 tag-based analysis." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1002024
name: MS2 tag-based feature level quantitation
def: "MS2 tag-based feature level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002023 ! MS2 tag-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002025
name: MS2 tag-based peptide level quantitation
def: "MS2 tag-based peptide level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002023 ! MS2 tag-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002026
name: MS2 tag-based protein level quantitation
def: "MS2 tag-based protein level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002023 ! MS2 tag-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002027
name: MS2 tag-based proteingroup level quantitation
def: "MS2 tag-based proteingroup level quantitation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002023 ! MS2 tag-based analysis
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002028
name: nucleic acid base modification
def: "Nucleic acid base modification (substitution, insertion or deletion)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001471 ! peptide modification details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002029
name: original nucleic acid sequence
def: "Specification of the original nucleic acid sequence, prior to a modification. The value slot should hold the DNA or RNA sequence." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001471 ! peptide modification details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002030
name: modified nucleic acid sequence
def: "Specification of the modified nucleic acid sequence. The value slot should hold the DNA or RNA sequence." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001471 ! peptide modification details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002031
name: PASSEL transition group browser URI
def: "URI to retrieve transition group data for a PASSEL (PeptideAtlas SRM Experiment Library) experiment." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002032
name: PeptideAtlas dataset URI
def: "URI that allows access to a PeptideAtlas dataset." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002033
name: contact role
def: "Role of the contact person." [PSI:PI]
is_a: MS:1000585 ! contact attribute

[Term]
id: MS:1002034
name: first author
def: "The first of a set of authors associated with a publication or release. There may be more than one first author in cases where several authors share primary attribution." [PSI:MS]
is_a: MS:1002033 ! contact role

[Term]
id: MS:1002035
name: senior author
def: "The last of a set of authors associated with a publication or release. There may be more than one senior author in cases where several authors share senior attribution." [PSI:MS]
is_a: MS:1002033 ! contact role

[Term]
id: MS:1002036
name: co-author
def: "One of a set of authors associated with a publication or release." [PSI:MS]
is_a: MS:1002033 ! contact role

[Term]
id: MS:1002037
name: dataset submitter
def: "A person who submits a dataset to a repository." [PSI:MS]
is_a: MS:1002033 ! contact role

[Term]
id: MS:1002038
name: label free sample
def: "A sample that has not been labelled or modified. This is often referred to as \"light\" to distinguish from \"heavy\"." [PSI:PI]
synonym: "light sample" EXACT []
is_a: MS:1000548 ! sample attribute

[Term]
id: MS:1002039
name: inlet attribute
def: "Inlet properties that are associated with a value." [PSI:MS]
is_a: MS:1000547 ! object attribute
relationship: part_of MS:1000458 ! source

[Term]
id: MS:1002040
name: inlet temperature
def: "The temperature of the inlet of a mass spectrometer." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
is_a: MS:1002039 ! inlet attribute
relationship: has_units UO:0000012 ! kelvin
relationship: has_units UO:0000027 ! degree Celsius
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002041
name: source temperature
def: "The temperature of the source of a mass spectrometer." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000482 ! source attribute
relationship: has_units UO:0000012 ! kelvin
relationship: has_units UO:0000027 ! degree Celsius
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002042
name: modulation time
def: "The duration of a complete cycle of modulation in a comprehensive two-dimensional separation system, equals the length of a second dimension chromatogram, i.e., the time between two successive injections into the second column." [http://chromatographyonline.findanalytichem.com/lcgc/Column:+Coupling+Matters/Nomenclature-and-Conventions-in-Comprehensive-Mult/ArticleStandard/Article/detail/58429]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000857 ! run attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002043
name: ProteinProspector
def: "ProteinProspector software for data acquisition and analysis." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002044
name: ProteinProspector:score
def: "The ProteinProspector result 'Score'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002045
name: ProteinProspector:expectation value
def: "The ProteinProspector result 'Expectation value'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002046
name: native source path
def: "The original source path used for directory-based sources." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001458 ! spectrum generation information
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002047
name: MS-GF
def: "MS-GF software used to re-score the peptide-spectrum matches." [DOI:10.1074/mcp.M110.003731, PMID:20829449]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002048
name: MS-GF+
synonym: "MS-GFDB" EXACT []
def: "MS-GF+ software used to analyze the spectra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002049
name: MS-GF:RawScore
def: "MS-GF raw score." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002050
name: MS-GF:DeNovoScore
def: "MS-GF de novo score." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002051
name: MS-GF:Energy
def: "MS-GF energy score." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1002052
name: MS-GF:SpecEValue
def: "MS-GF spectral E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002353 ! PSM-level e-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002053
name: MS-GF:EValue
def: "MS-GF E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002353 ! PSM-level e-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002054
name: MS-GF:QValue
def: "MS-GF Q-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002354 ! PSM-level q-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002055
name: MS-GF:PepQValue
def: "MS-GF peptide-level Q-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002056
name: MS-GF:PEP
def: "MS-GF posterior error probability." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002057
name: modification specificity protein N-term
def: "As parameter for search engine: apply the modification only at the N-terminus of a protein." [PSI:PI]
is_a: MS:1001056 ! modification specificity rule

[Term]
id: MS:1002058
name: modification specificity protein C-term
def: "As parameter for search engine: apply the modification only at the C-terminus of a protein." [PSI:PI]
is_a: MS:1001056 ! modification specificity rule

[Term]
id: MS:1002059
name: Microsoft Excel
def: "Microsoft Excel (can be used for spectral counting)." [PSI:PI]
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1002060
name: database UniProtKB/TrEMBL
def: "The name of the UniProtKB/TrEMBL database." [PSI:PI]
is_a: MS:1002126 ! database UniProtKB

[Term]
id: MS:1002061
name: decoy DB from UniProtKB/TrEMBL
def: "OBSOLETE Decoy database from a TrEMBL protein sequence database." [PSI:PI]
comment: This term was made obsolete, because a combination of database name, DB composition , decoy DB type , decoy DB generation algorithm, decoy DB accession regexp and decoy DB details suffices.
is_obsolete: true

[Term]
id: MS:1002062
name: metabolic labelling: natural N (mainly 14N)
def: "Metabolic labelling: natural N (mainly 14N)." [PSI:PI]
is_a: MS:1001055 ! modification parameters

[Term]
id: MS:1002063
name: FindPairs
def: "Software e.g. for SILAC and 14N/15N workflow, part of the PeakQuant suite." [http://www.medizinisches-proteom-center.de/software]
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1002064
name: peptide consensus RT
def: "Peptide consensus retention time." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002065
name: peptide consensus m/z
def: "Peptide consensus mass/charge ratio." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002066
name: ratio calculation method
def: "Method used to calculate the ratio." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002067
name: protein value: median of peptide ratios
def: "Protein quantification value calculated as median of peptide ratios." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002068
name: metabolic labelling: heavy N (mainly 15N)
def: "Metabolic labelling: heavy N (mainly 15N)." [PSI:PI]
is_a: MS:1001055 ! modification parameters

[Term]
id: MS:1002069
name: metabolic labelling purity
def: "Metabolic labelling: Description of labelling purity. Usually the purity of feeding material (e.g. 95%), or the inclusion rate derived from isotopic peak pattern shape." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001055 ! modification parameters
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002070
name: t-test
def: "Perform a t-test (two groups). Specify in string value, whether paired / unpaired, variance equal / different, one- / two-sided version is performed." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001861 ! quantification data processing
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002071
name: ANOVA-test
def: "Perform an ANOVA-test (more than two groups). Specify in string value, which version is performed." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001861 ! quantification data processing
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002072
name: p-value
def: "P-value as result of one of the processing steps described. Specify in the description, which processing step it was." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002073
name: mzIdentML format
def: "The mzIdentML format for peptide and protein identification data from the PSI. File extension '.mzid'." [PSI:PI, http://www.psidev.info/mzidentml]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1002074
name: quantification file format
def: "File format containing quantification results." [PSI:PI]
is_a: MS:1001459 ! file format

[Term]
id: MS:1002075
name: mzQuantML format
def: "The mzQuantML format for quantification data from the PSI. File extension '.mzq'." [PSI:PI, http://www.psidev.info/mzquantml]
is_a: MS:1002074 ! quantification file format

[Term]
id: MS:1002076
name: PAnalyzer
def: "PAnalyzer software for getting protein evidence categories." [http://code.google.com/p/ehu-bio/wiki/PAnalyzer]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002077
name: impact
def: "Bruker Daltonics' impact: ESI Q-TOF, Nanospray, APCI, APPI, GC-APCI, CaptiveSpray." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1002078
name: ProteomeDiscoverer:1. Static Modification
def: "OBSOLETE ProteomeDiscoverer's 1st static post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Static Modification (MS:1001645) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002079
name: ProteomeDiscoverer:2. Static Modification
def: "OBSOLETE ProteomeDiscoverer's 2nd static post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Static Modification (MS:1001645) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002080
name: ProteomeDiscoverer:Spectrum Selector:Precursor Clipping Range Before
def: "Precursor clipping range before." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002081
name: ProteomeDiscoverer:Spectrum Selector:Precursor Clipping Range After
def: "Precursor clipping range after." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002082
name: first column elution time
def: "The time of elution from the first chromatographic column in the chromatographic separation step, relative to the start of chromatography on the first column." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002083
name: second column elution time
def: "The time of elution from the second chromatographic column in the chromatographic separation step, relative to the start of the chromatography on the second column." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000503 ! scan attribute
relationship: has_units UO:0000010 ! second
relationship: has_units UO:0000031 ! minute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002084
name: multidimensional chromatography modulation description
def: "Multidimensional chromatography modulation description." [PSI:MS]
is_a: MS:1000857 ! run attribute

[Term]
id: MS:1002085
name: two-dimensional gas chromatography with fixed modulation time
def: "Two-dimensional gas chromatography where a single modulation time is used throughout the acquisition." [PSI:MS]
is_a: MS:1002084 ! multidimensional chromatography modulation description

[Term]
id: MS:1002086
name: two-dimensional gas chromatography with discrete modulation time steps
def: "Two-dimensional gas chromatography where the acquisition is divided into steps, each with a different modulation time." [PSI:MS]
is_a: MS:1002084 ! multidimensional chromatography modulation description

[Term]
id: MS:1002087
name: two-dimensional liquid chromatography with fixed modulation time
def: "Two-dimensional liquid chromatography where a single modulation time is used throughout the acquisition." [PSI:MS]
is_a: MS:1002084 ! multidimensional chromatography modulation description

[Term]
id: MS:1002088
name: two-dimensional liquid chromatography with discrete modulation time steps
def: "Two-dimensional liquid chromatography where the acquisition is divided into steps, each with a different modulation time." [PSI:MS]
is_a: MS:1002084 ! multidimensional chromatography modulation description

[Term]
id: MS:1002089
name: ProteomeDiscoverer:Peptide Without Protein XCorr Threshold
def: "XCorr threshold for storing peptides that do not belong to a protein." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002090
name: Calculate Probability Scores
def: "Flag indicating that a probability score for the assessment that a reported peptide match is a random occurrence is calculated." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002094 ! common search engine input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002091
name: ProteomeDiscoverer:Maximum Delta Cn
def: "Delta Cn threshold for filtering out PSM's." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002092
name: Percolator:Validation based on
def: "Algorithm (e.g. q-value or PEP) used for calculation of the validation score using Percolator." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002107 ! Percolator input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002093
name: search engine input parameter
def: "Search engine input parameter." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1002094
name: common search engine input parameter
def: "Search engine input parameter that is shared by more than one search engine." [PSI:PI]
is_a: MS:1002093 ! search engine input parameter

[Term]
id: MS:1002095
name: Mascot input parameter
def: "Search engine input parameters specific to Mascot." [PSI:PI, source:http://www.matrixscience.com/help/search_field_help.html]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002096
name: SEQUEST input parameter
def: "Search engine input parameters specific to SEQUEST." [PSI:PI, source:http://fields.scripps.edu/sequest/parameters.html]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002097
name: Phenyx input parameter
def: "Search engine input parameters specific to Phenyx." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002098
name: ProteinExtractor input parameter
def: "Search engine input parameters specific to ProteinExtractor." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002099
name: OMSSA input parameter
def: "Search engine input parameters specific to OMSSA." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002100
name: ProteinScape input parameter
def: "Search engine input parameters specific to ProteinScape." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002101
name: ProteomeDiscoverer input parameter
def: "Search engine input parameters specific to ProteomeDiscoverer." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002103
name: software input parameter
def: "Software input parameters." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1002104
name: common software input parameter
def: "Software input parameter that is shared by more than one software." [PSI:PI]
is_a: MS:1002103 ! software input parameter

[Term]
id: MS:1002105
name: software specific input parameter
def: "Software specific input parameter." [PSI:PI]
is_a: MS:1002103 ! software input parameter

[Term]
id: MS:1002106
name: Scaffold input parameter
def: "Search engine input parameters specific to Scaffold." [PSI:PI]
is_a: MS:1002105 ! software specific input parameter

[Term]
id: MS:1002107
name: Percolator input parameter
def: "Search engine input parameters specific to Percolator." [PSI:PI]
is_a: MS:1002105 ! software specific input parameter

[Term]
id: MS:1002108
name: higher score better
def: "Indicates that a higher score is better." [PSI:PI]
relationship: part_of MS:1001153 ! search engine specific score

[Term]
id: MS:1002109
name: lower score better
def: "Indicates that a lower score is better." [PSI:PI]
relationship: part_of MS:1001153 ! search engine specific score

[Term]
id: MS:1002110
name: assay attribute
def: "Attribute describing an assay." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002111
name: assay label attribute
def: "Attribute describing an assay label." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002112
name: protein group list attribute
def: "Attribute describing a protein group list." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002113
name: protein group attribute
def: "Attribute describing a protein group." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002114
name: protein list attribute
def: "Attribute describing a protein list." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002115
name: peptide consensus list attribute
def: "Attribute describing a peptide consensus list." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002116
name: peptide consensus attribute
def: "Attribute describing a peptide consensus." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002117
name: small molecule list attribute
def: "Attribute describing a small molecule list." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002118
name: small molecule attribute
def: "Attribute describing a small molecule." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002119
name: small molecule modification attribute
def: "Attribute describing a small molecule modification." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002120
name: experiment name
def: "The name for identifying an experiment." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002121
name: spectral count feature
def: "Dummy decribing a spectral count feature." [PSI:PI]
is_a: MS:1001828 ! feature attribute

[Term]
id: MS:1002122
name: counts reporting
def: "FeatureList of spectral counts." [PSI:PI]
is_a: MS:1001825 ! feature list attribute

[Term]
id: MS:1002123
name: x-Tracker
def: "X-Tracker generic tool for quantitative proteomics." [https://bessantlab.org/software/x-tracker/]
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1002124
name: ProteoSuite
def: "ProteoSuite software for the analysis of quantitative proteomics data." [DOI:10.1089/omi.2012.0022, PMID:22804616, http://www.proteosuite.org/]
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1002125
name: combined FDRScore
def: "OBSOLETE FDRScore values specifically obtained for distinct combinations of single, pairs or triplets of search engines making a given PSM, used for integrating results from these distinct pools." [PMID:19253293]
comment: This term was made obsolete because it was split into the more specific terms for PSM-level combined FDRScore (MS:1002356), distinct peptide-level combined FDRScore (MS:1002361), protein-level combined FDRScore (MS:1002366) and protein group-level combined FDRScore (MS:1002375).
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
is_obsolete: true
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002126
name: database UniProtKB
def: "The name of the UniProtKB knowledgebase." [PSI:PI]
is_a: MS:1001013 ! database name

[Term]
id: MS:1002127
name: identification file attribute
def: "Attribute describing an identification file." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002128
name: method file format
def: "Attribute describing a method file format." [PSI:PI]
is_a: MS:1001459 ! file format

[Term]
id: MS:1002129
name: ITRAQAnalyzer
def: "Software for iTRAQ workflow. Extracts and normalizes iTRAQ information from an MS experiment." [http://www-bs2.informatik.uni-tuebingen.de/services/OpenMS/OpenMS-release/html/TOPP__ITRAQAnalyzer.html]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002130
name: identification file format
def: "Attribute describing an identification file format." [PSI:PI]
is_a: MS:1001459 ! file format

[Term]
id: MS:1002131
name: TOPP noise filter
def: "Noise filter component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002132
name: TOPP NoiseFilterGaussian
def: "Removes noise from profile spectra by using a gaussian smoothing." [PSI:PI]
is_a: MS:1002131 ! TOPP noise filter

[Term]
id: MS:1002133
name: TOPP NoiseFilterSGolay
def: "Removes noise from profile spectra by using a Savitzky-Golay smoothing." [PSI:PI]
is_a: MS:1002131 ! TOPP noise filter

[Term]
id: MS:1002134
name: TOPP peak picker
def: "Peak picker component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002135
name: TOPP PeakPickerHiRes
def: "Finds mass spectrometric peaks in high-resoluted profile mass spectra." [PSI:PI]
is_a: MS:1002134 ! TOPP peak picker

[Term]
id: MS:1002136
name: TOPP PeakPickerWavelet
def: "Finds mass spectrometric peaks with a wavelet algorithm in low-resoluted profile mass spectra." [PSI:PI]
is_a: MS:1002134 ! TOPP peak picker

[Term]
id: MS:1002137
name: TOPP spectra filter
def: "Spectra filter component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002138
name: TOPP SpectraFilterBernNorm
def: "Applies a Bern et al normalization to peak spectra." [PMID:15262780, DOI:10.1093/bioinformatics/bth947]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002139
name: TOPP SpectraFilterMarkerMower
def: "Applies a filter to peak spectra for marked peaks." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002140
name: TOPP SpectraFilterNLargest
def: "Retains the n largest peaks of a peak spectra." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002141
name: TOPP SpectraFilterNormalizer
def: "Applies a TIC/maximal intensity normalization to peak spectra." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002142
name: TOPP SpectraFilterParentPeakMower
def: "Filters putative unfragmented precursor ions from tandem spectra." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002143
name: TOPP SpectraFilterScaler
def: "Applies a filter to peak spectra after intensity scaling according to rank." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002144
name: TOPP SpectraFilterSqrtMower
def: "Applies a filter to peak spectra after intensity scaling to the square root." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002145
name: TOPP SpectraFilterThresholdMower
def: "Applies a filter of peaks below a given threshold to peak spectra." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002146
name: TOPP SpectraFilterWindowMower
def: "Applies a filter of the largest peaks in a sliding window over a peak spectrum." [PSI:PI]
is_a: MS:1002137 ! TOPP spectra filter

[Term]
id: MS:1002147
name: TOPP map aligner
def: "Map aligner component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002148
name: TOPP MapAlignerIdentification
def: "Corrects retention time distortions between maps based on common peptide identifications." [PSI:PI]
is_a: MS:1002147 ! TOPP map aligner

[Term]
id: MS:1002149
name: TOPP MapAlignerPoseClustering
def: "Corrects retention time distortions between maps using a pose clustering approach." [PSI:PI]
is_a: MS:1002147 ! TOPP map aligner

[Term]
id: MS:1002150
name: TOPP MapAlignerSpectrum
def: "Corrects retention time distortions between maps by spectrum alignment." [PSI:PI]
is_a: MS:1002147 ! TOPP map aligner

[Term]
id: MS:1002151
name: numerator data type attribute
def: "Attribute describing the data type of the numerator of a ratio." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002152
name: denominator data type attribute
def: "Attribute describing the data type of the denominator of a ratio." [PSI:PI]
is_a: MS:1001806 ! quantification object attribute

[Term]
id: MS:1002153
name: protein level PSM counts
def: "The number of spectra identified for this protein in spectral counting." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002738 ! protein-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002154
name: TOPP DTAExtractor
def: "Extracts spectra of an MS run file to several files in DTA format." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002155
name: TOPP IDMerger
def: "Merges several protein/peptide identification files into one file." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002156
name: TOPP IDFileConverter
def: "Converts identification engine file formats." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002157
name: TOPP SpectraMerger
def: "Merges spectra from an LC/MS map, either by precursor or by RT blocks." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002158
name: TOPP MzTabExporter
def: "Exports various XML formats to an mzTab file." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002159
name: TOPP MassTraceExtractor
def: "Annotates mass traces in centroided LC/MS maps." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002160
name: TOPP PrecursorMassCorrector
def: "Correct the precursor entries of tandem MS scans." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002161
name: TOPP HighResPrecursorMassCorrector
def: "Performs precursor mz correction on centroided high resolution data." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002162
name: TOPP AdditiveSeries
def: "Computes an additive series to quantify a peptide in a set of samples." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002163
name: TOPP Decharger
def: "Decharges and merges different feature charge variants of the same chemical entity." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002164
name: TOPP EICExtractor
def: "Quantifies signals at given positions in (raw or picked) LC/MS maps." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002165
name: TOPP feature finder
def: "Feature finder component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002166
name: TOPP FeatureFinderCentroided
def: "Detects two-dimensional features in centroided LC-MS data." [PSI:PI]
is_a: MS:1002165 ! TOPP feature finder

[Term]
id: MS:1002167
name: TOPP FeatureFinderRaw
def: "Detects two-dimensional features in uncentroided LC-MS data." [PSI:PI]
is_a: MS:1002165 ! TOPP feature finder

[Term]
id: MS:1002168
name: TOPP FeatureFinderIsotopeWavelet
def: "Detects two-dimensional features in uncentroided LC-MS data with a wavelet algorithm." [PSI:PI]
is_a: MS:1002165 ! TOPP feature finder

[Term]
id: MS:1002169
name: TOPP FeatureFinderMetabo
def: "Detects two-dimensional features in centroided LC-MS data of metabolites." [PSI:PI]
is_a: MS:1002165 ! TOPP feature finder

[Term]
id: MS:1002170
name: TOPP FeatureFinderMRM
def: "Quantifies features LC-MS/MS MRM data." [PSI:PI]
is_a: MS:1002165 ! TOPP feature finder

[Term]
id: MS:1002171
name: TOPP ProteinQuantifier
def: "Computes protein abundances from annotated feature/consensus maps." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002172
name: TOPP ConsensusMapNormalizer
def: "Normalizes maps of one consensus XML file (after linking)." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002173
name: TOPP MapRTTransformer
def: "Applies retention time transformations to maps." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002174
name: TOPP feature linker
def: "Feature linker component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002175
name: TOPP FeatureLinkerLabeled
def: "Groups corresponding isotope-labeled features in a feature map." [PSI:PI]
is_a: MS:1002174 ! TOPP feature linker

[Term]
id: MS:1002176
name: TOPP FeatureLinkerUnlabeled
def: "Groups corresponding features from multiple maps." [PSI:PI]
is_a: MS:1002174 ! TOPP feature linker

[Term]
id: MS:1002177
name: TOPP FeatureLinkerUnlabeledQT
def: "Groups corresponding features from multiple maps using a quality threshold clustering approach." [PSI:PI]
is_a: MS:1002174 ! TOPP feature linker

[Term]
id: MS:1002178
name: TOPP CompNovo
def: "Performs a peptide/protein identification with the CompNovo engine." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002179
name: TOPP CompNovoCID
def: "Performs a peptide/protein identification with the CompNovo engine in collision-induced dissociation (CID) mode." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002180
name: TOPP software adaptor
def: "Software adaptor to an external program in the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002181
name: TOPP InspectAdapter
def: "Identifies MS2 spectra using the external program Inspect." [PSI:PI]
is_a: MS:1002180 ! TOPP software adaptor

[Term]
id: MS:1002182
name: TOPP MascotAdapter
def: "Identifies MS2 spectra using the external program Mascot." [PSI:PI]
is_a: MS:1002180 ! TOPP software adaptor

[Term]
id: MS:1002183
name: TOPP MascotAdapterOnline
def: "Identifies MS2 spectra using the online version of the external program Mascot." [PSI:PI]
is_a: MS:1002180 ! TOPP software adaptor

[Term]
id: MS:1002184
name: TOPP OMSSAAdapter
def: "Identifies MS2 spectra using the external program OMSSA." [PSI:PI]
is_a: MS:1002180 ! TOPP software adaptor

[Term]
id: MS:1002185
name: TOPP PepNovoAdapter
def: "Identifies MS2 spectra using the external program PepNovo." [PSI:PI]
is_a: MS:1002180 ! TOPP software adaptor

[Term]
id: MS:1002186
name: TOPP XTandemAdapter
def: "Identifies MS2 spectra using the external program XTandem." [PSI:PI]
is_a: MS:1002180 ! TOPP software adaptor

[Term]
id: MS:1002187
name: TOPP SpecLibSearcher
def: "Identifies peptide MS2 spectra by spectral matching with a searchable spectral library." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002188
name: TOPP ConsensusID
def: "Computes a consensus identification from peptide identifications of several identification engines." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002189
name: TOPP IDConflictResolver
def: "Resolves ambiguous annotations of features with peptide identifications." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002190
name: TOPP IDFilter
def: "Filters results from protein or peptide identification engines based on different criteria." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002191
name: TOPP IDMapper
def: "Assigns protein/peptide identifications to feature or consensus features." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002192
name: TOPP IDPosteriorErrorProbability
def: "Estimates posterior error probabilities using a mixture model." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002193
name: TOPP IDRTCalibration
def: "Calibrate Retention times of peptide hits to standards." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002194
name: TOPP PeptideIndexer
def: "Refreshes the protein references for all peptide hits." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002195
name: TOPP PrecursorIonSelector
def: "A tool for precursor ion selection based on identification results." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002196
name: TOPP MRMMapper
def: "MRMMapper maps measured chromatograms (mzML) and the transitions used (TraML)." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002197
name: TOPP OpenSwath component
def: "OpenSwath component of the TOPP software." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002198
name: TOPP OpenSwathAnalyzer
def: "Picks peaks and finds features in an SRM experiment." [PSI:PI]
is_a: MS:1002197 ! TOPP OpenSwath component

[Term]
id: MS:1002199
name: TOPP OpenSwathChromatogramExtractor
def: "Extract chromatograms (XIC) from a MS2 map file." [PSI:PI]
is_a: MS:1002197 ! TOPP OpenSwath component

[Term]
id: MS:1002200
name: TOPP OpenSwathDecoyGenerator
def: "Generates decoys according to different models for a specific TraML." [PSI:PI]
is_a: MS:1002197 ! TOPP OpenSwath component

[Term]
id: MS:1002201
name: TOPP OpenSwathFeatureXMLToTSV
def: "Converts a featureXML to a mProphet tsv (tab separated values)." [PSI:PI]
is_a: MS:1002197 ! TOPP OpenSwath component

[Term]
id: MS:1002202
name: TOPP OpenSwathRTNormalizer
def: "Generates a transformation file for retention time space into normalized space." [PSI:PI]
is_a: MS:1002197 ! TOPP OpenSwath component

[Term]
id: MS:1002203
name: TOPP ProteinInference
def: "Infer proteins from a list of (high-confidence) peptides." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002204
name: TOPP FalseDiscoveryRate
def: "Estimates the false discovery rate on peptide and protein level using decoy searches." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002205
name: ProteoWizard msconvert
def: "Converts, filters, and processes mass spectrometry data in variety of formats." [PSI:MS]
is_a: MS:1000615 ! ProteoWizard software

[Term]
id: MS:1002206
name: ProteoWizard idconvert
def: "Converts, filters, and processes identifications from shotgun proteomics experiments." [PSI:MS]
is_a: MS:1000615 ! ProteoWizard software

[Term]
id: MS:1002207
name: ProteoWizard chainsaw
def: "Filters and processes protein sequence databases." [PSI:MS]
is_a: MS:1000615 ! ProteoWizard software

[Term]
id: MS:1002208
name: ProteoWizard msaccess
def: "Filters, processes, and displays mass spectrometry data in a variety of ways." [PSI:MS]
is_a: MS:1000615 ! ProteoWizard software

[Term]
id: MS:1002209
name: ProteoWizard SeeMS
def: "An interactive GUI application to view and filter mass spectrometry data in a variety of formats." [PSI:MS]
is_a: MS:1000615 ! ProteoWizard software

[Term]
id: MS:1002210
name: IsobariQ
def: "A quantitative software package designed for analysis of IPTL, TMT and iTRAQ data." [PMID:21067241, DOI:10.1021/pr1009977, http://folk.uio.no/magnusar/isobariq]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002211
name: Variance stabilizing normalization
def: "The model incorporates data calibration (normalization), a model for the dependence of the variance on the mean intensity, and a variance stabilizing data transformation." [PMID:16646781]
is_a: MS:1001861 ! quantification data processing

[Term]
id: MS:1002212
name: IPTL quantitation analysis
def: "Quantification analysis using a labelling strategy where both peptide termini are labelled so that the peptides from different labelling schema are isobaric." [PSI:PI, PMID:19655813]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002213
name: PAnalyzer:conclusive protein
def: "A protein identified by at least one unique (distinct, discrete) peptide (peptides are considered different only if they can be distinguished by evidence in mass spectrum)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001600 ! protein inference confidence category
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002214
name: PAnalyzer:indistinguishable protein
def: "A member of a group of proteins sharing all peptides that are exclusive to the group (peptides are considered different only if they can be distinguished by evidence in mass spectrum)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001600 ! protein inference confidence category
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002215
name: PAnalyzer:non-conclusive protein
def: "A protein sharing all its matched peptides with either conclusive or indistinguishable proteins (peptides are considered different only if they can be distinguished by evidence in mass spectrum)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001600 ! protein inference confidence category
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002216
name: PAnalyzer:ambiguous group member
def: "A protein sharing at least one peptide not matched to either conclusive or indistinguishable proteins (peptides are considered different only if they can be distinguished by evidence in mass spectrum)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001600 ! protein inference confidence category
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002217
name: decoy peptide
def: "A putative identified peptide issued from a decoy sequence database." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002218
name: percent collision energy ramp start
def: "Collision energy at the start of the collision energy ramp in percent, normalized to the mass of the ion." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000138 ! normalized collision energy
relationship: has_units UO:0000187 ! percent
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002219
name: percent collision energy ramp end
def: "Collision energy at the end of the collision energy ramp in percent, normalized to the mass of the ion." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000138 ! normalized collision energy
relationship: has_units UO:0000187 ! percent
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002220
name: MRMaid
def: "A web-based SRM assay design tool whose transitions are generated by mining the millions of identified peptide spectra held in the EBI's PRIDE database." [PSI:PI]
is_a: MS:1000871 ! SRM software

[Term]
id: MS:1002221
name: MRMaid:peptide score
def: "Score in MRMaid to indicate the expected performance of the peptide in SRM." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute
is_a: MS:1002363 ! search engine specific score for proteins

[Term]
id: MS:1002222
name: SRM transition attribute
def: "Attribute associated with a SRM transition." [PSI:MS]
is_a: MS:1000455 ! ion selection attribute
relationship: part_of MS:1000908 ! transition

[Term]
id: MS:1002223
name: precursor ion detection probability
def: "Probability of detecting precursor when parent protein is present." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002222 ! SRM transition attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002224
name: product ion detection probability
def: "Probability of detecting product ion when precursor ion is present." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002222 ! SRM transition attribute
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002225
name: average product ion intensity
def: "Average value of product ion intensity in a collection of identified spectra." [PSI:PI]
is_a: MS:1001226 ! product ion intensity
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100

[Term]
id: MS:1002226
name: product ion intensity standard deviation
def: "Standard deviation of product ion intensity in a collection of identified spectra." [PSI:PI]
is_a: MS:1001226 ! product ion intensity
relationship: has_units MS:1000131 ! number of detector counts
relationship: has_units MS:1000132 ! percent of base peak
relationship: has_units MS:1000814 ! counts per second
relationship: has_units MS:1000905 ! percent of base peak times 100

[Term]
id: MS:1002227
name: number of product ion observations
def: "The number of times the specific product ion has been observed in a series of SRM experiments." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002222 ! SRM transition attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002228
name: number of precursor ion observations
def: "The number of times the specific precursor ion has been observed in a series of SRM experiments." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002222 ! SRM transition attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002229
name: ProteomeDiscoverer:Mascot:Significance Middle
def: "Calculated relaxed significance when performing a decoy search for high-confidence peptides." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002230
name: ProteomeDiscoverer:Mascot:Significance High
def: "Calculated relaxed significance when performing a decoy search for medium-confidence peptides." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002231
name: regular expressions for a GUID
def: "([A-Fa-f0-9]\{8\}-([A-Fa-f0-9]\{4\}-)\{3\}[A-Fa-f0-9]\{12\})." [PSI:PI]
is_a: MS:1002479 ! regular expression

[Term]
id: MS:1002232
name: ProteomeDiscoverer:Default FDR calculator
def: "The default FDR calculator as globally unique identifier (GUID)." [PSI:PI]
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_regexp MS:1002231 ! regular expressions for a GUID

[Term]
id: MS:1002233
name: ProteomeDiscoverer:SEQUEST:Low resolution spectra contained
def: "Flag indicating if low-resolution spectra are taken into consideration." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002234
name: selected precursor m/z
def: "Mass-to-charge ratio of a precursor ion selected for fragmentation." [PSI:PI]
synonym: "selected ion m/z" RELATED []
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002235
name: ProteoGrouper:PDH score
def: "A score assigned to a single protein accession (modelled as ProteinDetectionHypothesis in mzIdentML), based on summed peptide level scores." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002236
name: ProteoGrouper:PAG score
def: "A score assigned to a protein group (modelled as ProteinAmbiguityGroup in mzIdentML), based on all summed peptide level scores that have been assigned to the group as unique or razor peptides." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002237
name: mzidLib
def: "A library of Java routines for manipulating mzIdentML files." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002238
name: mzidLib:Omssa2Mzid
def: "A converter for OMSSA OMX to mzIdentML." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002239
name: mzidLib:Tandem2Mzid
def: "A converter for Tandem XML to mzIdentML." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002240
name: mzidLib:Csv2Mzid
def: "A converter for CSV files (following OMSSA CSV style) to mzIdentML." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002241
name: mzidLib:ProteoGrouper
def: "A generic and parameterizable protein inference algorithm for mzIdentML files." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002242
name: mzidLib:Thresholder
def: "A routine for keeping only identifications passing a given threshold or setting passThreshold to true or false for SpectrumIdentificationItem or ProteinDetectionHypothesis in mzIdentML files." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002243
name: mzidLib:Perform emPAI on mzid
def: "A routine for adding emPAI quantitative values to an mzIdentML file." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002244
name: mzidLib:FalseDiscoveryRate
def: "A routine for calculating local FDR, q-value and FDRScore for mzIdentML files, based on a decoy search." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002245
name: mzidLib:Mzidentml2Csv
def: "A tool for converting mzIdentML files to CSV format." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002246
name: mzidLib:CombineSearchEngines
def: "A tool for combining results analysed in parallel in two or three search engines into a single mzIdentML file." [PMID:19253293]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002247
name: mzidLib:InsertMetaDataFromFasta
def: "A tool for adding additional meta data from a FASTA file to DBSequence entries (sequence and description) in mzIdentML files." [PSI:PI]
is_a: MS:1002237 ! mzidLib

[Term]
id: MS:1002248
name: SEQUEST:spscore
def: "The SEQUEST result 'SpScore'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002249
name: SEQUEST:sprank
def: "The SEQUEST result 'SpRank'." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002250
name: SEQUEST:deltacnstar
def: "The SEQUEST result 'DeltaCnStar'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002251
name: Comet
def: "Comet open-source sequence search engine developed at the University of Washington." [PMID:23148064]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002252
name: Comet:xcorr
def: "The Comet result 'XCorr'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002253
name: Comet:deltacn
def: "The Comet result 'DeltaCn'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002254
name: Comet:deltacnstar
def: "The Comet result 'DeltaCnStar'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002255
name: Comet:spscore
def: "The Comet result 'SpScore'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002256
name: Comet:sprank
def: "The Comet result 'SpRank'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002257
name: Comet:expectation value
def: "The Comet result 'Expectation value'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001153 ! search engine specific score
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002258
name: Comet:matched ions
def: "The Comet result 'Matched Ions'." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002259
name: Comet:total ions
def: "The Comet result 'Total Ions'." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002260
name: PSM:FDR threshold
def: "False-discovery rate threshold for peptide-spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002483 ! PSM-level statistical threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002261
name: Byonic
def: "Byonic search engine from Protein Metrics." [PMID:23255153]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002262
name: Byonic:Score
def: "The Byonic score is the primary indicator of PSM correctness. The Byonic score reflects the absolute quality of the peptide-spectrum match, not the relative quality compared to other candidate peptides. Byonic scores range from 0 to about 1000, with 300 a good score, 400 a very good score, and PSMs with scores over 500 almost sure to be correct." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002263
name: Byonic:Delta Score
def: "The drop in Byonic score from the top-scoring peptide to the next peptide with distinct sequence. In this computation, the same peptide with different modifications is not considered distinct." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002264
name: Byonic:DeltaMod Score
def: "The drop in Byonic score from the top-scoring peptide to the next peptide different in any way, including placement of modifications. DeltaMod gives an indication of whether modifications are confidently localized; DeltaMod over 10.0 means that there is high likelihood that all modification placements are correct." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002265
name: Byonic:PEP
def: "Byonic posterior error probability." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002266
name: Byonic:Peptide LogProb
def: "The log p-value of the PSM. This is the log of the probability that the PSM with such a score and delta would arise by chance in a search of this size (the size of the protein database, as expanded by the modification rules). A log p-value of -3.0 should happen by chance on only one of a thousand spectra. Caveat: it is very hard to compute a p-value that works for all searches and all spectra, so read Byonic p-values with a certain amount of skepticism." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002267
name: Byonic:Protein LogProb
def: "The log p-value of the protein." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002268
name: Byonic:Best LogProb
def: "Best (most negative) log p-value of an individual PSM." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002269
name: Byonic:Best Score
def: "Best (largest) Byonic score of a PSM." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002270
name: chromatography separation
def: "A technique by which molecules are separated by chemical and physical properties such as hydrophobicity or vapour pressure." [PSI:MS]
is_a: MS:1000857 ! run attribute

[Term]
id: MS:1002271
name: liquid chromatography separation
def: "Liquid chromatography (LC) is a separation technique in which the mobile phase is a liquid." [PSI:MS]
is_a: MS:1002270 ! chromatography separation

[Term]
id: MS:1002272
name: gas chromatography separation
def: "Gas chromatography (GC) is a separation technique in which the mobile phase is a gas." [PSI:MS]
is_a: MS:1002270 ! chromatography separation

[Term]
id: MS:1002273
name: detector potential
def: "Detector potential difference in volts." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000481 ! detector attribute
relationship: has_units UO:0000218 ! volt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002274
name: SQ Detector 2
def: "Waters quadrupole based SQ Detector 2." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002275
name: Xevo G2-S Tof
def: "Waters oa-ToF based Xevo G2-S Tof." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002276
name: Xevo G2-S QTof
def: "Waters oa-ToF based Xevo G2-S QTof." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002277
name: AutoSpec Premier
def: "Waters AutoSpec Premier magnetic sector instrument." [PSI:MS]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002278
name: Pegasus III
def: "LECO nominal mass resolution time-of-flight GC mass spectrometer." [PSI:MS]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1002279
name: maXis 4G
def: "Bruker Daltonics' maXis 4G: ESI Q-TOF, Nanospray, APCI, APPI, GC-APCI, CaptiveSpray." [PSI:MS]
is_a: MS:1001547 ! Bruker Daltonics maXis series

[Term]
id: MS:1002280
name: compact
def: "Bruker Daltonics' compact: ESI Q-TOF, Nanospray, APCI, APPI, GC-APCI, CaptiveSpray." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1002281
name: SRM feature level quantitation
def: "Selected Reaction Monitoring feature level quantitation." [PSI:PI]
is_a: MS:1001838 ! SRM quantitation analysis

[Term]
id: MS:1002282
name: SRM peptide level quantitation
def: "Selected Reaction Monitoring peptide level quantitation." [PSI:PI]
is_a: MS:1001838 ! SRM quantitation analysis

[Term]
id: MS:1002283
name: SRM protein level quantitation
def: "Selected Reaction Monitoring protein level quantitation." [PSI:PI]
is_a: MS:1001838 ! SRM quantitation analysis

[Term]
id: MS:1002284
name: SRM proteingroup level quantitation
def: "Selected Reaction Monitoring proteingroup level quantitation." [PSI:PI]
is_a: MS:1001838 ! SRM quantitation analysis

[Term]
id: MS:1002285
name: Trans-Proteomic Pipeline
def: "A suite of open source tools for the processing of MS2 proteomics data developed by the Seattle Proteome Center at the Institute for Systems Biology." [PSI:PI]
synonym: "TPP" EXACT []
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002286
name: Trans-Proteomic Pipeline software
def: "A software program that is a component of the Trans-Proteomic Pipeline." [PSI:PI]
is_a: MS:1001456 ! analysis software
relationship: part_of MS:1002285 ! Trans-Proteomic Pipeline

[Term]
id: MS:1002287
name: PeptideProphet
def: "A program in the TPP that calculates PSM probabilities for MS2 proteomics data searched with any of the supported sequence or spectral library search engines via the pepXML format." [PMID:12403597, PMID:23176103]
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002288
name: iProphet
def: "A program in the TPP that calculates distinct peptide probabilities based on several lines of corroborating evidence including search results from multiple search engines via the pepXML format." [PMID:21876204]
synonym: "InterProphet" EXACT []
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002289
name: ProteinProphet
def: "A program in the TPP that calculates protein-level probabilities based on input PSM or peptide-level probabilities from PeptideProphet or iProphet. The output is written in the protXML format." [PMID:14632076]
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002290
name: XPRESS
def: "A program in the TPP that calculates PSM-level abundances based on 2-channel isotope-labelled data such as ICAT, SILAC, etc." [PSI:PI]
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002291
name: Libra
def: "A program in the TPP that calculates PSM, peptide, and protein-level abundances based on N-channel isobaric label peptide data such as iTRAQ, TMT, etc." [PSI:PI]
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002292
name: PTMProphet
def: "A program in the TPP that calculates PTM localization probabilities by re-analyzing the peaks that are available to distinguish between possible modification sites." [PSI:PI]
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002293
name: Bruker Daltonics SCION series
def: "Bruker Daltonics' SCION series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1002294
name: Bruker Daltonics EVOQ series
def: "Bruker Daltonics' EVOQ series." [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1002295
name: SCION SQ
def: "Bruker Daltonics' SCION SQ: GC-single quadrupole." [PSI:MS]
is_a: MS:1002293 ! Bruker Daltonics SCION series

[Term]
id: MS:1002296
name: SCION TQ
def: "Bruker Daltonics' SCION TQ: GC-triple quadrupole." [PSI:MS]
is_a: MS:1002293 ! Bruker Daltonics SCION series

[Term]
id: MS:1002297
name: EVOQ Elite
def: "Bruker Daltonics' EVOQ Elite: LC-triple quadrupole." [PSI:MS]
is_a: MS:1002294 ! Bruker Daltonics EVOQ series

[Term]
id: MS:1002298
name: EVOQ Qube
def: "Bruker Daltonics' EVOQ Qube: LC-triple quadrupole." [PSI:MS]
is_a: MS:1002294 ! Bruker Daltonics EVOQ series

[Term]
id: MS:1002299
name: micrOTOF-Q III
def: "Bruker Daltonics' micrOTOF-Q III: ESI Q-TOF, Nanospray, APCI, APPI, GC-APCI, CaptiveSpray." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1002300
name: amaZon Speed ETD
def: "Bruker Daltonics' amaZon Speed ETD: ESI quadrupole ion trap, Nanospray, APCI, APPI, ETD, PTR, GC-APCI, CaptiveSpray." [PSI:MS]
is_a: MS:1001545 ! Bruker Daltonics amaZon series

[Term]
id: MS:1002301
name: amaZon Speed
def: "Bruker Daltonics' amaZon ETD: ESI quadrupole ion trap, Nanospray, APCI, APPI, GC-APCI, CaptiveSpray." [PSI:MS]
is_a: MS:1001545 ! Bruker Daltonics amaZon series

[Term]
id: MS:1002302
name: Bruker Container format
def: "Bruker Container raw file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002303
name: Bruker Container nativeID format
def: "Native identifier (UUID)." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000767 ! native spectrum identifier format
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002304
name: domain range
def: "Domain range of a numerical value." [PSI:PI]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1002305
name: value between 0 and 1 inclusive
def: "Value range for probabilities." [PSI:PI]
is_a: MS:1002304 ! domain range

[Term]
id: MS:1002306
name: value greater than zero
def: "Positive value range." [PSI:PI]
is_a: MS:1002304 ! domain range

[Term]
id: MS:1002307
name: fragmentation ion type
def: "Type of fragment ion based on where the backbone breaks, such as a y ion or a c ion." [PSI:PI]
is_a: MS:1001221 ! product ion attribute

[Term]
id: MS:1002308
name: fluorescence detector
def: "A detector using a fluorescent signal after excitation with light." [PSI:MS]
is_a: MS:1000026 ! detector type

[Term]
id: MS:1002309
name: Byonic: Peptide AbsLogProb
def: "The absolute value of the log-base10 of the Byonic posterior error probability (PEP) of the PSM." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002310
name: Byonic: Protein AbsLogProb
def: "The absolute value of the log-base10 of the Byonic posterior error probability (PEP) of the protein." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002311
name: Byonic: Peptide AbsLogProb2D
def: "The absolute value of the log-base10 Byonic two-dimensional posterior error probability (PEP) of the PSM. The two-dimensional PEP takes into account protein ranking information as well as PSM information." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002312
name: MS-Numpress linear prediction compression
def: "Compression using MS-Numpress linear prediction compression." [https://github.com/ms-numpress/ms-numpress]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1002313
name: MS-Numpress positive integer compression
def: "Compression using MS-Numpress positive integer compression." [https://github.com/ms-numpress/ms-numpress]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1002314
name: MS-Numpress short logged float compression
def: "Compression using MS-Numpress short logged float compression." [https://github.com/ms-numpress/ms-numpress]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1002315
name: consensus result
def: "Indicates a consensus result from several search engine runs." [PSI:PI]
is_a: MS:1001405 ! spectrum identification result details

[Term]
id: MS:1002316
name: ProteomeDiscoverer:Amanda:high confidence threshold
def: "Strict confidence probability score." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002317
name: ProteomeDiscoverer:Amanda:middle confidence threshold
def: "Relaxed confidence probability score." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002318
name: ProteomeDiscoverer:automatic workload
def: "Flag indicating automatic estimation of the workload level." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002319
name: Amanda:AmandaScore
def: "The Amanda score of the scoring function for a PSM." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002320
name: ProteomeDiscoverer:max differential modifications
def: "Maximum dynamic modifications per PSM." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002321
name: ProteomeDiscoverer:max equal modifications
def: "Maximum equal modifications per PSM." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002322
name: ProteomeDiscoverer:min peptide length
def: "Minimum peptide length." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002323
name: ProteomeDiscoverer:max peptide length
def: "Maximum peptide length." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002324
name: ProteomeDiscoverer:max number neutral loss
def: "Maximum number of same neutral losses." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002325
name: ProteomeDiscoverer:max number neutral loss modifications
def: "Max number of same neutral losses of modifications." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002326
name: ProteomeDiscoverer:use flanking ions
def: "Flag for usage of flanking ions." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002327
name: ProteomeDiscoverer:max number of same modifs
def: "The maximum number of possible equal modifications per PSM." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002328
name: ProteomeDiscoverer:perform deisotoping
def: "Defines whether a simple deisotoping shall be performed." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002329
name: ProteomeDiscoverer:ion settings
def: "Specifies the fragment ions and neutral losses that are calculated." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002330
name: ProteomeDiscoverer:3. Static Modification
def: "OBSOLETE ProteomeDiscoverer's 3rd static post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Static Modification (MS:1001645) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002331
name: ProteomeDiscoverer:5. Dynamic Modification
def: "OBSOLETE ProteomeDiscoverer's 5th dynamic post-translational modification (PTM) input parameter." [PSI:PI]
comment: This term was made obsolete because it's recommended to use ProteomeDiscoverer:Dynamic Modification (MS:1001644) instead.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002332
name: lab head
def: "The scientist responsible for personnel, grants, and instrumentation in a functional laboratory group." [PSI:PI]
is_a: MS:1002033 ! contact role

[Term]
id: MS:1002333
name: conversion software
def: "Computer software primarily designed to convert data represented in one format to another format, sometimes with minor data alterations in the process." [PSI:PI]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002334
name: ProCon
def: "Java software designed to convert one of several proteomics identification results formats into mzIdentML or PRIDE XML." [PSI:PI, http://www.medizinisches-proteom-center.de/procon]
is_a: MS:1002333 ! conversion software

[Term]
id: MS:1002335
name: PRIDE Converter2
def: "Java software designed to convert one of several proteomics identification results formats into PRIDE XML." [PMID:22949509]
is_a: MS:1002333 ! conversion software

[Term]
id: MS:1002336
name: Amanda
def: "Amanda scoring system for PSM identification." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002337
name: Andromeda
def: "Andromeda is a peptide search engine." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002338
name: Andromeda:score
def: "The probability based score of the Andromeda search engine." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002339
name: site:global FDR
def: "Estimation of global false discovery rate of peptides with a post-translational modification." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002340
name: ProteomeXchange project tag
def: "Tag that can be added to a ProteomeXchange dataset, to enable the grouping of datasets. One tag can be used for indicating that a given dataset is part of a bigger project, like e.g. the Human Proteome Project." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002341
name: second-pass peptide identification
def: "A putative identified peptide found in a second-pass search of protein sequences selected from a first-pass search." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002342
name: MZmine
def: "A framework for differential analysis of mass spectrometry data." [PMID:16403790, PMID:20650010]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002343
name: ion stability type
def: "OBSOLETE Stability type of the ion." [PSI:PI]
comment: This child of the former purgatory term ion was made obsolete.
is_obsolete: true

[Term]
id: MS:1002344
name: Maltcms
def: "Modular Application Toolkit for Chromatography Mass-Spectrometry is an application framework mainly for developers." [PSI:PI, http://maltcms.sf.net]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002345
name: PSM-level attribute
def: "Attribute of a single peptide-spectrum match." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002346
name: protein group-level identification attribute
def: "Protein group level information." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002347
name: PSM-level identification statistic
def: "Identification confidence metric for a peptide spectrum match." [PSI:PI]
is_a: MS:1002345 ! PSM-level attribute

[Term]
id: MS:1002348
name: protein group-level identification statistic
def: "Identification confidence metric for a protein group." [PSI:PI]
is_a: MS:1002346 ! protein group-level identification attribute

[Term]
id: MS:1002349
name: value greater than zero but less than or equal to one
def: "Positive value range less than or equal to 1." [PSI:PI]
is_a: MS:1002304 ! domain range

[Term]
id: MS:1002350
name: PSM-level global FDR
def: "Estimation of the global false discovery rate of peptide spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002701 ! PSM-level result list statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002351
name: PSM-level local FDR
def: "Estimation of the local false discovery rate of peptide spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002347 ! PSM-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002352
name: PSM-level p-value
def: "Estimation of the p-value for peptide spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002347 ! PSM-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002353
name: PSM-level e-value
def: "Estimation of the e-value for peptide spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002347 ! PSM-level identification statistic
relationship: has_domain MS:1002306 ! value greater than zero
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002354
name: PSM-level q-value
def: "Estimation of the q-value for peptide spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002347 ! PSM-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002355
name: PSM-level FDRScore
def: "mzidLibrary FDRScore for peptide spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to 1
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002356
name: PSM-level combined FDRScore
def: "mzidLibrary Combined FDRScore for peptide spectrum matches specifically obtained for distinct combinations of single, pairs or triplets of search engines making a given PSM, used for integrating results from these distinct pools." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to 1
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002357
name: PSM-level probability
def: "Probability that the reported peptide ion is truly responsible for some or all of the components of the specified mass spectrum." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002347 ! PSM-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002358
name: search engine specific peptide sequence-level identification statistic
def: "Search engine specific distinct peptide score." [PSI:PI]
is_a: MS:1001092 ! peptide sequence-level identification statistic

[Term]
id: MS:1002359
name: peptide sequence-level local FDR
def: "Estimation of the local false discovery rate for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002360
name: distinct peptide-level FDRScore
def: "MzidLibrary FDRScore for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to one
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002361
name: distinct peptide-level combined FDRScore
def: "Combined FDRScore for peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry) specifically obtained for distinct combinations of single, pairs or triplets of search engines making a given peptide, used for integrating results from these distinct pools." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to one
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002362
name: peptide sequence-level probability
def: "Probability that the reported distinct peptide sequence (irrespective of mass modifications) has been correctly identified via the referenced PSMs." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001092 ! peptide sequence-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002363
name: search engine specific score for proteins
def: "Search engine specific protein scores." [PSI:PI]
is_a: MS:1001116 ! single protein identification statistic

[Term]
id: MS:1002364
name: protein-level local FDR
def: "Estimation of the local false discovery rate of proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002365
name: FDRScore for proteins
def: "MzidLibrary FDRScore for proteins specifically obtained for distinct combinations of single, pairs or triplets of search engines making a given PSM, used for integrating results from these distinct pools." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to one
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002366
name: combined FDRScore for proteins
def: "MzidLibrary Combined FDRScore for proteins." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to one
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002367
name: probability for proteins
def: "Probability that a specific protein sequence has been correctly identified from the PSM and distinct peptide evidence, and based on the available protein sequences presented to the analysis software." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002368
name: search engine specific score for protein groups
def: "Search engine specific protein group scores." [PSI:PI]
is_a: MS:1002348 ! protein group-level identification statistic

[Term]
id: MS:1002369
name: protein group-level global FDR
def: "Estimation of the global false discovery rate of protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002706 ! protein group-level result list statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002370
name: protein group-level local FDR
def: "Estimation of the local false discovery rate of protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002348 ! protein group-level identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002371
name: protein group-level p-value
def: "Estimation of the p-value for protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002348 ! protein group-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002372
name: protein group-level e-value
def: "Estimation of the e-value for protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002348 ! protein group-level identification statistic
relationship: has_domain MS:1002306 ! value greater than zero
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002373
name: protein group-level q-value
def: "Estimation of the q-value for protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002348 ! protein group-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002374
name: protein group-level FDRScore
def: "mzidLibrary FDRScore for protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to one
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002375
name: protein group-level combined FDRScore
def: "mzidLibrary Combined FDRScore for proteins specifically obtained for distinct combinations of single, pairs or triplets of search engines making a given PSM, used for integrating results from these distinct pools." [PMID:19253293]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_domain MS:1002349 ! value greater than zero but less than or equal to one
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002376
name: protein group-level probability
def: "Probability that at least one of the members of a group of protein sequences has been correctly identified from the PSM and distinct peptide evidence, and based on the available protein sequences presented to the analysis software." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002348 ! protein group-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002377
name: ProteomeDiscoverer:Relaxed Score Threshold
def: "Specifies the threshold value for relaxed scoring." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002378
name: ProteomeDiscoverer:Strict Score Threshold
def: "Specifies the threshold value for strict scoring." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002379
name: ProteomeDiscoverer:Peptide Without Protein Cut Off Score
def: "Cut off score for storing peptides that do not belong to a protein." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002380
name: false localization rate
def: "Estimation of the false localization rate for modification site assignment." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002381
name: MALDI Solutions LC-MALDI
def: "Software for automated LC-MALDI analysis and reporting." [PSI:PI]
is_a: MS:1001455 ! acquisition software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software
is_a: MS:1001557 ! Shimadzu Corporation software

[Term]
id: MS:1002382
name: Shimadzu MALDI-7090
def: "Shimadzu MALDI-7090: MALDI-TOF-TOF." [PSI:PI]
is_a: MS:1000602 ! Shimadzu MALDI-TOF instrument model

[Term]
id: MS:1002383
name: SCiLS software
def: "SCiLS software for data acquisition and analysis." [PSI:MS]
is_a: MS:1000531 ! software

[Term]
id: MS:1002384
name: SCiLS Lab
def: "SCiLS Lab software." [PSI:MS]
is_a: MS:1002383 ! SCiLS software
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002385
name: SCiLS Lab format
def: "SCiLS Lab file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002386
name: preprocessing software
def: "Preprocessing software." [PSI:PI]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002387
name: PIA
def: "PIA - Protein Inference Algorithms, a toolbox for protein inference and identification analysis." [PSI:PI, http://www.medizinisches-proteom-center.de/pia]
is_a: MS:1002414 ! postprocessing software
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002388
name: PIA XML format
def: "A compilation of search engine results in the PIA XML format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1002389
name: PIA workflow parameter
def: "A parameter set for a single PIA analysis." [PSI:PI]
is_a: MS:1002105 ! software specific input parameter
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002390
name: PIA:FDRScore calculated
def: "Indicates whether the FDR score was calculated for the input file." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002391
name: PIA:Combined FDRScore calculated
def: "Indicates whether the combined FDR score was calculated for the PIA compilation." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002392
name: PIA:PSM sets created
def: "Indicates whether PSM sets were created." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002393
name: PIA:used top identifications for FDR
def: "The number of top identifications per spectrum used for the FDR calculation, 0 means all." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1002394
name: PIA:protein score
def: "The score given to a protein by any protein inference." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002395
name: PIA:protein inference
def: "The used algorithm for the protein inference using PIA." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002396
name: PIA:protein inference filter
def: "A filter used by PIA for the protein inference." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002397
name: PIA:protein inference scoring
def: "The used scoring method for the protein inference using PIA." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002398
name: PIA:protein inference used score
def: "The used base score for the protein inference using PIA." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002399
name: PIA:protein inference used PSMs
def: "The method to determine the PSMs used for scoring by the protein inference." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002400
name: PIA:filter
def: "A filter used for the report generation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002389 ! PIA workflow parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002401
name: leading protein
def: "At least one protein within each group should be annotated as a leading protein to indicate it has the strongest evidence, or approximately equal evidence as other group members." [PSI:PI]
is_a: MS:1001101 ! protein group or subset relationship

[Term]
id: MS:1002402
name: non-leading protein
def: "Zero to many proteins within each group should be annotated as non-leading to indicate that other proteins have stronger evidence." [PSI:PI]
is_a: MS:1001101 ! protein group or subset relationship

[Term]
id: MS:1002403
name: group representative
def: "An arbitrary and optional flag applied to exactly one protein per group to indicate it can serve as the representative of the group, amongst leading proteins, in effect serving as a tiebreaker for approaches that require exactly one group representative." [PSI:PI]
is_a: MS:1001101 ! protein group or subset relationship

[Term]
id: MS:1002404
name: count of identified proteins
def: "The number of proteins that have been identified, which must match the number of groups that pass the threshold in the file." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002704 ! protein-level result list attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002405
name: protein group-level result list attribute
def: "Details describing a protein cluster." [PSI:PI]
is_a: MS:1002699 ! result list attribute

[Term]
id: MS:1002406
name: count of identified clusters
def: "The number of protein clusters that have been identified, which must match the number of clusters that pass the threshold in the file." [DOI:10.1002/pmic.201400080, PMID:25092112]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002405 ! protein group-level result list attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002407
name: cluster identifier
def: "An identifier applied to protein groups to indicate that they are linked by shared peptides." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002698 ! protein cluster identification attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002408
name: number of distinct protein sequences
def: "The number of protein clusters that have been identified, which must match the number of clusters that pass the threshold in the file." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002405 ! protein group-level result list attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002409
name: marginally distinguished protein
def: "Assigned to a non-leading protein that has some independent evidence to support its presence relative to the leading protein(s), e.g. the protein may have a unique peptide but not sufficient to be promoted as a leading protein of another group." [PSI:PI]
is_a: MS:1001101 ! protein group or subset relationship

[Term]
id: MS:1002410
name: Anubis
def: "Anubis software for selected reaction monitoring data." [PSI:PI, http://quantitativeproteomics.org/anubis]
is_a: MS:1000871 ! SRM software
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1002411
name: TraML format
def: "The TraML format for transitions in SRM from the PSI. File extension '.TraML'." [PSI:PI,  http://www.psidev.info/traml]
is_a: MS:1002128 ! method file format

[Term]
id: MS:1002412
name: total XIC area
def: "Summed area of all the extracted ion chromatogram for the peptide (e.g. of all the transitions in SRM)." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002413
name: product background
def: "The background area for the quantified transition." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002414
name: postprocessing software
def: "Postprocessing software." [PSI:PI]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002415
name: protein group passes threshold
def: "A Boolean attribute to determine whether the protein group has passed the threshold indicated in the file." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002346 ! protein group-level identification attribute
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002416
name: Orbitrap Fusion
def: "Thermo Scientific Orbitrap Fusion." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002417
name: Orbitrap Fusion ETD
def: "Thermo Scientific Orbitrap Fusion with ETD." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002418
name: TSQ Quantiva
def: "Thermo Scientific TSQ Quantiva MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002419
name: TSQ Endura
def: "Thermo Scientific TSQ Endura MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002420
name: PASSEL experiment URI
def: "URI that allows access to a PASSEL experiment." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002421
name: Paragon input parameter
def: "Search engine input parameters specific to Paragon." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002422
name: Paragon: sample type
def: "The Paragon method setting indicating the type of sample at the high level, generally meaning the type of quantitation labelling or lack thereof. 'Identification' is indicated for samples without any labels for quantitation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002423
name: Paragon: cysteine alkylation
def: "The Paragon method setting indicating the actual cysteine alkylation agent; 'None' is indicated if there was no cysteine alkylation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002424
name: Paragon: instrument setting
def: "The Paragon method setting (translating to a large number of lower level settings) indicating the instrument used or a category of instrument." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002425
name: Paragon: search effort
def: "The Paragon method setting that controls the two major modes of search effort of the Paragon algorithm: the Rapid mode uses a conventional database search, while the Thorough mode uses a hybrid search, starting with the same approach as the Rapid mode but then follows it with a separate tag-based approach enabling a more extensive search." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002426
name: Paragon: ID focus
def: "A Paragon method setting that allows the inclusion of large sets of features such as biological modification or substitutions." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002427
name: Paragon: FDR analysis
def: "The Paragon method setting that controls whether FDR analysis is conducted." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002428
name: Paragon: quantitation
def: "The Paragon method setting that controls whether quantitation analysis is conducted." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002429
name: Paragon: background correction
def: "The Paragon method setting that controls whether the 'Background Correction' analysis is conducted; this processing estimates a correction to the attenuation in extremity ratios that can occur in isobaric quantatitation workflows on complex samples." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002430
name: Paragon: bias correction
def: "The Paragon method setting that controls whether 'Bias Correction' is invoked in quantitation analysis; this correction is a normalization to set the central tendency of protein ratios to unity." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002431
name: Paragon: channel to use as denominator in ratios
def: "The Paragon method setting that controls which label channel is used as the denominator in calculating relative expression ratios." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002432
name: search engine specific input metadata
def: "Search engine specific metadata that are not user-controlled settings." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1002433
name: Paragon: modified data dictionary or parameter translation
def: "This metric detects if any changes have been made to the originally installed key control files for the software; if no changes have been made, then the software version and settings are sufficient to enable exact reproduction; if changes have been made, then the modified ParameterTranslation- and ProteinPilot DataDictionary-XML files much also be provided in order to exactly reproduce a result." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002432 ! search engine specific input metadata
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002434
name: number of spectra searched
def: "Number of spectra in a search." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001249 ! search input details
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002435
name: data processing start time
def: "The time that a data processing action was started." [PSI:MS]
xref: value-type:xsd\:dateTime "The allowed value-type for this CV term."
is_a: MS:1000630 ! data processing parameter
relationship: has_value_type xsd\:dateTime ! The allowed value-type for this CV term

[Term]
id: MS:1002436
name: Paragon: digestion
def: "The Paragon method setting indicating the actual digestion agent - unlike other search tools, this setting does not include options that control partial specificity like 'semitrypsin'; if trypsin is used, trypsin is set, and partially conforming peptides are found in the Thorough mode of search; 'None' should be indicated only if there was really no digestion done." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001249 ! search input details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002437
name: number of decoy sequences
def: "The number of decoy sequences, if the concatenated target-decoy approach is used." [PSI:PI]
xref: value-type:xsd\:positiveInteger "The allowed value-type for this CV term."
is_a: MS:1001011 ! search database details
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1002438
name: spectrum identification list result details
def: "Information about the list of PSMs (SpectrumIdentificationList)." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1002439
name: final PSM list
def: "A flag on a list of PSMs (SpectrumIdentificationList) to indicate that this is the final set of identifications to be interpreted by consuming software. Amongst the set of SpectrumIdentificationList(s) that are flagged with the term, each spectrum must not be referenced from more than one SpectrumIdentificationResult." [PSI:PI]
is_a: MS:1002438 ! spectrum identification list result details

[Term]
id: MS:1002440
name: intermediate PSM list
def: "A flag on a list of PSMs (SpectrumIdentificationList) to indicate that this is not the final set of identifications to be interpreted by consuming software. This term should be used when results are provided from multiple search engines for the results from each search engine before they are combined to give consensus identifications. Amongst the set of SpectrumIdentificationList(s) that are flagged with the term, each spectrum may be referenced from more than one SpectrumIdentificationResult." [PSI:PI]
is_a: MS:1002438 ! spectrum identification list result details

[Term]
id: MS:1002441
name: Andi-MS format
def: "AIA Analytical Data Interchange file format for mass spectrometry data." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002442
name: chromatograph file format
def: "The format of the chromatography file being used. This could be a instrument or vendor specific proprietary file format or a converted open file format." [PSI:PI]
is_a: MS:1001459 ! file format

[Term]
id: MS:1002443
name: Andi-CHROM format
def: "AIA Analytical Data Interchange file format for chromatography data." [PSI:PI]
is_a: MS:1002442 ! chromatograph file format

[Term]
id: MS:1002444
name: 6420 Triple Quadrupole LC/MS
def: "The 6420 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002445
name: 6460 Triple Quadrupole LC/MS
def: "The 6460 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer. It is similar to the 6420 but adds Agilent Jet Stream (AJS) technology to increase sensitivity." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002446
name: 6490 Triple Quadrupole LC/MS
def: "The 6490 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer. It is similar to the 6420 but adds the Agilent iFunnel technology to increase sensitivity." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002447
name: Paragon:special factor
def: "The Paragon method setting indicating a list of one or more 'special factors', which generally capture secondary effects (relative to other settings) as a set of probabilities of modification features that override the assumed levels. For example the 'gel-based ID' special factor causes an increase probability of oxidation on several resides because of the air exposure impact on a gel, in addition to other effects." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002421 ! Paragon input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002448
name: PEAKS:inChorusPeptideScore
def: "The PEAKS inChorus peptide score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002449
name: PEAKS:inChorusProteinScore
def: "The PEAKS inChorus protein score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002450
name: param: b ion-H3PO4 DEPRECATED
def: "Ion b-H3PO4: b ion with lost phosphoric acid." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1002451
name: param: y ion-H3PO4 DEPRECATED
def: "Ion y-H3PO4: y ion with lost phosphoric acid." [PSI:PI]
is_a: MS:1001066 ! ions series considered in search

[Term]
id: MS:1002452
name: Maui
def: "The Maltcms Graphical User Interface." [PSI:PI, http://maltcms.sf.net]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002453
name: No fixed modifications searched
def: "No fixed modifications are included as a parameter for the search, and therefore they are not reported." [PSI:PI]
is_a: MS:1002094 ! common search engine input parameter

[Term]
id: MS:1002454
name: No variable modifications searched
def: "No variable modifications are included as a parameter for the search, and therefore they are not reported." [PSI:PI]
is_a: MS:1002094 ! common search engine input parameter

[Term]
id: MS:1002455
name: H2O neutral loss
def: "OBSOLETE Neutral loss of water." [PSI:PI]
comment: This term was obsoleted because it should be replaced by MS:1000336 with value H2O.
is_a: MS:1000336 ! neutral loss
is_a: MS:1002473 ! ion series considered in search
is_obsolete: true

[Term]
id: MS:1002456
name: NH3 neutral loss
def: "OBSOLETE Neutral loss of ammonia." [PSI:PI]
comment: This term was obsoleted because it should be replaced by MS:1000336 with value NH3.
is_a: MS:1000336 ! neutral loss
is_a: MS:1002473 ! ion series considered in search
is_obsolete: true

[Term]
id: MS:1002457
name: H3PO4 neutral loss
def: "OBSOLETE Neutral loss of phosphoric acid." [PSI:PI]
comment: This term was obsoleted because it should be replaced by MS:1000336 with value H3PO4.
is_a: MS:1000336 ! neutral loss
is_a: MS:1002473 ! ion series considered in search
is_obsolete: true

[Term]
id: MS:1002458
name: PeptideShaker
def: "PeptideShaker is a software for the interpretation of proteomics identification results." [PSI:PI, http://peptide-shaker.googlecode.com]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002459
name: MS Amanda csv format
def: "MS Amanda csv output format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1002460
name: protein group-level global FNR
def: "Estimation of the global false negative rate of protein groups." [PSI:PI]
is_a: MS:1002706 ! protein group-level result list statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive

[Term]
id: MS:1002461
name: protein group-level confidence
def: "Estimation of the global confidence of protein groups." [PSI:PI]
is_a: MS:1002348 ! protein group-level identification statistic

[Term]
id: MS:1002462
name: peptide sequence-level global FNR
def: "Estimation of the global false negative rate for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
is_a: MS:1002703 ! peptide sequence-level result list statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive

[Term]
id: MS:1002463
name: peptide sequence-level global confidence
def: "Estimation of the global confidence for distinct peptides once redundant identifications of the same peptide have been removed (id est multiple PSMs have been collapsed to one entry)." [PSI:PI]
is_a: MS:1002703 ! peptide sequence-level result list statistic

[Term]
id: MS:1002464
name: PSM-level global FNR
def: "Estimation of the global false negative rate of peptide spectrum matches." [PSI:PI]
is_a: MS:1002701 ! PSM-level result list statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive

[Term]
id: MS:1002465
name: PSM-level global confidence
def: "Estimation of the global confidence of peptide spectrum matches." [PSI:PI]
is_a: MS:1002701 ! PSM-level result list statistic

[Term]
id: MS:1002466
name: PeptideShaker PSM score
def: "The probability based PeptideShaker PSM score." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002467
name: PeptideShaker PSM confidence
def: "The probability based PeptideShaker PSM confidence." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002468
name: PeptideShaker peptide score
def: "The probability based PeptideShaker peptide score." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002469
name: PeptideShaker peptide confidence
def: "The probability based PeptideShaker peptide confidence." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002470
name: PeptideShaker protein group score
def: "The probability based PeptideShaker protein group score." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002471
name: PeptideShaker protein group confidence
def: "The probability based PeptideShaker protein group confidence." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002472
name: trap-type collision-induced dissociation
def: "A collision-induced dissociation process that occurs in a trap-type collision cell." [PSI:PI]
is_a: MS:1000133 ! collision-induced dissociation

[Term]
id: MS:1002473
name: ion series considered in search
def: "The description of the ion fragment series (including charges and neutral losses) that are considered by the search engine." [PSI:PI]
is_a: MS:1001249 ! search input details

[Term]
id: MS:1002474
name: ProteoAnnotator:non-canonical gene model score
def: "The sum of peptide-level scores for peptides mapped only to non-canonical gene models within the group." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002475
name: ProteoAnnotator:count alternative peptides
def: "The count of the number of peptide sequences mapped to non-canonical gene models only within the group." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002476
name: ion mobility drift time
def: "Drift time of an ion or spectrum of ions as measured in an ion mobility mass spectrometer. This time might refer to the central value of a bin into which all ions within a narrow range of drift time have been aggregated." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
is_a: MS:1002892 ! ion mobility attribute
relationship: has_units UO:0000028 ! millisecond
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002477
name: mean ion mobility drift time array
def: "Array of population mean ion mobility values from a drift time device, reported in seconds (or milliseconds), corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units UO:0000028 ! millisecond
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002478
name: mean charge array
def: "Array of mean charge values where the mean charge is calculated as a weighted mean of the charges of individual peaks that are aggregated into a processed spectrum." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1002479
name: regular expression
def: "Regular expression." [PSI:PI]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1002480
name: regular expression for a digital object identifier (DOI)
def: "(10[.][0-9]\{4,\}(?:[.][0-9]+)*/(?:(?![\"&\'<>])[^ \t\\r\n\\v\\f])+)." [PSI:PI, http://dx.doi.org/]
is_a: MS:1002479 ! regular expression

[Term]
id: MS:1002481
name: higher energy beam-type collision-induced dissociation
def: "A collision-induced dissociation process wherein the projectile ion has the translational energy higher than approximately 1000 eV." [PSI:MS]
is_a: MS:1000422 ! beam-type collision-induced dissociation

[Term]
id: MS:1002482
name: statistical threshold
def: "Estimated statistical threshold." [PSI:MS]
is_a: MS:1001060 ! quality estimation method details

[Term]
id: MS:1002483
name: PSM-level statistical threshold
def: "Estimated statistical threshold at PSM-level." [PSI:MS]
is_a: MS:1002573 ! spectrum identification statistical threshold

[Term]
id: MS:1002484
name: peptide-level statistical threshold
def: "Estimated statistical threshold at peptide-level." [PSI:MS]
is_a: MS:1002573 ! spectrum identification statistical threshold

[Term]
id: MS:1002485
name: protein-level statistical threshold
def: "Estimated statistical threshold at protein-level." [PSI:MS]
is_a: MS:1002572 ! protein detection statistical threshold

[Term]
id: MS:1002486
name: protein group-level statistical threshold
def: "Estimated statistical threshold at protein group-level." [PSI:PI]
is_a: MS:1002572 ! protein detection statistical threshold

[Term]
id: MS:1002487
name: MassIVE dataset identifier
def: "Dataset identifier issued by the MassIVE repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002488
name: MassIVE dataset URI
def: "URI that allows the access to one dataset in the MassIVE repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002489
name: special processing
def: "Details describing a special processing." [PSI:PI]
is_a: MS:1001080 ! search type
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1002490
name: peptide-level scoring
def: "Peptide-level scoring performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002491
name: modification localization scoring
def: "Modification localization scoring performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002492
name: consensus scoring
def: "Consensus multiple search engine approach performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002493
name: sample pre-fractionation
def: "Sample pre-fractionation performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002494
name: cross-linking search
def: "Cross-linking search performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002495
name: no special processing
def: "No special processing performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002496
name: group PSMs by sequence
def: "Group PSMs by distinct peptide sequence ignoring modifications." [PSI:PI]
is_a: MS:1002658 ! identification parameter

[Term]
id: MS:1002497
name: group PSMs by sequence with modifications
def: "Group PSMs by distinct peptide sequence with taking modifications into account." [PSI:PI]
is_a: MS:1002658 ! identification parameter

[Term]
id: MS:1002498
name: group PSMs by sequence with modifications and charge
def: "Group PSMs by distinct peptide sequence with taking modifications and charge into account." [PSI:PI]
is_a: MS:1002658 ! identification parameter

[Term]
id: MS:1002499
name: peptide level score
def: "OBSOLETE Peptide level score." [PSI:PI]
comment: This term was obsoleted because it was never intended to go in the CV.
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
is_obsolete: true

[Term]
id: MS:1002500
name: peptide passes threshold
def: "A Boolean attribute to determine whether the peptide has passed the threshold indicated in the file." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002501
name: no PSM threshold
def: "Indicating that no PSM threshold was used." [PSI:PI]
is_a: MS:1002701 ! PSM-level result list statistic

[Term]
id: MS:1002502
name: no peptide-level threshold
def: "Indicating that no peptide-level threshold was used." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1002503
name: PSM is used for peptide-level scoring
def: "Flags a PSM that it is used for peptide-level scoring." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1002504
name: modification index
def: "The order of modifications to be referenced elsewhere in the document." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1001055 ! modification parameters
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002505
name: regular expression for modification localization scoring
def: "([:digit:]+:[0|1]\{1\}.[:digit:]+[Ee]{0,1}[+-]{0,1}[:digit:]*:[:digit:]+[|]\{1\}[:digit:]+:(true|false)\{1\})." [PSI:PI]
is_a: MS:1002479 ! regular expression

[Term]
id: MS:1002506
name: modification position score
def: "Modification position score." [PSI:PI]
is_a: MS:1001055 ! modification parameters

[Term]
id: MS:1002507
name: modification rescoring:false localization rate
def: "Mod position score: false localization rate." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002506 ! modification position score
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002508
name: cross-linking attribute
def: "Cross-linking attribute." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002509
name: cross-link donor
def: "The Cross-linking donor, assigned according to the following rules: the export software SHOULD use the following rules to choose the cross-link donor as the: longer peptide, then higher peptide neutral mass, then alphabetical order." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002508 ! cross-linking attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002510
name: cross-link acceptor
def: "Cross-linking acceptor, assigned according to the following rules: the export software SHOULD use the following rules to choose the cross-link donor as the: longer peptide, then higher peptide neutral mass, then alphabetical order." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002508 ! cross-linking attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002511
name: cross-link spectrum identification item
def: "Cross-linked spectrum identification item." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002508 ! cross-linking attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002512
name: cross-linking score
def: "Cross-linking scoring value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002513
name: molecules per cell
def: "The absolute abundance of protein in a cell." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002514
name: absolute quantitation analysis
def: "Absolute quantitation analysis." [PSI:PI]
is_a: MS:1001833 ! quantitation analysis summary

[Term]
id: MS:1002515
name: internal peptide reference used
def: "States whether an internal peptide reference is used or not in absolute quantitation analysis." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001832 ! quantitation software comment or customizations
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002516
name: internal protein reference used
def: "States whether an internal protein reference is used or not in absolute quantitation analysis." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1001832 ! quantitation software comment or customizations
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002517
name: internal reference abundance
def: "The absolute abundance of the spiked in reference peptide or protein used for absolute quantitation analysis." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002518
name: Progenesis:protein group normalised abundance
def: "The data type normalised abundance for protein groups produced by Progenesis LC-MS." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002739 ! protein group-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002519
name: Progenesis:protein group raw abundance
def: "The data type raw abundance for protein groups produced by Progenesis LC-MS." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002739 ! protein group-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002520
name: peptide group ID
def: "Peptide group identifier for peptide-level stats." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001105 ! peptide sequence-level identification attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002521
name: mass spectrometry imaging
def: "A technique in which mass spectra are acquired in a spatially resolved manner. This is typically achieved by scanning a laser or primary ion beam over a sample and acquiring a mass spectrum at each position." [PSI:PI]
is_a: MS:1000857 ! run attribute

[Term]
id: MS:1002522
name: ProteomeDiscoverer:1. Static Terminal Modification
def: "Determine 1st static terminal post-translational modifications (PTMs)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002523
name: Q Exactive HF
def: "Thermo Scientific Q Exactive." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002524
name: PepFinder
def: "Thermo Scientific PepFinder BioPharma analysis software." [PSI:PI]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002525
name: TSQ 8000 Evo
def: "Thermo Scientific TSQ 8000 Evo MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002526
name: Exactive Plus
def: "Thermo Scientific Exactive Plus MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002527
name: instrument specific scan attribute
def: "Instrument specific scan properties that are associated with a value." [PSI:PI]
is_a: MS:1000503 ! scan attribute

[Term]
id: MS:1002528
name: synchronous prefilter selection
def: "Synchronous prefilter selection." [PSI:PI]
synonym: "SPS" EXACT []
is_a: MS:1002527 ! instrument specific scan attribute

[Term]
id: MS:1002529
name: resolution array
def: "A data array of resolution values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1002530
name: baseline array
def: "A data array of signal baseline values (the signal in the absence of analytes)." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1002531
name: UIMF format
def: "SQLite-based file format created at Pacific Northwest National Lab. It stores an intermediate analysis of ion-mobility mass spectrometry data." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002532
name: UIMF nativeID format
def: "Native format defined by frame=xsd:nonNegativeInteger scan=xsd:nonNegativeInteger frameType=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1002533
name: TripleTOF 6600
def: "SCIEX TripleTOF 6600, a quadrupole - quadrupole - time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002534
name: ProLuCID:xcorr
def: "The ProLuCID result 'XCorr'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002535
name: ProLuCID:deltacn
def: "The ProLuCID result 'DeltaCn'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002536
name: D-Score
def: "D-Score for PTM site location at the PSM-level." [PMID:23307401]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002537
name: MD-Score
def: "MD-Score for PTM site location at the PSM-level." [PMID:21057138]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002538
name: PTM localization confidence metric
def: "Localization confidence metric for a post translational modification (PTM)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002539
name: PeptideShaker PTM confidence type
def: "PeptideShaker quality criteria for the confidence of PTM localizations." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002538 ! PTM localization confidence metric
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002540
name: PeptideShaker PSM confidence type
def: "PeptideShaker quality criteria for the confidence of PSM's." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002347 ! PSM-level identification statistic
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002541
name: PeptideShaker peptide confidence type
def: "PeptideShaker quality criteria for the confidence of peptide identifications." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002542
name: PeptideShaker protein confidence type
def: "PeptideShaker quality criteria for the confidence of protein identifications." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001116 ! single protein identification statistic
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002543
name: xiFDR
def: "Target/Decoy based FDR estimation for cross-linking peptide-identifications." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002544
name: xi
def: "Search engine for cross-linked peptides." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002545
name: xi:score
def: "The xi result 'Score'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002546
name: Skyline mzQuantML converter
def: "A software package to convert Skyline report to mzQuantML." [PSI:PI, http://code.google.com/p/srm-mzquantml-convertor/]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002547
name: normalized spectral abundance factor
def: "A normalized spectral abundance factor (NSAF)." [DOI:10.1021/pr060161n, PMID:16944946]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002548
name: distributed normalized spectral abundance factor
def: "A distributed normalized spectral abundance factor (dNSAF)." [DOI:10.1021/ac9023999, PMID:20166708]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002549
name: PTM localization distinct peptide-level statistic
def: "Statistic to convey the confidence of the localization of an amino acid modification on a peptide sequence." [PSI:PI]
is_a: MS:1002689 ! PTM localization single result statistic

[Term]
id: MS:1002550
name: peptide:phosphoRS score
def: "phosphoRS score for PTM site location at the peptide-level." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002549 ! PTM localization distinct peptide-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002551
name: peptide:Ascore
def: "A-score for PTM site location at the peptide-level." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002549 ! PTM localization distinct peptide-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002552
name: peptide:H-Score
def: "H-Score for peptide phosphorylation site location at the peptide-level." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002549 ! PTM localization distinct peptide-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002553
name: peptide:D-Score
def: "D-Score for PTM site location at the peptide-level." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002549 ! PTM localization distinct peptide-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002554
name: peptide:MD-Score
def: "MD-Score for PTM site location at the peptide-level." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002549 ! PTM localization distinct peptide-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002555
name: PTM localization score threshold
def: "Threshold for PTM site location score." [PSI:PI]
is_a: MS:1001405 ! spectrum identification result details

[Term]
id: MS:1002556
name: Ascore threshold
def: "Threshold for Ascore PTM site location score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002557
name: D-Score threshold
def: "Threshold for D-score PTM site location score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002558
name: MD-Score threshold
def: "Threshold for MD-score PTM site location score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002559
name: H-Score threshold
def: "Threshold for H-score PTM site location score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002560
name: DeBunker:score threshold
def: "Threshold for DeBunker PTM site location score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002561
name: Mascot:PTM site assignment confidence threshold
def: "Threshold for Mascot PTM site assignment confidence." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002562
name: MSQuant:PTM-score threshold
def: "Threshold for MSQuant:PTM-score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002563
name: MaxQuant:PTM Score threshold
def: "Threshold for MaxQuant:PTM Score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002564
name: MaxQuant:P-site localization probability threshold
def: "Threshold for MaxQuant:P-site localization probability." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002565
name: MaxQuant:PTM Delta Score threshold
def: "Threshold for MaxQuant:PTM Delta Score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002566
name: MaxQuant:Phospho (STY) Probabilities threshold
def: "Threshold for MaxQuant:Phospho (STY) Probabilities." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002567
name: phosphoRS score threshold
def: "Threshold for phosphoRS score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002568
name: phosphoRS site probability threshold
def: "Threshold for phosphoRS site probability." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002569
name: ProteomeDiscoverer:Number of Spectra Processed At Once
def: "Number of spectra processed at once in a ProteomeDiscoverer search." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002101 ! ProteomeDiscoverer input parameter
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002570
name: sequence multiply subsumable protein
def: "A protein for which the matched peptide sequences are the same, or a subset of, the matched peptide sequences for two or more other proteins combined. These other proteins need not all be in the same group." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002571
name: spectrum multiply subsumable protein
def: "A protein for which the matched spectra are the same, or a subset of, the matched spectra for two or more other proteins combined. These other proteins need not all be in the same group." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001101 ! protein group or subset relationship
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002572
name: protein detection statistical threshold
def: "Estimated statistical threshold used for protein detection." [PSI:MS]
is_a: MS:1002482 ! statistical threshold

[Term]
id: MS:1002573
name: spectrum identification statistical threshold
def: "Estimated statistical threshold used for spectrum identification." [PSI:MS]
is_a: MS:1002482 ! statistical threshold

[Term]
id: MS:1002574
name: ASAPRatio
def: "A program in the TPP that calculates PSM, peptide, and protein-level abundances based on 2-channel isotope-labelled data such as ICAT, SILAC, etc." [PSI:PI]
is_a: MS:1002286 ! Trans-Proteomic Pipeline software

[Term]
id: MS:1002575
name: Tide
def: "Tide open-source sequence search program developed at the University of Washington." [PMID:21761931]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002576
name: Andromeda result format
def: "Andromeda result file output format." [PSI:PI]
is_a: MS:1001040 ! intermediate analysis format

[Term]
id: MS:1002577
name: 2000 QTRAP
def: "SCIEX 2000 QTRAP." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002578
name: 2500 QTRAP
def: "SCIEX 2500 QTRAP." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002579
name: 3500 QTRAP
def: "SCIEX 3500 QTRAP." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002580
name: QTRAP 4500
def: "SCIEX QTRAP 4500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002581
name: QTRAP 6500
def: "SCIEX QTRAP 6500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002582
name: QTRAP 6500+
def: "SCIEX QTRAP 6500+." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002583
name: TripleTOF 4600
def: "SCIEX TripleTOF 4600 time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002584
name: TripleTOF 5600+
def: "SCIEX TripleTOF 5600+ time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002585
name: API 100
def: "Applied Biosystems/MDS SCIEX API 100 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002586
name: API 100LC
def: "Applied Biosystems/MDS SCIEX API 100LC MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002587
name: API 165
def: "Applied Biosystems/MDS SCIEX API 165 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002588
name: API 300
def: "Applied Biosystems/MDS SCIEX API 300 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002589
name: API 350
def: "Applied Biosystems/MDS SCIEX API 350 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002590
name: API 365
def: "Applied Biosystems/MDS SCIEX API 365 MS." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002591
name: Triple Quad 3500
def: "SCIEX Triple Quad 3500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002592
name: Triple Quad 4500
def: "SCIEX Triple Quad 4500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002593
name: Triple Quad 5500
def: "SCIEX Triple Quad 5500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002594
name: Triple Quad 6500
def: "SCIEX Triple Quad 6500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002595
name: Triple Quad 6500+
def: "SCIEX Triple Quad 6500+." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002596
name: ProLuCID
def: "The SEQUEST-like sequence search engine ProLuCID, developed in the Yates Lab at the Scripps Research Institute." [PMID:26171723]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002597
name: MS1 format
def: "MS1 file format for MS1 spectral data." [PMID:15317041, DOI:10.1002/rcm.1603]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002598
name: DTASelect
def: "Analysis software designed to reassemble the SEQUEST peptide identifications and to highlight the most significant matches." [PMID:12643522, http://fields.scripps.edu/DTASelect/]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002599
name: splash key
def: "Spectral Hash key, an unique identifier for spectra." [PMID:27824832]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002600
name: PRIDE XML
def: "Internal data and submission format of the PRIDE database." [http://ftp.pride.ebi.ac.uk/pride/resources/schema/pride/pride.xsd]
is_a: MS:1002130 ! identification file format
is_a: MS:1001405 ! spectrum identification result details

[Term]
id: MS:1002601
name: mzTab
def: "Tabular result format for proteomics and metabolomics experiments." [PMID:24980485, http://www.psidev.info/mztab/]
is_a: MS:1000914 ! tab delimited text format

[Term]
id: MS:1002602
name: sample label
def: "Reagent used in labeled quantification methods." [PSI:PI]
is_a: MS:1002111 ! assay label attribute
is_a: MS:1000548 ! sample attribute

[Term]
id: MS:1002603
name: ICAT reagent
def: "Isotope coded affinity tag reagent." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002604
name: ICAT heavy reagent
def: "The name of the sample labelled with the heavy ICAT label." [PSI:PI]
is_a: MS:1002603 ! ICAT reagent

[Term]
id: MS:1002605
name: ICAT light reagent
def: "The name of the sample labelled with the light ICAT label." [PSI:PI]
is_a: MS:1002603 ! ICAT reagent

[Term]
id: MS:1002606
name: ICPL reagent
def: "Isotope coded protein labeling reagent." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002607
name: ICPL reagent 0
def: "The name of the sample labelled with the ICPL reagent 0." [PSI:PI]
is_a: MS:1002606 ! ICPL reagent

[Term]
id: MS:1002608
name: ICPL reagent 4
def: "The name of the sample labelled with the ICPL reagent 4." [PSI:PI]
is_a: MS:1002606 ! ICPL reagent

[Term]
id: MS:1002609
name: ICPL reagent 6
def: "The name of the sample labelled with the ICPL reagent 6." [PSI:PI]
is_a: MS:1002606 ! ICPL reagent

[Term]
id: MS:1002610
name: ICPL reagent 10
def: "The name of the sample labelled with the ICPL reagent 10." [PSI:PI]
is_a: MS:1002606 ! ICPL reagent

[Term]
id: MS:1002611
name: SILAC reagent
def: "Stable isotope labeling with amino acids in cell culture reagent." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002612
name: SILAC heavy reagent
def: "The name of the sample labelled with the heavy SILAC label." [PSI:PI]
is_a: MS:1002611 ! SILAC reagent

[Term]
id: MS:1002613
name: SILAC medium reagent
def: "The name of the sample labelled with the medium SILAC label." [PSI:PI]
is_a: MS:1002611 ! SILAC reagent

[Term]
id: MS:1002614
name: SILAC light reagent
def: "The name of the sample labelled with the light SILAC label." [PSI:PI]
is_a: MS:1002611 ! SILAC reagent

[Term]
id: MS:1002615
name: TMT reagent
def: "Tandem mass tag reagent used in TMT, glycoTMT, iodoTMT, aminoxyTMT or hydrazideTMT isobaric labeling." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002616
name: TMT reagent 126
def: "The name of the sample labelled with the TMT reagent 126." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002617
name: TMT reagent 127
def: "The name of the sample labelled with the TMT reagent 127." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002618
name: TMT reagent 128
def: "The name of the sample labelled with the TMT reagent 128." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002619
name: TMT reagent 129
def: "The name of the sample labelled with the TMT reagent 129." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002620
name: TMT reagent 130
def: "The name of the sample labelled with the TMT reagent 130." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002621
name: TMT reagent 131
def: "The name of the sample labelled with the TMT reagent 131." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002622
name: iTRAQ reagent
def: "Isobaric tag for relative and absolute quantitation (iTRAQ or iTRAQH) reagent." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002623
name: iTRAQ reagent 113
def: "The name of the sample labelled with the iTRAQ reagent 113." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002624
name: iTRAQ reagent 114
def: "The name of the sample labelled with the iTRAQ reagent 114." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002625
name: iTRAQ reagent 115
def: "The name of the sample labelled with the iTRAQ reagent 115." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002626
name: iTRAQ reagent 116
def: "The name of the sample labelled with the iTRAQ reagent 116." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002627
name: iTRAQ reagent 117
def: "The name of the sample labelled with the iTRAQ reagent 117." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002628
name: iTRAQ reagent 118
def: "The name of the sample labelled with the iTRAQ reagent 118." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002629
name: iTRAQ reagent 119
def: "The name of the sample labelled with the iTRAQ reagent 119." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002630
name: iTRAQ reagent 121
def: "The name of the sample labelled with the iTRAQ reagent 121." [PSI:PI]
is_a: MS:1002622 ! iTRAQ reagent

[Term]
id: MS:1002631
name: Electron-Transfer/Higher-Energy Collision Dissociation (EThcD)
def: "A dissociation process combining electron-transfer and higher-energy collision dissociation (EThcD). It combines ETD (reaction time) followed by HCD (activation energy)." [PSI:PI]
synonym: "EThcD" EXACT []
is_a: MS:1000044 ! dissociation method

[Term]
id: MS:1002632
name: jPOST dataset identifier
def: "Dataset identifier issued by the jPOST repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002633
name: jPOST dataset URI
def: "URI that allows the access to one dataset in the jPOST repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002634
name: Q Exactive Plus
def: "Thermo Scientific Q Exactive Plus." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002635
name: proteogenomics search
def: "Proteogenomics search performed." [PSI:PI]
is_a: MS:1002489 ! special processing

[Term]
id: MS:1002636
name: proteogenomics attribute
def: "Proteogenomics attribute." [PSI:PI]
is_a: MS:1001105 ! peptide sequence-level identification attribute

[Term]
id: MS:1002637
name: chromosome name
def: "The name or number of the chromosome to which a given peptide has been mapped." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002638
name: chromosome strand
def: "The strand (+ or -) to which the peptide has been mapped." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002639
name: peptide start on chromosome
def: "OBSOLETE The overall start position on the chromosome to which a peptide has been mapped i.e. the position of the first base of the first codon, using a zero-based counting system." [PSI:PI]
comment: This term was obsoleted because it contains redundant info contained in term MS:1002643 - peptide start positions on chromosome.
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
is_obsolete: true
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002640
name: peptide end on chromosome
def: "The overall end position on the chromosome to which a peptide has been mapped i.e. the position of the third base of the last codon, using a zero-based counting system." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002641
name: peptide exon count
def: "The number of exons to which the peptide has been mapped." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002642
name: peptide exon nucleotide sizes
def: "A comma separated list of the number of DNA bases within each exon to which a peptide has been mapped. Assuming standard operation of a search engine, the peptide exon sizes should sum to exactly three times the peptide length." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002643
name: peptide start positions on chromosome
def: "A comma separated list of start positions within exons to which the peptide has been mapped, relative to peptide-chromosome start, assuming a zero-based counting system. The first value MUST match the value in peptide start on chromosome." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002644
name: genome reference version
def: "The reference genome and versioning string as used for mapping. All coordinates are within this frame of reference." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002636 ! proteogenomics attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002645
name: MSDK
def: "Mass Spectrometry Development Kit (MSDK) is a Java library of algorithms for processing of mass spectrometry data." [PSI:PI, http://msdk.github.io/]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002646
name: native spectrum identifier format, combined spectra
def: "Describes how the native spectrum identifiers that have been combined prior to searching or interpretation are formated." [PSI:PI]
synonym: "nativeID format, combined spectra" EXACT []
relationship: part_of MS:1000577 ! source data file

[Term]
id: MS:1002647
name: Thermo nativeID format, combined spectra
def: "Thermo comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002648
name: Waters nativeID format, combined spectra
def: "Waters comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002649
name: WIFF nativeID format, combined spectra
def: "WIFF comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002650
name: Bruker/Agilent YEP nativeID format, combined spectra
def: "Bruker/Agilent comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002651
name: Bruker BAF nativeID format, combined spectra
def: "Bruker BAF comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002652
name: Bruker FID nativeID format, combined spectra
def: "Bruker FID comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
comment: The nativeID must be the same as the source file ID.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002653
name: multiple peak list nativeID format, combined spectra
def: "Comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
comment: Used for conversion of peak list files with multiple spectra, i.e. MGF, PKL, merged DTA files. Index is the spectrum number in the file, starting from 0.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002654
name: single peak list nativeID format, combined spectra
def: "Comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
comment: The nativeID must be the same as the source file ID. Used for conversion of peak list files with one spectrum per file, typically folder of PKL or DTAs, each sourceFileRef is different.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002655
name: scan number only nativeID format, combined spectra
def: "Comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
comment: Used for conversion from mzXML, or DTA folder where native scan numbers can be derived.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002656
name: spectrum identifier nativeID format, combined spectra
def: "Comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
comment: Used for conversion from mzData. The spectrum id attribute is referenced.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002657
name: mzML unique identifier, combined spectra
def: "Comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
comment: A unique identifier of a spectrum stored in an mzML file.
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002658
name: identification parameter
def: "Identification parameter for the search engine run." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1002659
name: UniProtKB text sequence format
def: "Text-based format used by UniProtKB for sequence entries." [PSI:PI]
xref: SWO:http://edamontology.org/format_2187
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1002660
name: UniProtKB XML sequence format
def: "XML-based format used by UniProtKB for sequence entries." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1002661
name: Morpheus
def: "Morpheus search engine." [PMID:23323968]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002662
name: Morpheus:Morpheus score
def: "Morpheus score for PSMs." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002663
name: Morpheus:summed Morpheus score
def: "Summed Morpheus score for protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002664
name: interaction score derived from cross-linking
def: "Parent term for interaction scores derived from cross-linking." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002675 ! cross-linking result details
relationship: has_regexp MS:1002665 ! ([:digit:]+[.][a|b]:[:digit:]+:[:digit:]+[.][:digit:]+([Ee][+-][0-9]+)*:(true|false]\{1\}))
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002665
name: regular expression for interaction scores derived from cross-linking
def: "([:digit:]+[.][a|b]:([:digit:]+|null):[:digit:]+[.][:digit:]+([Ee][+-][0-9]+)*:(true|false]\{1\}))." [PSI:PI]
is_a: MS:1002479 ! regular expression

[Term]
id: MS:1002666
name: impact II
def: "Bruker Daltonics' impact II." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1002667
name: impact HD
def: "Bruker Daltonics' impact HD." [PSI:MS]
is_a: MS:1001536 ! Bruker Daltonics micrOTOF series

[Term]
id: MS:1002668
name: frag: iTRAQ 4plex reporter ion
def: "Standard reporter ion for iTRAQ 4Plex. The value slot holds the integer mass of the iTRAQ 4Plex reporter ion, e.g. 114." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002307 ! fragmentation ion type
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002669
name: frag: iTRAQ 8plex reporter ion
def: "Standard reporter ion for iTRAQ 8Plex. The value slot holds the integer mass of the iTRAQ 8Plex reporter ion, e.g. 113." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002307 ! fragmentation ion type
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002670
name: frag: TMT reporter ion
def: "Standard reporter ion for TMT. The value slot holds the integer mass of the TMT reporter ion and can be suffixed with either N or C, indicating whether the mass difference is encoded at a Nitrogen or Carbon atom, e.g. 127N." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002307 ! fragmentation ion type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002671
name: frag: TMT ETD reporter ion
def: "Standard reporter ion for TMT with ETD fragmentation. The value slot holds the integer mass of the TMT ETD reporter ion and can be suffixed with either N or C, indicating whether the mass difference is encoded at a Nitrogen or Carbon atom, e.g. 127C." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002307 ! fragmentation ion type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002672
name: no modification threshold
def: "No statistical threshold for accepting or rejecting that a modification position." [PSI:PI]
is_a: MS:1002555 ! PTM localization score threshold

[Term]
id: MS:1002673
name: OpenXQuest
def: "Cross-Linking MS search engine." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1002674
name: X500R QTOF
def: "SCIEX X500R QTOF, a quadrupole - quadrupole - time-of-flight mass spectrometer." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1002675
name: cross-linking result details
def: "This subsection describes terms which can describe details of cross-linking results." [PSI:PI]
relationship: part_of MS:1001000 ! spectrum interpretation

[Term]
id: MS:1002676
name: protein-pair-level global FDR
def: "Estimation of the global false discovery rate of proteins-pairs in cross-linking experiments." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002664 ! interaction score derived from cross-linking
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_regexp MS:1002665 ! ([:digit:]+[.][a|b]:[:digit:]+:[:digit:]+[.][:digit:]+([Ee][+-][0-9]+)*:(true|false]\{1\}))
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002677
name: residue-pair-level global FDR
def: "Estimation of the global false discovery rate of residue-pairs in cross-linking experiments." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002664 ! interaction score derived from cross-linking
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_regexp MS:1002665 ! ([:digit:]+[.][a|b]:[:digit:]+:[:digit:]+[.][:digit:]+([Ee][+-][0-9]+)*:(true|false]\{1\}))
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002678
name: supplemental beam-type collision-induced dissociation
def: "A supplemental collision-induced dissociation process that occurs in a beam-type collision cell in addition to another primary type of dissociation." [PSI:MS]
is_a: MS:1000422 ! beam-type collision-induced dissociation

[Term]
id: MS:1002679
name: supplemental collision-induced dissociation
def: "The dissociation of an ion after supplemental collisional excitation." [PSI:MS]
is_a: MS:1000133 ! collision-induced dissociation

[Term]
id: MS:1002680
name: supplemental collision energy
def: "Energy for an ion experiencing supplemental collision with a stationary gas particle resulting in dissociation of the ion." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000510 ! precursor activation attribute
relationship: has_units UO:0000266 ! electronvolt
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002681
name: OpenXQuest:combined score
def: "OpenXQuest's combined score for a cross-link spectrum match." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002682
name: OpenXQuest:xcorr xlink
def: "OpenXQuest's cross-correlation of cross-linked ions subscore." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002683
name: OpenXQuest:xcorr common
def: "OpenXQuest's cross-correlation of unlinked ions subscore." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002684
name: OpenXQuest:match-odds
def: "OpenXQuest's match-odds subscore." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_domain MS:1002306 ! value greater than zero
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002685
name: OpenXQuest:intsum
def: "OpenXQuest's sum of matched peak intensity subscore." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_domain MS:1002306 ! value greater than zero
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002686
name: OpenXQuest:wTIC
def: "OpenXQuest's weighted percent of total ion current subscore." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002687
name: analysis attribute
def: "Attribute of an item in the result of mass spectrometry proteomics data analysis." [PSI:PI]
is_a: MS:1001405 ! spectrum identification result details

[Term]
id: MS:1002688
name: PTM localization attribute
def: "Statistic derived from a post-translational modification localization analysis." [PSI:PI]
is_a: MS:1002687 ! analysis attribute

[Term]
id: MS:1002689
name: PTM localization single result statistic
def: "Statistic for a single item derived from a post-translational modification localization analysis." [PSI:PI]
is_a: MS:1002688 ! PTM localization attribute

[Term]
id: MS:1002690
name: PTM localization result list statistic
def: "Statistic for all items derived from a post-translational modification localization analysis." [PSI:PI]
is_a: MS:1002688 ! PTM localization attribute

[Term]
id: MS:1002691
name: global FLR
def: "Global false localization rate for all localizations in a dataset." [PSI:PI]
is_a: MS:1002690 ! PTM localization result list statistic

[Term]
id: MS:1002692
name: local FLR at threshold
def: "Local false localization rate for the bottom item in list of localizations sorted from most to least confident." [PSI:PI]
is_a: MS:1002690 ! PTM localization result list statistic

[Term]
id: MS:1002693
name: identification attribute
def: "Attribute of an identification item in the result of mass spectrometry proteomics data analysis." [PSI:PI]
is_a: MS:1002687 ! analysis attribute

[Term]
id: MS:1002694
name: single identification result attribute
def: "Attribute of a single identification item (as opposed to a list) in the result of mass spectrometry proteomics data analysis." [PSI:PI]
is_a: MS:1002693 ! identification attribute

[Term]
id: MS:1002695
name: frag: isobaric label ion
def: "Fragment ion corresponding to an isobaric label artifact." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1002697
name: secondary isotope peak
def: "Fragment ion is an isotopic peak other than that monoisotopic peak. This is used in conjuction with another ion type, such as frag: y ion." [PSI:PI]
is_a: MS:1002307 ! fragmentation ion type

[Term]
id: MS:1002698
name: protein cluster identification attribute
def: "An attribute of the protein cluster concept as used in mzIdentML." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002699
name: result list attribute
def: "General property of an entire result list." [PSI:PI]
is_a: MS:1002693 ! identification attribute

[Term]
id: MS:1002700
name: PSM-level result list attribute
def: "General property of the list of all PSMs." [PSI:PI]
is_a: MS:1002699 ! result list attribute

[Term]
id: MS:1002701
name: PSM-level result list statistic
def: "Statistic pertaining to the full list of all PSMs." [PSI:PI]
is_a: MS:1002700 ! PSM-level result list attribute

[Term]
id: MS:1002702
name: peptide sequence-level result list attribute
def: "General property of all peptide sequences in the list." [PSI:PI]
is_a: MS:1002699 ! result list attribute

[Term]
id: MS:1002703
name: peptide sequence-level result list statistic
def: "Statistic pertaining to all peptide sequences in the list." [PSI:PI]
is_a: MS:1002702 ! peptide sequence-level result list attribute

[Term]
id: MS:1002704
name: protein-level result list attribute
def: "Attribute of an entire protein list." [PSI:PI]
is_a: MS:1002699 ! result list attribute

[Term]
id: MS:1002705
name: protein-level result list statistic
def: "A statistical metric of an entire protein list." [PSI:PI]
is_a: MS:1002704 ! protein-level result list attribute

[Term]
id: MS:1002706
name: protein group-level result list statistic
def: "Attrbiute of an entire list of protein groups." [PSI:PI]
is_a: MS:1002405 ! protein group-level result list attribute

[Term]
id: MS:1002707
name: (?=[KR])
def: "Regular expression for LysargiNase." [PSI:PI]
is_a: MS:1001180 ! Cleavage agent regular expression

[Term]
id: MS:1002708
name: LysargiNase
def: "Metalloproteinase found in Methanosarcina acetivorans that cleaves on the N-terminal side of lysine and arginine residues." [PMID:25419962]
synonym: "Tryp-N" EXACT []
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1002707 ! (?=[KR])

[Term]
id: MS:1002709
name: compound data type
def: "A data type representing more than a single value." []

[Term]
id: MS:1002710
name: list of type
def: "A data type defining a list of values of a single type." []
is_a: MS:1002709 ! compound data type

[Term]
id: MS:1002711
name: list of strings
def: "A list of xsd:string." []
is_a: MS:1002710 ! list of type
relationship: has_value_type xsd\:string

[Term]
id: MS:1002712
name: list of integers
def: "A list of xsd:integer." []
is_a: MS:1002710 ! list of type
relationship: has_value_type xsd\:integer

[Term]
id: MS:1002713
name: list of floats
def: "A list of xsd:float." []
is_a: MS:1002710 ! list of type
relationship: has_value_type xsd\:float

[Term]
id: MS:1002719
name: Pegasus BT
def: "LECO bench-top GC time-of-flight mass spectrometer." [PSI:PI]
is_a: MS:1001800 ! LECO instrument model

[Term]
id: MS:1002720
name: MSPathFinder
def: "PNNL top-down/bottom-up analysis software for identifying peptides and proteoforms in fragmentation mass spectra." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002721
name: MSPathFinder:SpecEValue
def: "MSPathFinder spectral E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002353 ! PSM-level e-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002722
name: MSPathFinder:EValue
def: "MSPathFinder E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002353 ! PSM-level e-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002723
name: MSPathFinder:QValue
def: "MSPathFinder Q-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002354 ! PSM-level q-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002724
name: MSPathFinder:PepQValue
def: "MSPathFinder peptide-level Q-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002725
name: MSPathFinder:RawScore
def: "MSPathFinder raw score." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002726
name: SYNAPT G2-Si
def: "Waters Corporation SYNAPT G2-Si orthogonal acceleration time-of-flight mass spectrometer." [PSI:PI]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002727
name: MALDI SYNAPT G2-Si
def: "Waters Corporation MALDI SYNAPT G2-Si orthogonal acceleration time-of-flight mass spectrometer." [PSI:PI]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002728
name: Vion IMS QTof
def: "Waters Corporation Vion IMS QTof orthogonal acceleration time-of-flight mass spectrometer." [PSI:PI]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002729
name: Xevo G2 XS Tof
def: "Waters Corporation Xevo G2 XS Tof orthogonal acceleration time-of-flight mass spectrometer." [PSI:PI]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002730
name: Xevo TQ-XS
def: "Waters Corporation Xevo TQ-XS triple quadrupole mass spectrometer." [PSI:PI]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002731
name: Xevo TQ-S micro
def: "Waters Corporation Xevo TQ-S micro triple quadrupole mass spectrometer." [PSI:PI]
is_a: MS:1000126 ! Waters instrument model

[Term]
id: MS:1002732
name: Orbitrap Fusion Lumos
def: "Thermo Scientific Orbitrap Fusion Lumos mass spectrometer with Tribrid architecture consisting of quadrupole mass filter, linear ion trap and Orbitrap mass analyzers." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002733
name: peptide-level spectral count
def: "The number of MS2 spectra identified for a peptide sequence specified by the amino acid one-letter codes plus optional PTMs in spectral counting." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002734
name: peptide ion-level spectral count
def: "The number of MS2 spectra identified for a molecular ion defined by the peptide sequence represented by the amino acid one-letter codes, plus optional PTMs plus optional charged aducts plus the charge state, in spectral counting." [PSI:PI]
xref: value-type:xsd\:int "The allowed value-type for this CV term."
is_a: MS:1002737 ! peptide-level quantification datatype
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: MS:1002735
name: feature-level quantification datatype
def: "The data type of the value reported in a QuantLayer for a feature." [PSI:PI]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002736
name: PSM-level quantification datatype
def: "The data type of the value reported in a QuantLayer for a PSM." [PSI:PI]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002737
name: peptide-level quantification datatype
def: "The data type of the value reported in a QuantLayer for a peptide." [PSI:PI]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002738
name: protein-level quantification datatype
def: "The data type of the value reported in a QuantLayer for a protein." [PSI:PI]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002739
name: protein group-level quantification datatype
def: "The data type of the value reported in a QuantLayer for a protein group." [PSI:PI]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002740
name: unmapped peptide
def: "Within the context of a proteogenomics approach, a peptide sequence that has not been mapped to a genomic location." [PSI:PI]
is_a: MS:1002636 ! proteogenomics attribute

[Term]
id: MS:1002741
name: unmapped protein
def: "Within the context of a proteogenomics approach, a protein sequence that has not been mapped to a genomic location." [PSI:PI]
is_a: MS:1002636 ! proteogenomics attribute

[Term]
id: MS:1002742
name: noise array
def: "A data array of noise values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1002743
name: sampled noise m/z array
def: "A data array of parallel, independent m/z values for a sampling of noise across a spectrum (typically much smaller than MS:1000514, the m/z array)." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units MS:1000040 ! m/z

[Term]
id: MS:1002744
name: sampled noise intensity array
def: "A data array of intensity values for the amplitude of noise variation superposed on the baseline (MS:1002745) across a spectrum (for use with MS:1002743, sampled noise m/z array)." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units MS:1000131 ! number of detector counts

[Term]
id: MS:1002745
name: sampled noise baseline array
def: "A data array of baseline intensity values (the intensity in the absence of analytes) for a sampling of noise across a spectrum (for use with MS:1002743, sampled noise m/z array)." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1002746
name: MS-Numpress linear prediction compression followed by zlib compression
def: "Compression using MS-Numpress linear prediction compression and zlib." [https://github.com/ms-numpress/ms-numpress]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1002747
name: MS-Numpress positive integer compression followed by zlib compression
def: "Compression using MS-Numpress positive integer compression and zlib." [https://github.com/ms-numpress/ms-numpress]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1002748
name: MS-Numpress short logged float compression followed by zlib compression
def: "Compression using MS-Numpress short logged float compression and zlib." [https://github.com/ms-numpress/ms-numpress]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1002749
name: Mascot:IntegratedSpectralLibrarySearch
def: "Means that Mascot has integrated the search results of database and spectral library search into a single data set." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002750
name: NIST MSPepSearch
def: "Search tool of the NIST (National Institute of Standards and Technology) for spectral library searches." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002751
name: NIST MSP format
def: "MSP text format defined by the NIST." [PSI:PI]
is_a: MS:1001347 ! database file formats

[Term]
id: MS:1002752
name: database type spectral library
def: "Database containing spectra." [PSI:PI]
is_a: MS:1001073 ! database type amino acid

[Term]
id: MS:1002753
name: value between 0 and 1000 inclusive
def: "Value range for scores." [PSI:PI]
is_a: MS:1002304 ! domain range

[Term]
id: MS:1002754
name: MSPepSearch:score
def: "MSPepSearch score (0 for entirely dissimilar and 1000 for identical observed spectrum and library spectrum." [PSI:PI]
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_domain MS:1002753 ! value between 0 and 1000 inclusive

[Term]
id: MS:1002755
name: combined ms-ms + spectral library search
def: "A combined MS2 (with fragment ions) and spectral library search." [PSI:PI]
is_a: MS:1001080 ! search type

[Term]
id: MS:1002756
name: iodoTMT quantitation analysis
def: "Quantitation analysis using the Thermo Fisher sulfhydryl-reactive iodo tandem mass tag (iodoTMT) labelling workflow." [PSI:PI, PMID:24926564]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002757
name: glyco-TMT quantitation analysis
def: "Quantitation analysis using the Thermo Fisher carbonyl-reactive glyco-tandem mass tag (glyco-TMT) labelling workflow." [PSI:PI, PMID:22455665]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002758
name: aminoxyTMT quantitation analysis
def: "Quantitation analysis using the Thermo Fisher carbonyl-reactive aminoxy tandem mass tag (aminoxyTMT) labelling workflow." [PSI:PI, PMID:25337643]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002759
name: hydrazideTMT quantitation analysis
def: "Quantitation analysis using the Thermo Fisher carbonyl-reactive hydrazide tandem mass tag (hydrazide-TMT) labelling workflow." [PSI:PI, PMID:25337643]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002760
name: iTRAQH quantitation analysis
def: "Quantification analysis using the carbonyl-reactive isobaric tags for relative and absolute quantification hydrazide (iTRAQH) labelling workflow." [PSI:PI, PMID:22926130]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002761
name: DiART quantitation analysis
def: "Quantification analysis using the amine-reactive deuterium isobaric amine reactive tag (DiART) labelling workflow." [PSI:PI, PMID:20715779]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002762
name: DiLeu quantitation analysis
def: "Quantification analysis using the amine-reactive dimethyl leucine (DiLeu) tag labelling workflow." [PSI:PI, PMID:20715779]
is_a: MS:1002009 ! isobaric label quantitation analysis

[Term]
id: MS:1002763
name: TMT reagent 127N
def: "The name of the sample labelled with the TMT reagent 127N." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002764
name: TMT reagent 127C
def: "The name of the sample labelled with the TMT reagent 127C." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002765
name: TMT reagent 128N
def: "The name of the sample labelled with the TMT reagent 128N." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002766
name: TMT reagent 128C
def: "The name of the sample labelled with the TMT reagent 128C." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002767
name: TMT reagent 129N
def: "The name of the sample labelled with the TMT reagent 129N." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002768
name: TMT reagent 129C
def: "The name of the sample labelled with the TMT reagent 129C." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002769
name: TMT reagent 130N
def: "The name of the sample labelled with the TMT reagent 130N." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002770
name: TMT reagent 130C
def: "The name of the sample labelled with the TMT reagent 130C." [PSI:PI]
is_a: MS:1002615 ! TMT reagent

[Term]
id: MS:1002771
name: DiART reagent
def: "Deuterium isobaric amine reactive tag labeling reagent." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002772
name: DiART reagent 114
def: "The name of the sample labelled with the DiART reagent 114." [PSI:PI]
is_a: MS:1002771 ! DiART reagent

[Term]
id: MS:1002773
name: DiART reagent 115
def: "The name of the sample labelled with the DiART reagent 115." [PSI:PI]
is_a: MS:1002771 ! DiART reagent

[Term]
id: MS:1002774
name: DiART reagent 116
def: "The name of the sample labelled with the DiART reagent 116." [PSI:PI]
is_a: MS:1002771 ! DiART reagent

[Term]
id: MS:1002775
name: DiART reagent 117
def: "The name of the sample labelled with the DiART reagent 117." [PSI:PI]
is_a: MS:1002771 ! DiART reagent

[Term]
id: MS:1002776
name: DiART reagent 118
def: "The name of the sample labelled with the DiART reagent 118." [PSI:PI]
is_a: MS:1002771 ! DiART reagent

[Term]
id: MS:1002777
name: DiART reagent 119
def: "The name of the sample labelled with the DiART reagent 119." [PSI:PI]
is_a: MS:1002771 ! DiART reagent

[Term]
id: MS:1002778
name: DiLeu reagent
def: "Dimethyl leucine labeling reagent." [PSI:PI]
is_a: MS:1002602 ! sample label

[Term]
id: MS:1002779
name: DiLeu reagent 115
def: "The name of the sample labelled with the DiLeu reagent 115." [PSI:PI]
is_a: MS:1002778 ! DiLeu reagent

[Term]
id: MS:1002780
name: DiLeu reagent 116
def: "The name of the sample labelled with the DiLeu reagent 116." [PSI:PI]
is_a: MS:1002778 ! DiLeu reagent

[Term]
id: MS:1002781
name: DiLeu reagent 117
def: "The name of the sample labelled with the DiLeu reagent 117." [PSI:PI]
is_a: MS:1002778 ! DiLeu reagent

[Term]
id: MS:1002782
name: DiLeu reagent 118
def: "The name of the sample labelled with the DiLeu reagent 118." [PSI:PI]
is_a: MS:1002778 ! DiLeu reagent

[Term]
id: MS:1002783
name: 6550 iFunnel Q-TOF LC/MS
def: "The 6550 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002784
name: 6550A iFunnel Q-TOF LC/MS
def: "The 6550A Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002785
name: 6520B Q-TOF LC/MS
def: "The 6520B Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002786
name: 6530A Q-TOF LC/MS
def: "The 6530A Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002787
name: 6530B Q-TOF LC/MS
def: "The 6530B Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002788
name: 6538 Q-TOF LC/MS
def: "The 6538 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002789
name: 6540 Q-TOF LC/MS
def: "The 6540 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002790
name: 6542 Q-TOF LC/MS
def: "The 6542 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002791
name: 6545 Q-TOF LC/MS
def: "The 6545 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002792
name: 6560 Q-TOF LC/MS
def: "The 6560 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002793
name: 6570 Q-TOF LC/MS
def: "The 6570 Quadrupole Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002794
name: 6120B Quadrupole LC/MS
def: "The 6120B Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a single quadrupole mass spectrometer from the 6100 Series of Agilent mass spectrometers." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002795
name: 6150 Quadrupole LC/MS
def: "The 6150 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a single quadrupole mass spectrometer from the 6100 Series of Agilent mass spectrometers." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002796
name: 6224 Time-of-Flight LC/MS
def: "The 6224 Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002797
name: 6230A Time-of-Flight LC/MS
def: "The 6230A Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002798
name: 6230B Time-of-Flight LC/MS
def: "The 6230B Time-of-Flight LC/MS is a Agilent liquid chromatography instrument combined with a Agilent time of flight mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002799
name: 6430 Triple Quadrupole LC/MS
def: "The 6430 Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002800
name: 6495A Triple Quadrupole LC/MS
def: "The 6495A Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002801
name: 6495B Triple Quadrupole LC/MS
def: "The 6495B Quadrupole LC/MS system is a Agilent liquid chromatography instrument combined with a Agilent triple quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002802
name: 7000A Triple Quadrupole GC/MS
def: "The 7000A Quadrupole GC/MS system is a Agilent gas chromatography instrument combined with a Agilent triple quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002803
name: 7000B Triple Quadrupole GC/MS
def: "The 7000B Quadrupole GC/MS system is a Agilent gas chromatography instrument combined with a Agilent triple quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002804
name: 7800 Quadrupole ICP-MS
def: "The 7800 Quadrupole ICP-MS system is a Agilent inductively couple plasma instrument combined with a Agilent quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002805
name: 8800 Triple Quadrupole ICP-MS
def: "The 8800 Quadrupole ICP-MS system is a Agilent inductively couple plasma instrument combined with a Agilent quadrupole mass spectrometer." [PSI:MS]
is_a: MS:1000490 ! Agilent instrument model

[Term]
id: MS:1002806
name: ion
def: "Molecular entity having a net positive or negative electric charge." [PSI:MS]
is_a: MS:1000881 ! molecular entity

[Term]
id: MS:1002807
name: positive mode adduct ion
def: "Adduct ion with positive ionization." [PSI:MS]
is_a: MS:1000353 ! adduct ion

[Term]
id: MS:1002808
name: negative mode adduct ion
def: "Adduct ion with negative ionization." [PSI:MS]
is_a: MS:1000353 ! adduct ion

[Term]
id: MS:1002809
name: adduct ion attribute
def: "Nonphysical characteristic attributed to an adduct ion." [PSI:MS]
relationship: part_of MS:1000353 ! adduct ion

[Term]
id: MS:1002810
name: adduct ion X m/z
def: "Theoretical m/z of the X component in the adduct M+X or M-X. This term was formerly called 'adduct ion mass', but it is not really a mass. It corresponds to the column mislabelled as 'mass' at https://fiehnlab.ucdavis.edu/staff/kind/Metabolomics/MS-Adduct-Calculator." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003056 ! adduct ion property
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002811
name: adduct ion isotope
def: "Isotope of the matrix molecule M of an adduct formation." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1003056 ! adduct ion property
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002812
name: Regular expression for adduct ion formula
def: "(\[[:digit:]{0,1}M([+][:digit:]{0,1}(H|K|(Na)|(Li)|(Cl)|(Br)|(NH3)|(NH4)|(CH3OH)|(IsoProp)|(DMSO)|(FA)|(Hac)|(TFA)|(NaCOOH)|(HCOOH)|(CF3COOH)|(ACN))){0,}([-][:digit:]{0,1}(H|(H2O)|(CH2)|(CH4)|(NH3)|(CO)|(CO2)|(COCH2)|(HCOOH)|(C2H4)|(C4H8)|(C3H2O3)|(C5H8O4)|(C6H10O4)|(C6H10O5)|(C6H8O6))){0,}\][:digit:]{0,1}[+-])." [PSI:PI]
is_a: MS:1002479 ! regular expression

[Term]
id: MS:1002813
name: adduct ion formula
def: "Adduct formation formula of the form M+X or M-X, as constrained by the provided regular expression." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002809 ! adduct ion attribute
relationship: has_regexp MS:1002812 ! (\[[:digit:]{0,1}M([+][:digit:]{0,1}(H|K|(Na)|(Li)|(Cl)|(Br)|(NH3)|(NH4)|(CH3OH)|(IsoProp)|(DMSO)|(FA)|(Hac)|(TFA)|(NaCOOH)|(HCOOH)|(CF3COOH)|(ACN))){0,}([-][:digit:]{0,1}(H|(H2O)|(CH2)|(CH4)|(NH3)|(CO)|(CO2)|(COCH2)|(HCOOH)|(C2H4)|(C4H8)|(C3H2O3)|(C5H8O4)|(C6H10O4)|(C6H10O5)|(C6H8O6))){0,}\][:digit:]{0,1}[+-])
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002814
name: volt-second per square centimeter
def: "An electrical mobility unit that equals the speed [cm/s] an ion reaches when pulled through a gas by a Voltage[V] over a certain distance [cm]." [PSI:PI]
synonym: "Vs/cm^2" EXACT []
is_a: UO:0000000 ! unit

[Term]
id: MS:1002815
name: inverse reduced ion mobility
def: "Ion mobility measurement for an ion or spectrum of ions as measured in an ion mobility mass spectrometer. This might refer to the central value of a bin into which all ions within a narrow range of mobilities have been aggregated." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000455 ! ion selection attribute
is_a: MS:1002892 ! ion mobility attribute
relationship: has_units MS:1002814 ! volt-second per square centimeter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002816
name: mean ion mobility array
def: "Array of population mean ion mobility values (K or K0) based on ion separation in gaseous phase due to different ion mobilities under an electric field based on ion size, m/z and shape, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units UO:0000028 ! millisecond
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002817
name: Bruker TDF format
def: "Bruker TDF raw file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002818
name: Bruker TDF nativeID format
def: "Native format defined by frame=xsd:nonNegativeInteger scan=xsd:nonNegativeInteger." [PSI:MS]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1002819
name: Bruker TDF nativeID format, combined spectra
def: "Bruker TDF comma separated list of spectra that have been combined prior to searching or interpretation." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002646 ! native spectrum identifier format, combined spectra
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002820
name: M+H ion
def: "Adduct formed by protonation of a matrix molecule M, i.e. the addition of a matrix molecule M plus a proton." [PSI:MS]
property_value: ionMass: "M + 1.007276" xsd:string
is_a: MS:1002807 ! positive mode adduct ion

[Term]
id: MS:1002821
name: M-H ion
def: "Adduct formed by deprotonation of a matrix molecule M, i.e. the removal of a proton from a matrix molecule M." [PSI:MS]
property_value: ionMass: "M - 1.007276" xsd:string
is_a: MS:1002808 ! negative mode adduct ion

[Term]
id: MS:1002822
name: OpenMS file format
def: "File format developed by the OpenMS team." [PMID:27575624]
is_a: MS:1001459 ! file format

[Term]
id: MS:1002823
name: idXML
def: "OpenMS intermediate identification format." [PSI:PI]
is_a: MS:1002822 ! OpenMS file format

[Term]
id: MS:1002824
name: featureXML
def: "OpenMS feature file format." [PSI:PI]
is_a: MS:1002822 ! OpenMS file format

[Term]
id: MS:1002825
name: consensusXML
def: "OpenMS consensus map format." [PSI:PI]
is_a: MS:1002822 ! OpenMS file format

[Term]
id: MS:1002826
name: MetaMorpheus
def: "MetaMorpheus search engine." [https://github.com/smith-chem-wisc/MetaMorpheus]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002827
name: MetaMorpheus:score
def: "MetaMorpheus score for PSMs." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002828
name: MetaMorpheus:protein score
def: "MetaMorpheus score for protein groups." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002829
name: XCMS:into
def: "Feature intensity produced by XCMS findPeaks() from integrated peak intensity." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002830
name: XCMS:intf
def: "Feature intensity produced by XCMS findPeaks() from baseline corrected integrated peak intensity." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002831
name: XCMS:maxo
def: "Feature intensity produced by XCMS findPeaks() from maximum peak intensity." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002832
name: XCMS:area
def: "Feature intensity produced by XCMS findPeaks() from feature area that is not normalized by the scan rate." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002735 ! feature-level quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002833
name: alternating polarity mode
def: "Polarities of the scans of a run are alternating, i.e. both positive and negative mode scans are acquired." [PSI:PI]
is_a: MS:1000857 ! run attribute

[Term]
id: MS:1002834
name: ProteomeDiscoverer:Delta Score
def: "The Delta Score reported by Proteome Discoverer version 2." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002835
name: LTQ Orbitrap Classic
def: "Thermo Fisher Scientific LTQ Orbitrap Classic." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002836
name: iProX dataset identifier
def: "Dataset identifier issued by the iProX repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002837
name: iProX dataset URI
def: "URI that allows the access to one dataset in the iProX repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002838
name: mzMLb format
def: "mzMLb file format, mzML encapsulated within HDF5." [PSI:PI, https://github.com/biospi/mzmlb]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002839
name: Conversion to mzMLb
def: "Conversion of a file format to Proteomics Standards Initiative mzMLb file format." [PSI:PI]
is_a: MS:1000530 ! file format conversion

[Term]
id: MS:1002840
name: external reference data
def: "Data belonging to an external reference." [PSI:MS]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1002841
name: external HDF5 dataset
def: "The HDF5 dataset location containing the binary data, relative to the dataset containing the mzML. Also indicates that there is no data in the <binary> section of the BinaryDataArray." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002840 ! external reference data
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002842
name: external offset
def: "The position in the external data where the array begins." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
relationship: has_units UO:0000189 ! Count
is_a: MS:1002840 ! external reference data
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1002843
name: external array length
def: "Describes how many fields an array contains." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
relationship: has_units UO:0000189 ! Count
is_a: MS:1002840 ! external reference data
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1002844
name: Experiment additional parameter
def: "Root node for terms relating to the description of an Experiment in relation to the PRIDE-XML element ExperimentCollection/Experiment/additional/cvParam." [PSI:PI]
is_a: MS:1001458 ! spectrum generation information

[Term]
id: MS:1002845
name: Associated file URI
def: "URI of one external file associated to the PRIDE experiment (maybe through a PX submission)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002844 ! Experiment additional parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002846
name: Associated raw file URI
def: "URI of one raw data file associated to the PRIDE experiment (maybe through a PX submission)." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002847
name: ProteomeCentral dataset URI
def: "URI associated to one PX submission in ProteomeCentral." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002844 ! Experiment additional parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002848
name: Result file URI
def: "URI of one file labeled as 'Result', associated to one PX submission." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002849
name: Search engine output file URI
def: "URI of one search engine output file associated to one PX submission." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002850
name: Peak list file URI
def: "URI of one of one search engine output file associated to one PX submission." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002851
name: Other type file URI
def: "URI of one file labeled as 'Other', associated to one PX submission." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002852
name: Dataset FTP location
def: "FTP location of one entire PX data set." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002844 ! Experiment additional parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002853
name: Dataset with no associated published manuscript
def: "A dataset which does not have an associated published manuscript." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002854
name: Peer-reviewed dataset
def: "Dataset has been peer-reviewed somehow." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002855
name: Non peer-reviewed dataset
def: "Dataset that has not been peer-reviewed by any means." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002856
name: Supported dataset by repository
def: "Dataset for which the identifications and/or spectra/traces are in formats that can be parsed by the hosting data repository such that internal references between identifications and spectra/traces are preserved and browsable at the repository. This is usually called a complete submission." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002857
name: Unsupported dataset by repository
def: "Dataset for which the identifications and/or spectra/traces are in formats that cannot be parsed by the hosting data repository and thus internal references between identifications and spectra/traces are not browsable at the repository. This is usually called a partial submission." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002858
name: Dataset with its publication pending
def: "A dataset which has an associated manuscript pending for publication." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002859
name: Additional associated raw file URI
def: "Additional URI of one raw data file associated to the PRIDE experiment (maybe through a PX submission). The URI is provided via an additional resource to PRIDE." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002860
name: Gel image file URI
def: "URI of one gel image file associated to one PX submission." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002845 ! Associated file URI
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002861
name: Reprocessed complete dataset
def: "All the raw files included in the original dataset (or group of original datasets) have been reanalysed." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002844 ! Experiment additional parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002862
name: Reprocessed subset dataset
def: "A subset of the raw files included in the original dataset (or group of original datasets) has been reanalysed." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002844 ! Experiment additional parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002863
name: Data derived from previous dataset
def: "One dataset is a reanalysis of previously published data." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002864
name: No PTMs are included in the dataset
def: "No post-translational-modifications are been included in the identified peptides of one dataset." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002865
name: Accepted manuscript
def: "A dataset has one associated manuscript, which has been accepted but no PubMedID is available yet." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002866
name: Reference
def: "Literature reference associated with one dataset (including the authors, title, year and journal details). The value field can be used for the PubMedID, or to specify if one manuscript is just submitted or accepted, but it does not have a PubMedID yet." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002844 ! Experiment additional parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002867
name: Experimental information has been refined since this experiment was originally made publicly available
def: "This means that the experimental information available has been improved, for instance precursor charges were added." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002868
name: Original data
def: "One dataset is not a reanalysis of previously published data." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1002869
name: mzR
def: "Bioconductor package mzR for reading and writing mass spectrometry data files." [PSI:PI]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002870
name: MSnbase
def: "Bioconductor package MSnbase provides infrastructure for manipulation, processing and visualization of mass spectrometry and proteomics data, ranging from raw to quantitative and annotated data." [PMID:22113085]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002871
name: CAMERA
def: "Bioconductor package CAMERA for annotation of peak lists generated by xcms, rule based annotation of isotopes and adducts, isotope validation, EIC correlation based tagging of unknown adducts and fragments." [PMID:22111785]
is_a: MS:1001456 ! analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002872
name: Panorama Public dataset identifier
def: "Dataset identifier issued by the Panorama Public repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002873
name: Panorama Public dataset URI
def: "URI that allows the access to one dataset in the Panorama Public repository. A dataset can refer to either a single sample as part of a study, or all samples that are part of the study corresponding to a publication." [PSI:PI]
xref: value-type:xsd\:anyURI "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:anyURI ! The allowed value-type for this CV term

[Term]
id: MS:1002874
name: TSQ Altis
def: "Thermo Scientific TSQ Altis Triple Quadrupole MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002875
name: TSQ Quantis
def: "Thermo Scientific TSQ Quantis Triple Quadrupole MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002876
name: TSQ 9000
def: "Thermo Scientific TSQ 9000 Triple Quadrupole MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002877
name: Q Exactive HF-X
def: "Thermo Scientific Q Exactive HF-X Hybrid Quadrupole Orbitrap MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1002878
name: small molecule analysis software
def: "Software for the analysis of small molecules." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002879
name: Progenesis QI
def: "Metabolomics analysis software for LC-MS data from Nonlinear Dynamics." [PSI:PI]
is_a: MS:1002878 ! small molecule analysis software

[Term]
id: MS:1002880
name: Compound Discoverer
def: "Metabolomics analysis software from Thermo Fisher Scientific." [PSI:PI]
is_a: MS:1002878 ! small molecule analysis software

[Term]
id: MS:1002881
name: MyCompoundID
def: "Metabolite identification tool MyCompoundID." [PSI:PI, PMID:23373753]
is_a: MS:1002878 ! small molecule analysis software

[Term]
id: MS:1002882
name: study variable average function
def: "Function used to calculate the study variable quantification value." [PSI:PI]
is_a: MS:1001184 ! search statistics

[Term]
id: MS:1002883
name: median
def: "Median function." [PSI:PI]
is_a: MS:1002882 ! study variable average function

[Term]
id: MS:1002884
name: study variable variation function
def: "Function used to calculate the study variable quantification variation value." [PSI:PI]
is_a: MS:1001184 ! search statistics

[Term]
id: MS:1002885
name: standard error
def: "Standard error function." [PSI:PI]
is_a: MS:1002884 ! study variable variation function

[Term]
id: MS:1002886
name: small molecule quantification datatype
def: "The value reported in a small molecule quantification." [PSI:PI]
is_a: MS:1001805 ! quantification datatype

[Term]
id: MS:1002887
name: Progenesis QI normalised abundance
def: "The normalised abundance produced by Progenesis QI LC-MS." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002886 ! small molecule quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002888
name: small molecule confidence measure
def: "The confidence score produced by a small molecule analysis software." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002889
name: Progenesis MetaScope score
def: "The confidence score produced by Progenesis QI." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002888 ! small molecule confidence measure
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002890
name: fragmentation score
def: "The fragmentation confidence score." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002888 ! small molecule confidence measure
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002891
name: isotopic fit score
def: "The isotopic fit confidence score." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002888 ! small molecule confidence measure
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1002892
name: ion mobility attribute
def: "An attribute describing ion mobility searches." [PSI:PI]
is_a: MS:1000503 ! scan attribute
is_a: MS:1002345 ! PSM-level attribute

[Term]
id: MS:1002893
name: ion mobility array
def: "Abstract array of ion mobility data values. A more specific child term concept should be specified in data files to make precise the nature of the data being provided." [PSI:PI]
is_a: MS:1000513 ! binary data array

[Term]
id: MS:1002894
name: InChIKey
def: "Unique chemical structure identifier for chemical compounds." [PMID:273343401]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001405 ! spectrum identification result details
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002895
name: small molecule identification attribute
def: "Compound identification information." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002896
name: compound identification confidence level
def: "Confidence level for annotation of identified compounds as defined by the Metabolomics Standards Initiative (MSI). The value slot can have the values 'Level 0' until 'Level 4'." [PMID:29748461]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002895 ! small molecule identification attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002897
name: isotopomer peak
def: "OBSOLETE Identifies a peak when no de-isotoping has been performed. The value slot reports the isotopomer peak, e.g. '2H', '13C', '15N', '18O', '31P'." [PSI:PI]
comment: This term was obsoleted because it was replaced by the more exact terms MS:1002956 'isotopic ion MS peak', MS:1002957 'isotopomer MS peak' and MS:1002958 'isotopologue MS peak' instead.
xref: value-type:xsd:string "The allowed value-type for this CV term."
is_a: MS:1000231 ! peak
is_obsolete: true
relationship: has_value_type xsd:string ! The allowed value-type for this CV term

[Term]
id: MS:1002898
name: Shimadzu Biotech QTOF nativeID format
def: "Native format defined by scan=xsd:nonNegativeInteger." [PSI:PI]
is_a: MS:1000767 ! native spectrum identifier format

[Term]
id: MS:1002899
name: msalign format
def: "msalign file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002900
name: feature format
def: "TopFD feature file format." [PSI:MS]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002901
name: TopPIC
def: "TopPIC: a software tool for top-down mass spectrometry-based proteoform identification and characterization." [PMID:27423895, http://proteomics.informatics.iupui.edu/software/toppic/index.html]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002902
name: TopFD
def: "Top-down mass spectral feature detection." [http://proteomics.informatics.iupui.edu/software/toppic/index.html]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002903
name: TopMG
def: "A mass graph-based approach for the identification of modified proteoforms using top-down tandem mass spectra." [PMID:28453668, http://proteomics.informatics.iupui.edu/software/topmg/index.html]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002904
name: proteoform-level identification attribute
def: "Proteoform level information." [PSI:PI]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1002905
name: proteoform-level identification statistic
def: "Identification confidence metric for a proteoform." [PSI:PI]
is_a: MS:1002904 ! proteoform-level identification attribute

[Term]
id: MS:1002906
name: search engine specific score for proteoforms
def: "Search engine specific proteoform scores." [PSI:PI]
is_a: MS:1002905 ! proteoform-level identification statistic

[Term]
id: MS:1002907
name: proteoform-level global FDR
def: "Estimation of the global false discovery rate of proteoforms." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002905 ! proteoform-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002908
name: proteoform-level local FDR
def: "Estimation of the local false discovery rate of proteoforms." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002905 ! proteoform-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002909
name: proteoform-level statistical threshold
def: "Estimated statistical threshold at proteoform-level." [PSI:PI]
is_a: MS:1002573 ! spectrum identification statistical threshold

[Term]
id: MS:1002910
name: proteoform-level global FDR threshold
def: "Threshold for the global false discovery rate of proteoforms." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002909 ! proteoform-level statistical threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002911
name: proteoform-level local FDR threshold
def: "Threshold for the local false discovery rate of proteoforms." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002909 ! proteoform-level statistical threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002912
name: TopPIC input parameter
def: "Search engine input parameters specific to TopPIC." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002913
name: TopPIC:fixed modification
def: "Fixed modifications for TopPIC searching." [PSI:PI]
is_a: MS:1002912 ! TopPIC input parameter

[Term]
id: MS:1002914
name: TopPIC:N-term form
def: "N-terminal forms of proteins allowed in TopPIC searching." [PSI:PI]
is_a: MS:1002912 ! TopPIC input parameter

[Term]
id: MS:1002915
name: TopPIC:error tolerance
def: "Error tolerance for precursor and fragment masses in PPM." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002916
name: TopPIC:max shift
def: "Maximum value of the mass shift (in Dalton) of an unexpected modification." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002917
name: TopPIC:min shift
def: "Minimum value of the mass shift (in Dalton) of an unexpected modification." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002918
name: TopPIC:shift num
def: "Maximum number of unexpected modifications in a proteoform spectrum match." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002919
name: TopPIC:spectral cutoff type
def: "Spectrum-level cutoff type for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002920
name: TopPIC:spectral cutoff value
def: "Spectrum-level cutoff value for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002921
name: TopPIC:proteoform-level cutoff type
def: "Proteoform-level cutoff type for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002922
name: TopPIC:proteoform-level cutoff value
def: "Proteoform-level cutoff value for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002923
name: TopPIC:generating function
def: "P-value and E-value estimation using generating function." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002924
name: TopPIC:combined spectrum number
def: "Number of combined spectra." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002925
name: TopPIC:mod file
def: "The text file containing the information of common PTMs." [PSI:PI]
is_a: MS:1002912 ! TopPIC input parameter

[Term]
id: MS:1002926
name: TopPIC:thread number
def: "Number of threads used in TopPIC." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002927
name: TopPIC:use TopFD feature
def: "Proteoform identification using TopFD feature file." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002912 ! TopPIC input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002928
name: TopPIC:spectral E-value
def: "TopPIC spectrum-level E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002353 ! PSM-level e-value
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002929
name: TopPIC:spectral FDR
def: "TopPIC spectrum-level FDR." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002351 ! PSM-level local FDR
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002930
name: TopPIC:proteoform-level FDR
def: "TopPIC proteoform-level FDR." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002908 ! proteoform-level local FDR
is_a: MS:1002906 ! search engine specific score for proteoforms
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002931
name: TopPIC:spectral p-value
def: "TopPIC spectrum-level p-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1002352 ! PSM-level p-value
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002932
name: TopPIC:MIScore
def: "Modification identification score." [PMID:27291504]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002933
name: TopPIC:MIScore threshold
def: "TopPIC:MIScore threshold." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002555 ! PTM localization score threshold
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002934
name: TopMG input parameter
def: "Search engine input parameters specific to TopMG." [PSI:PI]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1002935
name: TopMG:fixed modification
def: "Fixed modifications for TopMG searching." [PSI:PI]
is_a: MS:1002934 ! TopMG input parameter

[Term]
id: MS:1002936
name: TopMG:N-term form
def: "N-terminal forms of proteins allowed in TopMG searching." [PSI:PI]
is_a: MS:1002934 ! TopMG input parameter

[Term]
id: MS:1002937
name: TopMG:error tolerance
def: "Error tolerance for precursor and fragment masses in PPM." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002938
name: TopMG:max shift
def: "Maximum value of the mass shift (in Dalton)." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002939
name: TopMG:spectral cutoff type
def: "Spectrum-level cutoff type for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002940
name: TopMG:spectral cutoff value
def: "Spectrum-level cutoff value for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002941
name: TopMG:proteoform-level cutoff type
def: "Proteoform-level cutoff type for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002942
name: TopMG:proteoform-level cutoff value
def: "Proteoform-level cutoff value for filtering identified proteoform spectrum matches." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002943
name: TopMG:mod file
def: "The text file containing the information of common PTMs." [PSI:PI]
is_a: MS:1002934 ! TopMG input parameter

[Term]
id: MS:1002944
name: TopMG:thread number
def: "Number of threads used in TopMG." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002945
name: TopMG:use TopFD feature
def: "Proteoform identification using TopFD feature file." [PSI:PI]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002946
name: TopMG:proteoform graph gap size
def: "Gap size in constructing proteoform graph." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002947
name: TopMG:variable PTM number
def: "Maximum number of variable PTMs." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002948
name: TopMG:variable PTM number in proteoform graph gap
def: "Maximum number of variable PTMs in a proteoform graph gap." [PSI:PI]
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: MS:1002949
name: TopMG:use ASF-DIAGONAL
def: "Protein filtering using ASF-DIAGONAL method." [PMID:29327814]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1002934 ! TopMG input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1002950
name: TopMG:spectral E-value
def: "TopMG spectrum-level E-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002353 ! PSM-level e-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002951
name: TopMG:spectral FDR
def: "TopMG spectrum-level FDR." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002351 ! PSM-level local FDR
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002952
name: TopMG:proteoform-level FDR
def: "TopMG proteoform-level FDR." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002908 ! proteoform-level local FDR
is_a: MS:1002906 ! search engine specific score for proteoforms
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002953
name: TopMG:spectral p-value
def: "TopMG spectrum-level p-value." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002352 ! PSM-level p-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002954
name: collisional cross sectional area
def: "Structural molecular descriptor for the effective interaction area between the ion and neutral gas measured in ion mobility mass spectrometry." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1000861 ! molecular entity property
relationship: has_units UO:0000324 ! square angstrom
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002955
name: hr-ms compound identification confidence level
def: "Refined High Resolution mass spectrometry confidence level for annotation of identified compounds as proposed by Schymanski et al. The value slot can have the values 'Level 1', 'Level 2', 'Level 2a', 'Level 2b', 'Level 3', 'Level 4', and 'Level 5'." [PMID:24476540]
xref: value-type:xsd:string "The allowed value-type for this CV term."
is_a: MS:1002895 ! small molecule identification attribute
relationship: has_value_type xsd:string ! The allowed value-type for this CV term

[Term]
id: MS:1002956
name: isotopic ion MS peak
def: "A mass spectrometry peak that represents one or more isotopic ions. The value slot contains a description of the represented isotope set, e.g. 'M+1 peak'." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000231 ! peak
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002957
name: isotopomer MS peak
def: "The described isotopomer mass spectrometric signal. The value slot contains a description of the represented isotopomer, e.g. '13C peak', '15N peak', '2H peak', '18O peak' or '31P peak'." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002956 ! isotopic ion MS peak
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002958
name: isotopologue MS peak
def: "The described isotopologue mass spectrometric signal. The value slot contains a description of the represented isotopologue, e.g. '13C1 peak' or '15N1 peak'." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002956 ! isotopic ion MS peak
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002959
name: isomer
def: "One of several species (or molecular entities) that have the same atomic composition (molecular formula) but different line formulae or different stereochemical formulae." [https://goldbook.iupac.org/html/I/I03289.html]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000859 ! molecule
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002960
name: isotopomer
def: "An isomer that differs from another only in the spatial distribution of the constitutive isotopic atoms." [https://goldbook.iupac.org/html/I/I03352.html]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002959 ! isomer
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002961
name: isotopologue
def: "A molecular entity that differs only in isotopic composition (number of isotopic substitutions)." [https://goldbook.iupac.org/html/I/I03351.html]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002959 ! isomer
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1002962
name: mean
def: "The arithmetic mean." [PSI:PI]
is_a: MS:1002882 ! study variable average function

[Term]
id: MS:1002963
name: variation coefficient
def: "The coefficient of variation." [PSI:PI]
is_a: MS:1002884 ! study variable variation function

[Term]
id: MS:1002964
name: lipidomics analysis software
def: "Lipidomics analysis software." [PSI:PI]
is_a: MS:1002878 ! small molecule analysis software

[Term]
id: MS:1002965
name: Lipid Data Analyzer
def: "Lipid Data Analyzer software for lipid quantification." [PMID:29058722]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002966
name: chrom format
def: "The Lipid Data Analyzer native chrom format." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002967
name: LipidHunter
def: "Software for identification of phospholipids by high-throughput processing of LC-MS and shotgun lipidomics datasets." [PMID:28753264]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002968
name: LipidXplorer
def: "Software for consensual cross-platform lipidomics." [PMID:22272252]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002969
name: LipidMatch
def: "An automated workflow for rule-based lipid identification using untargeted high-resolution tandem mass spectrometry data." [PMID:28693421]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002970
name: Greazy
def: "Open-source software for automated phospholipid tandem mass spectrometry identification." [PMID:27186799]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002971
name: LipidBlast
def: "LC-MS-based lipidomics and automated identification of lipids using the LipidBlast in-silico MS/MS library." [PMID:28660581]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002972
name: Lipid-Pro
def: "A computational lipid identification solution for untargeted lipidomics on data-independent acquisition tandem mass spectrometry platforms." [PMID:25433698]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002973
name: LipidFinder
def: "A computational workflow for the discovery of lipids for the identification of eicosanoid-phosphoinositides in platelets." [PMID:28405621]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002974
name: LipiDex
def: "An integrated software package for high-confidence lipid identification." [PMID:29705063]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002975
name: LIQUID
def: "An-open source software for identifying lipids in LC-MS/MS-based lipidomics data." [PMID:28158427]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002976
name: ALEX
def: "Analysis of lipid experiments, a calculator for m/z values of intact lipid molecules (MS1)." [PMID:24244551]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002977
name: ALEX123
def: "Analysis of lipid experiments 123, a calculator with m/z values of intact lipid molecules (MS1) and their fragment ions at the MS2 and MS3 level." [PMID:29786091]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002978
name: LIMSA
def: "Software tool for the quantitative analysis of mass spectrometric lipidome data." [PMID:17165823]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002979
name: LOBSTAHS
def: "Adduct-Based lipidomics software for the discovery and identification of oxidative stress biomarkers." [PMID:27322848]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002980
name: LipidQA
def: "Lipid qualitative/quantitative analysis software for identification and quantitation of complex lipid molecular species." [PMID:17720531]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002981
name: Proline
def: "The Proline software suite for mass spectrometry based proteomics." [http://www.profiproteomics.fr/proline/]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002982
name: PepNovo
def: "PepNovo tool for de novo peptide sequencing." [PMID:15858974]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002983
name: pNovo
def: "pNovo tool for de novo peptide sequencing and identification using HCD spectra." [PMID:20329752]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002984
name: Novor
def: "Novor real-time peptide de novo sequencing software tool." [PMID:26122521]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002985
name: in-gel digestion
def: "Digestion of proteins separated by gel electrophoresis for mass spectrometric characterization of proteins and proteomes." [PSI:PI]
is_a: MS:1000831 ! sample preparation

[Term]
id: MS:1002986
name: in-solution digestion
def: "Digestion of proteins in solution for mass spectrometric characterization of proteins and proteomes." [PSI:PI]
is_a: MS:1000831 ! sample preparation

[Term]
id: MS:1002987
name: IdentiPy
def: "IdentiPy." [PMID:29682971, https://bitbucket.org/levitsky/identipy]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1002988
name: IdentiPy:RHNS
def: "The IdentiPy result 'RHNS'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002989
name: IdentiPy:hyperscore
def: "The IdentiPy result 'hyperscore'." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002990
name: ms_deisotope
def: "ms_deisotope, a library for deisotoping and charge state deconvolution of mass spectra." [https://github.com/mobiusklein/ms_deisotope]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1002991
name: python-psims
def: "python-psims, a library for generating mzML and mzIdentML." [https://github.com/mobiusklein/psims]
is_a: MS:1002333 ! conversion software

[Term]
id: MS:1002995
name: Andromeda:PEP
def: "Posterior error probability of the best identified peptide of the Andromeda search engine." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1002996
name: Andromeda:apl file format
def: "Peak list file format of the Andromeda search engine." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1002997
name: ProteomeXchange dataset identifier reanalysis number
def: "Index number of a reanalysis within a ProteomeXchange reprocessed dataset identifier container (RPXD)." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1002998
name: LCMS-9030
def: "Shimadzu Scientific Instruments LCMS-9030 Q-TOF MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1002999
name: LCMS-8060
def: "Shimadzu Scientific Instruments LCMS-8060 MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1003000
name: LCMS-8050
def: "Shimadzu Scientific Instruments LCMS-8050 MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1003001
name: LCMS-8045
def: "Shimadzu Scientific Instruments LCMS-8045 MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1003002
name: LCMS-8040
def: "Shimadzu Scientific Instruments LCMS-8040 MS." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1003003
name: LCMS-2020
def: "Shimadzu Scientific Instruments LCMS-2020." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1003004
name: maXis II
def: "Bruker Daltonics' maXis II." [PSI:MS]
is_a: MS:1001547 ! Bruker Daltonics maXis series

[Term]
id: MS:1003005
name: timsTOF Pro
def: "Bruker Daltonics' timsTOF Pro." [PSI:MS]
is_a: MS:1003123 ! Bruker Daltonics timsTOF series

[Term]
id: MS:1003006
name: mean inverse reduced ion mobility array
def: "Array of population mean ion mobility values based on ion separation in gaseous phase due to different ion mobilities under an electric field based on ion size, m/z and shape, normalized for the local conditions and reported in volt-second per square centimeter, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units MS:1002814 ! volt-second per square centimeter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003007
name: raw ion mobility array
def: "Array of raw ion mobility values (K or K0) based on ion separation in gaseous phase due to different ion mobilities under an electric field based on ion size, m/z and shape, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units UO:0000028 ! millisecond
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003008
name: raw inverse reduced ion mobility array
def: "Array of raw ion mobility values based on ion separation in gaseous phase due to different ion mobilities under an electric field based on ion size, m/z and shape, normalized for the local conditions and reported in volt-second per square centimeter, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units MS:1002814 ! volt-second per square centimeter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003009
name: Shimadzu Biotech LCD format
def: "Shimadzu Biotech LCD file format." [PSI:PI]
is_a: MS:1000560 ! mass spectrometer file format

[Term]
id: MS:1003010
name: LPPtiger
def: "Software for lipidome-specific prediction and identification of oxidized phospholipids from LC-MS datasets." [PMID:29123162]
is_a: MS:1002964 ! lipidomics analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1003011
name: pFind
def: "Sequence-tag-based search engine pFind." [PMID:30295672]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003012
name: KSDP score
def: "Kernel mass spectral dot product scoring function." [PMID:15044235]
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better

[Term]
id: MS:1003013
name: i3tms
def: "i3-tms search engine and data-analysis software." [PSI:PI]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003014
name: MSFragger
def: "A database search-based peptide identification tool." [PMID:28394336]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003015
name: razor peptide
def: "Peptide that is shared between protein groups and assigned to the protein group with the largest number of identified peptides." [PSI:MS]
is_a: MS:1000860 ! peptide

[Term]
id: MS:1003016
name: ProteinProphet:peptide weight
def: "Fraction of peptide evidence attributable to a protein or a set of indistinguishable proteins." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002490 ! peptide-level scoring
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003017
name: ProteinProphet:peptide group weight
def: "Fraction of peptide evidence attributable to a group of proteins." [PSI:PI]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002490 ! peptide-level scoring
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003018
name: Philosopher
def: "General proteomics processing toolkit for shotgun proteomics." [https://philosopher.nesvilab.org/]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003019
name: pressure chromatogram
def: "Representation of chromatographic pressure versus time." [PSI:MS]
is_a: MS:1000626 ! chromatogram type

[Term]
id: MS:1003020
name: flow rate chromatogram
def: "Representation of the chromatographic flow rate versus time." [PSI:MS]
is_a: MS:1000626 ! chromatogram type

[Term]
id: MS:1003021
name: Fixed modification
def: "Post-translational modification which is assumed to be present at each instance of a residue type." [PSI:PI]
is_a: MS:1001055 ! modification parameters
is_a: MS:1003026 ! named element in mzIdentML

[Term]
id: MS:1003022
name: Variable modification
def: "Post-translational modification which may or may not be present at a residue type." [PSI:PI]
is_a: MS:1001055 ! modification parameters
is_a: MS:1003026 ! named element in mzIdentML

[Term]
id: MS:1003023
name: OpenPepXL
def: "Cross-Linking MS search engine." [PSI:PI]
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1003024
name: OpenPepXL:score
def: "The OpenPepXL score for a cross-link spectrum match." [PSI:PI]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
is_a: MS:1001153 ! search engine specific score
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003025
name: named element
def: "A named element that is an attribute in a proteomics standards file." [PSI:PI]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: MS:1003026
name: named element in mzIdentML
def: "A named element that is an attribute in a mzIdentML file." [PSI:PI]
is_a: MS:1003025 ! named element

[Term]
id: MS:1003027
name: named element in mzML
def: "A named element that is an attribute in a mzML file." [PSI:PI]
is_a: MS:1003025 ! named element

[Term]
id: MS:1003028
name: Orbitrap Exploris 480
def: "Thermo Scientific Orbitrap Exploris 480 Quadrupole Orbitrap MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1003029
name: Orbitrap Eclipse
def: "Thermo Scientific Orbitrap Eclipse mass spectrometer with Tribrid architecture consisting of quadrupole mass filter, linear ion trap and Orbitrap mass analyzers." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1003030
name: Mascot:MinNumSigUniqueSeqs
def: "Minimum number of significant unique sequences required in a protein hit. The setting is only relevant if the protein grouping strategy is 'family clustering'." [PSI:PI]
xref: value-type:xsd\:nonNegativeInteger "The allowed value-type for this CV term."
is_a: MS:1002095 ! Mascot input parameter
relationship: has_value_type xsd\:nonNegativeInteger ! The allowed value-type for this CV term

[Term]
id: MS:1003031
name: CPTAC accession number
def: "Main identifier of a CPTAC dataset." [PSI:PI]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000878 ! external reference identifier
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003032
name: compound identification confidence code in MS-DIAL
def: "The confidence code to describe the confidence of annotated compounds as defined by the MS-DIAL program." [PMID:25938372, http://prime.psc.riken.jp/Metabolomics_Software/MS-DIAL]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1002895 ! small molecule identification attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003033
name: molecular entity attribute
def: "Non-inherent characteristic attributed to a molecular entity." [PSI:PI]
relationship: part_of MS:1000881 ! molecular entity

[Term]
id: MS:1003034
name: atom
def: "Smallest constituent unit of ordinary matter that constitutes a chemical element." [https://en.wikipedia.org/wiki/Atom]
is_a: MS:1000881 ! molecular entity

[Term]
id: MS:1003035
name: small molecule
def: "Low molecular weight (< 900 daltons) organic compound that may regulate a biological process." [https://en.wikipedia.org/wiki/Small_molecule]
is_a: MS:1000859 ! molecule

[Term]
id: MS:1003036
name: metabolite
def: "Small molecule that is the intermediate end product of metabolism." [https://en.wikipedia.org/wiki/Metabolite]
is_a: MS:1003035 ! small molecule

[Term]
id: MS:1003037
name: ribonucleotide
def: "Nucleotide containing ribose as its pentose component." [https://en.wikipedia.org/wiki/Ribonucleotide]
is_a: MS:1003035 ! small molecule

[Term]
id: MS:1003038
name: deoxyribonucleotide
def: "Monomer, or single unit, of DNA, or deoxyribonucleic acid." [https://en.wikipedia.org/wiki/Deoxyribonucleotide]
is_a: MS:1003035 ! small molecule

[Term]
id: MS:1003039
name: amino acid
def: "Organic molecule that contains amine (-NH2) and carboxyl (-COOH) functional groups, along with a side chain (R group) that is specific to each amino acid." [https://en.wikipedia.org/wiki/Amino_acid]
is_a: MS:1003035 ! small molecule

[Term]
id: MS:1003040
name: monosaccharide
def: "Simplest form of sugar and the most basic units of carbohydrate that cannot be further hydrolyzed to a simpler molecule." [https://en.wikipedia.org/wiki/Monosaccharide]
is_a: MS:1003035 ! small molecule

[Term]
id: MS:1003041
name: nucleic acid
def: "Molecule composed of a chain of nucleotides." [https://en.wikipedia.org/wiki/Nucleic_acid]
is_a: MS:1000859 ! molecule

[Term]
id: MS:1003042
name: polysaccharide
def: "Polymeric carbohydrate molecules composed of long chains of monosaccharide units bound together by glycosidic linkages." [https://en.wikipedia.org/wiki/Polysaccharide]
is_a: MS:1000859 ! molecule

[Term]
id: MS:1003043
name: number of residues
def: "Number of amino acid residues in a peptide, commonly referred to as the peptide length." [PSI:PI]
is_a: MS:1000887 ! peptide attribute

[Term]
id: MS:1003044
name: number of missed cleavages
def: "Number of amino acid residue bonds that should have been cleaved by the cleavage agent used, but were not." [PSI:PI]
is_a: MS:1000887 ! peptide attribute

[Term]
id: MS:1003045
name: peptide-to-protein mapping
def: "Process of mapping a peptide sequence to a protein sequence." [PSI:PI]
is_a: MS:1000887 ! peptide attribute

[Term]
id: MS:1003046
name: peptide-to-protein mapping attribute
def: "Nonphysical characteristic attributed to the result of peptide-to-protein mapping." [PSI:PI]
is_a: MS:1003045 ! peptide-to-protein mapping

[Term]
id: MS:1003047
name: protein sequence offset
def: "Offset in number of residues from the n terminus of the protein at which the peptide begins. Use 1 when the first residue of the peptide sequence is the first residue of the protein sequence." [PSI:PI]
is_a: MS:1003046 ! peptide-to-protein mapping attribute

[Term]
id: MS:1003048
name: number of enzymatic termini
def: "Total number of termini that match standard rules for the cleavage agent, 2 when both termini match cleavage agent rules, 1 when only one terminus does, and 0 if neither terminus matches cleavage agent rules." [PSI:PI]
is_a: MS:1003046 ! peptide-to-protein mapping attribute

[Term]
id: MS:1003049
name: peptidoform
def: "Peptide that contains zero or more mass modifications on the termini or side chains of its amino acid residues, and may be differentiated from other peptidoforms with the same peptide sequence but different mass modification configurations." [PSI:PI]
is_a: MS:1000860 ! peptide

[Term]
id: MS:1003050
name: peptidoform attribute
def: "Non-inherent characteristic attributed to a peptidoform." [PSI:PI]
relationship: part_of MS:1003049 ! peptidoform

[Term]
id: MS:1003051
name: peptidoform ion
def: "Peptidoform that has formed an adduct with an ion, thereby rendering it potentially detectable with a mass spectrometer. Commonly called a 'precursor' or 'precursor ion' or 'parent ion'." [PSI:PI]
is_a: MS:1003049 ! peptidoform
synonym: "precursor" RELATED []
synonym: "precursor ion" RELATED []
synonym: "parent ion" RELATED []

[Term]
id: MS:1003052
name: peptidoform ion property
def: "Inherent or measurable characteristic of a peptidoform ion." [PSI:PI]
relationship: part_of MS:1003051 ! peptidoform ion

[Term]
id: MS:1003053
name: theoretical monoisotopic m/z
def: "Mass-to-charge ratio of a peptidoform ion composed of the most common isotope of each atom computed from the putative knowledge of its molecular constituents." [PSI:PI]
is_a: MS:1003052 ! peptidoform ion property

[Term]
id: MS:1003054
name: theoretical average m/z
def: "Mass-to-charge ratio of a peptidoform ion computed from the putative knowledge of its molecular constituents, averaged over the distribution of naturally occurring isotopes." [PSI:PI]
is_a: MS:1003052 ! peptidoform ion property

[Term]
id: MS:1003055
name: adduct
def: "Product of a direct addition of two or more distinct molecules, resulting in a single reaction product containing all atoms of all components. The resultant is considered a distinct molecular species." [https://en.wikipedia.org/wiki/Adduct]
is_a: MS:1000859 ! molecule

[Term]
id: MS:1003056
name: adduct ion property
def: "Physical measurable characteristic of an adduct ion." [PSI:PI]
relationship: part_of MS:1000353 ! adduct ion

[Term]
id: MS:1003057
name: scan number
def: "Ordinal number of the scan indicating its order of acquisition within a mass spectrometry acquisition run." [PSI:PI]
is_a: MS:1000503 ! scan attribute

[Term]
id: MS:1003058
name: spectrum property
def: "Inherent or measurable characteristic of a spectrum." [PSI:PI]
relationship: part_of MS:1000442 ! spectrum

[Term]
id: MS:1003059
name: number of peaks
def: "Number of peaks or features in a spectrum. For a peak-picked spectrum, this will correspond to the number of data points. For a non-peak-picked spectrum, this corresponds to the number of features discernable in the spectrum, which will be fewer than the number of data points." [PSI:PI]
is_a: MS:1003058 ! spectrum property

[Term]
id: MS:1003060
name: number of data points
def: "Number of data points in a spectrum. For a peak-picked spectrum, this will correspond to the number of peaks. For a non-peak-picked spectrum, this corresponds to the number of values in the data array, which are not all peaks." [PSI:PI]
is_a: MS:1003058 ! spectrum property

[Term]
id: MS:1003061
name: spectrum name
def: "Label attached to a spectrum uniquely naming it within a collection of spectra, often in a spectral library. It is often a string combination of peptide sequence, charge, mass modifications, collision energy, but will obviously be different for small molecules or unidentified spectra. It must be unique within a collection." [PSI:PI]
is_a: MS:1000499 ! spectrum attribute

[Term]
id: MS:1003062
name: spectrum index
def: "Integer index value associated with a spectrum within a collection of spectra, often in a spectral library. By custom, index counters should begin with 0." [PSI:PI]
is_a: MS:1000499 ! spectrum attribute

[Term]
id: MS:1003063
name: universal spectrum identifier
def: "PSI universal spectrum identifier (USI) multipart key that uniquely identifies a spectrum available in a ProteomeXchange datasets or spectral library." [PSI:PI]
is_a: MS:1000499 ! spectrum attribute

[Term]
id: MS:1003064
name: spectrum aggregation attribute
def: "Non-inherent characteristic attributed to spectrum aggregation." [PSI:PI]
is_a: MS:1000499 ! spectrum attribute

[Term]
id: MS:1003065
name: spectrum aggregation type
def: "Categorization of a spectrum based on its type of aggregation (e.g., individual spectrum, consensus spectrum, best replicate spectrum, etc.)." [PSI:PI]
is_a: MS:1003064 ! spectrum aggregation attribute

[Term]
id: MS:1003066
name: singleton spectrum
def: "Spectrum that is not the result of some aggregation process." [PSI:PI]
is_a: MS:1003065 ! spectrum aggregation type

[Term]
id: MS:1003067
name: consensus spectrum
def: "Spectrum that is the result of merging several replicate spectra to form a spectrum that is more representative of its class and ideally less noisy that any of its source replicates." [PSI:PI]
is_a: MS:1003065 ! spectrum aggregation type

[Term]
id: MS:1003068
name: best replicate spectrum
def: "Spectrum that is considered the most representative from a pool of replicate spectra." [PSI:PI]
is_a: MS:1003065 ! spectrum aggregation type

[Term]
id: MS:1003069
name: number of replicate spectra available
def: "Number of replicate spectra available for use during the aggregation process." [PSI:PI]
is_a: MS:1003064 ! spectrum aggregation attribute

[Term]
id: MS:1003070
name: number of replicate spectra used
def: "Number of replicate spectra used during the aggregation process. This is generally applicable when there are many replicates available, but some are discarded as being low S/N, blended, or otherwise unsuitable, and the remaining set is then used for merging via a consensus algorithm." [PSI:PI]
is_a: MS:1003064 ! spectrum aggregation attribute

[Term]
id: MS:1003071
name: spectrum origin attribute
def: "Non-inherent characteristic attributed to spectrum aggregation." [PSI:PI]
is_a: MS:1000499 ! spectrum attribute

[Term]
id: MS:1003072
name: spectrum origin type
def: "Categorization of a spectrum based on its origin (e.g., observed spectrum, predicted spectrum, demultiplexed spectrum, etc.)." [PSI:PI]
is_a: MS:1003071 ! spectrum origin attribute

[Term]
id: MS:1003073
name: observed spectrum
def: "Spectrum that originates from an analysis attempt of a single analyte species on an instrument." [PSI:PI]
is_a: MS:1003072 ! spectrum origin type

[Term]
id: MS:1003074
name: predicted spectrum
def: "Spectrum that originates from a compututational algorithm that attempts to predict spectra." [PSI:PI]
is_a: MS:1003072 ! spectrum origin type

[Term]
id: MS:1003075
name: demultiplexed spectrum
def: "Spectrum that originates from an attempted extraction of a single ion spieces from a multiplexed spectrum that contains multiple ion species." [PSI:PI]
is_a: MS:1003072 ! spectrum origin type

[Term]
id: MS:1003076
name: uninterpreted spectrum
def: "Spectrum provided in the form of plain numerical values without any information pertaining to the interpretation of features." [PSI:PI]
is_a: MS:1000442 ! spectrum

[Term]
id: MS:1003077
name: interpreted spectrum
def: "Spectrum provided in a form where specific features of the spectrum are interpreted to provide putative explanations for some feature." [PSI:PI]
is_a: MS:1000442 ! spectrum

[Term]
id: MS:1003078
name: interpreted spectrum attribute
def: "Non-inherent characteristic attributed to an interpreted spectrum." [PSI:PI]
relationship: part_of MS:1003077 ! interpreted spectrum

[Term]
id: MS:1003079
name: total unassigned intensity fraction
def: "Fraction of intensity summed from all unassigned peaks divided by the intensity summed from all peaks in the spectrum." [PSI:PI]
is_a: MS:1003078 ! interpreted spectrum attribute

[Term]
id: MS:1003080
name: top 20 peak unassigned intensity fraction
def: "Fraction of intensity summed from unassigned peaks among the top 20 divided by the intensity summed from all top 20 peaks in the spectrum." [PSI:PI]
is_a: MS:1003078 ! interpreted spectrum attribute

[Term]
id: MS:1003081
name: unidentified modification monoisotopic mass delta
def: "Monoisotopic mass delta in Daltons of an amino acid residue modification whose atomic composition or molecular identity has not been determined. This term should not be used for modifications of known molecular identity such as those available in Unimod, RESID or PSI-MOD. This term MUST NOT be used inside the <Modification> element in mzIdentML." [PSI:PI]
is_a: MS:1001471 ! peptide modification details
xref: value-type:xsd\:double "The allowed value-type for this CV term."
relationship: has_units UO:0000221 ! dalton
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003082
name: MS-DIAL
def: "Data processing software for untargeted metabolomics and lipidomics that supports multiple instruments and MS vendors." [PMID:25938372]
is_a: MS:1002878 ! small molecule analysis software
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1003083
name: raw data file
def: "Data file that contains original data as generated by an instrument, although not necessarily in the original data format (i.e. an original raw file converted to a different format is still a raw data file)." [PSI:MS]
is_a: MS:1000577 ! source data file

[Term]
id: MS:1003084
name: processed data file
def: "File that contains data that has been substantially processed or transformed from what was originally acquired by an instrument." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000577 ! source data file
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003085
name: previous MSn-1 scan precursor intensity
def: "Intensity of the precursor ion in the previous MSn-1 scan (prior in time to the referencing MSn scan). For an MS2 scan, this means the MS1 precursor intensity. It is unspecified on whether this is an apex (across m/z) intensity, integrated (across m/z) intensity, a centroided peak intensity of unknown origin, or even summed across several isotopes." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001141 ! intensity of precursor ion
is_a: MS:1000499 ! spectrum attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003086
name: precursor apex intensity
def: "Intensity of the precursor ion current as measured by its apex point over time and m/z. It is unspecified whether this is the intensity of the selected isotope or the most intense isotope." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1001141 ! intensity of precursor ion
is_a: MS:1000499 ! spectrum attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003087
name: supported by repository but incomplete data and/or metadata
def: "Dataset for which the identifications and/or spectra/traces are in formats that can be parsed by the hosting data repository such that internal references between identifications and spectra/traces are preserved and browsable at the repository. However, some metadata is not properly described due to lack of CV terms or some auxiliary data, such as data used to create a spectral library or a sequence search database crucial to the analysis, is not available." [PSI:PI]
is_a: MS:1002844 ! Experiment additional parameter

[Term]
id: MS:1003088
name: truncation and zlib compression
def: "Data array compression using mantissa bit truncation followed by zlib compression." [https://github.com/biospi/pwiz]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1003089
name: truncation, delta prediction and zlib compression
def: "Data array compression using mantissa bit truncation, delta prediction and zlib compression." [https://github.com/biospi/pwiz]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1003090
name: truncation, linear prediction and zlib compression
def: "Data array compression using mantissa bit truncation, linear prediction and zlib compression." [https://github.com/biospi/pwiz]
is_a: MS:1000572 ! binary data compression type

[Term]
id: MS:1003091
name: binary data compression parameter
def: "Settable parameter for a binary data compression event." [PSI:MS]
relationship: part_of MS:1000442 ! spectrum
relationship: part_of MS:1000625 ! chromatogram

[Term]
id: MS:1003092
name: number of mantissa bits truncated
def: "Number of extraneous mantissa bits truncated to improve subsequent compression." [PSI:MS]
xref: value-type:xsd\:positiveInteger "Number of mantissa bits truncated."
is_a: MS:1003091 ! binary data compression parameter
relationship: has_value_type xsd\:positiveInteger ! The allowed value-type for this CV term

[Term]
id: MS:1003093
name: Lys-N
def: "Metalloendopeptidase found in the mushroom Grifola frondosa that cleaves proteins on the amino side of lysine residues." [https://en.wikipedia.org/wiki/Lys-N]
is_a: MS:1001045 ! cleavage agent name
relationship: has_regexp MS:1001335 ! (?=K)

[Term]
id: MS:1003094
name: Orbitrap Exploris 240
def: "Thermo Scientific Orbitrap Exploris 240 Quadrupole Orbitrap MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1003095
name: Orbitrap Exploris 120
def: "Thermo Scientific Orbitrap Exploris 120 Quadrupole Orbitrap MS." [PSI:PI]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1003096
name: LTQ Orbitrap Velos Pro
def: "Thermo Scientific LTQ Orbitrap Velos Pro, often just referred to as the Orbitrap Velos Pro." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1003097
name: MaxQuant protein group-level score
def: "The probability based MaxQuant protein group score." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002368 ! search engine specific score for protein groups
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003098
name: Andromeda peptide PEP
def: "Peptide probability from Andromeda." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003099
name: MaxQuant-DIA peptide PEP
def: "Peptide probability from MaxQuant-DIA algorithm." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003100
name: MaxQuant-DIA score
def: "PSM evidence score from MaxQuant-DIA algorithm." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003101
name: MaxQuant-DIA PEP
def: "PSM evidence PEP probability from MaxQuant-DIA algorithm." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003102
name: NIST msp comment
def: "Term for a comment field withing the NIST msp file format" [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000499 ! spectrum attribute
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003103
name: ion interpretation format
def: "Interpretation format used for annotating individual spectrum ion peaks." [PSI:MS]
is_a: MS:1003078 ! interpreted spectrum attribute

[Term]
id: MS:1003104
name: peptide ion interpretation format
def: "Interpretation format designed primarily for peptides, with allowances for generic chemical formulas and other miscellaneous named ions." [PSI:MS]
is_a: MS:1003103 ! ion interpretation format

[Term]
id: MS:1003105
name: cross-linked peptide ion interpretation format
def: "Interpretation format designed specifically for cross-linked peptide ion peaks." [PSI:MS]
is_a: MS:1003103 ! ion interpretation format

[Term]
id: MS:1003106
name: glycan ion interpretation format
def: "Interpretation format designed specifically for glycan ion peaks." [PSI:MS]
is_a: MS:1003103 ! ion interpretation format

[Term]
id: MS:1003107
name: lipid ion interpretation format
def: "Interpretation format designed specifically for lipid ion peaks." [PSI:MS]
is_a: MS:1003103 ! ion interpretation format

[Term]
id: MS:1003108
name: PatternLab
def: "PatternLab for Proteomics is an integrated computational environment for analyzing shotgun proteomic data." [PSI:MS]
is_a: MS:1001139 ! quantitation software name
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003109
name: SIM-XL
def: "Identifying cross-linked peptides in complex protein mixtures" [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003110
name: SIM-XL score
def: "SIM-XL identification search engine score" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003111
name: QUIN-XL
def: "Quantification of cross-linked peptides in complex protein mixtures" [PSI:MS]
is_a: MS:1001139 ! quantitation software name

[Term]
id: MS:1003112
name: Orbitrap ID-X
def: "Thermo Scientific Orbitrap ID-X mass spectrometer with Tribrid architecture consisting of quadrupole mass filter, linear ion trap and Orbitrap mass analyzers." [PSI:MS]
is_a: MS:1000494 ! Thermo Scientific instrument model

[Term]
id: MS:1003113
name: OpenMS:ConsensusID PEP
def: "The OpenMS ConsesusID tool posterior error probability" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003114
name: OpenMS:Best PSM Score
def: "The score of the best PSM selected by the underlying identification tool" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003115
name: OpenMS:Target-decoy PSM q-value
def: "The OpenMS Target-decoy q-values at PSM level" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003116
name: OpenMS:Target-decoy peptide q-value
def: "The OpenMS Target-decoy q-values at peptide sequence level" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002358 ! search engine specific peptide sequence-level identification statistic
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003117
name: OpenMS:Target-decoy protein q-value
def: "The OpenMS Target-decoy q-values at protein level" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003118
name: EPIFANY
def: "A Method for Efficient High-Confidence Protein Inference. The tool is part of the OpenMS framework" [PSI:MS]
is_a: MS:1001456 ! analysis software
is_a: MS:1000752 ! TOPP software

[Term]
id: MS:1003119
name: EPIFANY:Protein posterior probability
def: "Protein Posterior probability calculated by EPIFANY protein inference algorithm" [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002363 ! search engine specific score for proteins
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003120
name: OpenMS:LFQ intensity
def: "The data type LFQ intensity produced by OpenMS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003121
name: OpenMS:LFQ spectral count
def: "The data type LFQ spectral count produced by OpenMS." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001805 ! quantification datatype
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003122
name: rapifleX
def: "Bruker Daltonics' rapiflex: MALDI TOF/TOF." [PSI:MS]
is_a: MS:1001534 ! Bruker Daltonics flex series

[Term]
id: MS:1003123
name: Bruker Daltonics timsTOF series
def: "Bruker Daltonics timsTOF series" [PSI:MS]
is_a: MS:1000122 ! Bruker Daltonics instrument model

[Term]
id: MS:1003124
name: timsTOF fleX
def: "Bruker Daltonics' timsTOF fleX" [PSI:MS]
is_a: MS:1003123 ! Bruker Daltonics timsTOF series

[Term]
id: MS:1003125
name: ProSight:spectral Q-value
def: "ProSight spectrum-level Q-value." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002354 ! PSM-level q-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003126
name: ProSight:spectral P-score
def: "ProSight spectrum-level P-score." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003127
name: ProSight:spectral E-value
def: "ProSight spectrum-level E-value." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002353 ! PSM-level e-value
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003128
name: ProSight:spectral C-score
def: "ProSight spectrum-level C-score." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001143 ! PSM-level search engine specific statistic
relationship: has_order MS:1002108 ! higher score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003129
name: proteoform-level Q-value
def: "Estimation of the Q-value for proteoforms." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1002905 ! proteoform-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003130
name: ProSight:proteoform Q-value
def: "ProSight proteoform-level Q-value." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1003129 ! proteoform-level Q-value
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003131
name: isoform-level identification attribute
def: "Isoform level information." [PSI:MS]
is_a: MS:1002694 ! single identification result attribute

[Term]
id: MS:1003132
name: isoform-level identification statistic
def: "Identification confidence metric for a isoform." [PSI:MS]
is_a: MS:1003131 ! isoform-level identification attribute

[Term]
id: MS:1003133
name: isoform-level Q-value
def: "Estimation of the Q-value for isoforms." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1003132 ! isoform-level identification statistic
relationship: has_domain MS:1002305 ! value between 0 and 1 inclusive
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003134
name: ProSight:isoform Q-value
def: "ProSight isoform-level Q-value." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1003133 ! isoform-level Q-value
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003135
name: ProSight:protein Q-value
def: "ProSight protein-level Q-value." [PSI:MS]
xref: value-type:xsd\:double "The allowed value-type for this CV term."
is_a: MS:1001869 ! protein-level q-value
relationship: has_order MS:1002109 ! lower score better
relationship: has_value_type xsd\:double ! The allowed value-type for this CV term

[Term]
id: MS:1003136
name: ProSight input parameter
def: "Search engine input parameters specific to ProSight." [PSI:MS]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1003137
name: TDPortal input parameter
def: "Search engine input parameters specific to TDPortal." [PSI:MS]
is_a: MS:1001302 ! search engine specific input parameter

[Term]
id: MS:1003138
name: ProSight:Run delta m mode
def: "If true, runs delta m mode in ProSight." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1003136 ! ProSight input parameter
is_a: MS:1003137 ! TDPortal input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1003139
name: ProSight:Run Subsequence Search mode
def: "If true, runs Subsequence Search mode in ProSight." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1003136 ! ProSight input parameter
is_a: MS:1003137 ! TDPortal input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1003140
name: ProSight:Run Annotated Proteoform Search mode
def: "If true, runs Annotated Proteoform Search mode in ProSight." [PSI:MS]
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
is_a: MS:1003136 ! ProSight input parameter
is_a: MS:1003137 ! TDPortal input parameter
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: MS:1003141
name: ProSight
def: "ProSight: Database search engine for top-down proteomics." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003142
name: TDPortal
def: "TDPortal: Database search engine for top-down proteomics." [PSI:MS]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003143
name: mass array
def: "A data array of mass values." [PSI:MS]
xref: binary-data-type:MS\:1000521 "32-bit float"
xref: binary-data-type:MS\:1000523 "64-bit float"
is_a: MS:1000513 ! binary data array
relationship: has_units UO:0000221 ! dalton

[Term]
id: MS:1003144
name: Triple Quad 7500
def: "SCIEX Triple Quad 7500." [PSI:MS]
is_a: MS:1000121 ! SCIEX instrument model

[Term]
id: MS:1003145
name: ThermoRawFileParser
def: "Cross-platform software to convert Thermo RAW files to a number of open formats." [DOI:10.1021/acs.jproteome.9b00328, PMID:31755270]
is_a: MS:1001457 ! data processing software

[Term]
id: MS:1003146
name: pyteomics
def: "Python module that helps handling various proteomics data analysis tasks." [DOI:10.1021/acs.jproteome.8b00717, PMID:30576148]
is_a: MS:1001456 ! analysis software

[Term]
id: MS:1003147
name: PTMProphet probability
def: "Probability that one mass modification has been correctly localized to a specific residue as computed by PTMProphet." [DOI:10.1021/acs.jproteome.9b00205, PMID:31290668]
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring

[Term]
id: MS:1003148
name: PTMProphet mean best probability
def: "PSM-specific average of the m best site probabilities over all potential sites where m is the number of modifications of a specific type, as computed by PTMProphet." [DOI:10.1021/acs.jproteome.9b00205, PMID:31290668]
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring

[Term]
id: MS:1003149
name: PTMProphet normalized information content
def: " PTMProphet-computed PSM-specific normalized (0.0 – 1.0) measure of information content across all modifications of a specific type." [DOI:10.1021/acs.jproteome.9b00205, PMID:31290668]
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring

[Term]
id: MS:1003150
name: PTMProphet information content
def: " PTMProphet-computed PSM-specific measure of information content per modification type ranging from 0 to m, where m is the number of modifications of a specific type." [DOI:10.1021/acs.jproteome.9b00205, PMID:31290668]
is_a: MS:1001968 ! PTM localization PSM-level statistic
relationship: has_regexp MS:1002505 ! regular expression for modification localization scoring

[Term]
id: MS:1003151
name: SHA-256
def: "SHA-256 (member of Secure Hash Algorithm-2 family) is a cryptographic hash function designed by the National Security Agency (NSA) and published by the NIST as a U. S. government standard. It is also used to verify file integrity." [PSI:MS]
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_a: MS:1000561 ! data file checksum type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: MS:1003152
name: GCMS-QP2010SE
def: "Shimadzu Scientific Instruments GCMS-QP2010SE." [PSI:MS]
is_a: MS:1000603 ! Shimadzu Scientific Instruments instrument model

[Term]
id: MS:1003153
name: raw ion mobility drift time array
def: "Array of raw ion mobility values from a drift time device, reported in seconds (or milliseconds), corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units UO:0000028 ! millisecond
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003154
name: deconvoluted ion mobility array
def: "Array of ion mobility values (K or K0) based on ion separation in gaseous phase due to different ion mobilities under an electric field based on ion size, m/z and shape, as an average property of an analyte post peak-detection, weighted charge state reduction, and/or adduct aggregation, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units UO:0000028 ! millisecond
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003155
name: deconvoluted inverse reduced ion mobility array
def: "Array of ion mobility values based on ion separation in gaseous phase due to different ion mobilities under an electric field based on ion size, m/z and shape, normalized for the local conditions and reported in volt-second per square centimeter, as an average property of an analyte post peak-detection, weighted charge state reduction, and/or adduct aggregation, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units MS:1002814 ! volt-second per square centimeter
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003156
name: deconvoluted ion mobility drift time array
def: "Array of mean ion mobility values from a drift time device, reported in seconds (or milliseconds), as an average property of an analyte post peak-detection, weighted charge state reduction, and/or adduct aggregation, corresponding to a spectrum of individual peaks encoded with an m/z array." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1002893 ! ion mobility array
relationship: has_units UO:0000028 ! millisecond
relationship: has_units UO:0000010 ! second
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003157
name: scanning quadrupole position lower bound m/z array
def: "Array of m/z values representing the lower bound m/z of the quadrupole position at each point in the spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000513 ! binary data array
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003158
name: scanning quadrupole position upper bound m/z array
def: "Array of m/z values representing the upper bound m/z of the quadrupole position at each point in the spectrum." [PSI:MS]
xref: value-type:xsd\:float "The allowed value-type for this CV term."
is_a: MS:1000513 ! binary data array
relationship: has_units MS:1000040 ! m/z
relationship: has_value_type xsd\:float ! The allowed value-type for this CV term

[Term]
id: MS:1003159
name: isolation window full range
def: "Indicates an acquisition mode in which the isolation window is a full range, rather than a subset of the full range." [PSI:MS]
is_a: MS:1000792 ! isolation window attribute

[Term]
id: MS:1003160
name: mzQC format
def: "Proteomics Standards Initiative mzQC format for quality control data." [PSI:MS]
is_a: MS:1003161 ! quality control data format

[Term]
id: MS:1003161
name: quality control data format
def: "Grouping term for quality control data formats." [PSI:MS]
is_a: MS:1001459 ! file format

[Term]
id: MS:1003162
name: PTX-QC
def: "Proteomics (PTX) - QualityControl (QC) software for QC report generation and visualization." [DOI:10.1021/acs.jproteome.5b00780, PMID:26653327, https://github.com/cbielow/PTXQC/]
is_a: MS:1001456 ! analysis software
synonym: "PTXQC" EXACT []

[Term]
id: MS:1003163
name: analyte mixture members
def: "The set of analyte identifiers that compose an interpretation of a spectrum." [PSI:PI]
is_a: MS:1003078 ! interpreted spectrum attribute
relationship: has_value_type MS:1002712 ! list of integers

[Term]
id: MS:1003164
name: QuaMeter IDFree
def: "QuaMeter IDFree software for QC metric calculation." [DOI:10.1021/ac4034455, PMID:24494671]
is_a: MS:1001456 ! analysis software
synonym: "QuaMeter" EXACT []

[Term]
id: MS:1003165
name: iMonDB
def: "iMonDB software to extract, store, and manage mass spectrometry instrument parameters from raw data files." [DOI:10.1021/acs.jproteome.5b00127, PMID:25798920, https://github.com/bittremieux/iMonDB]
is_a: MS:1001456 ! analysis software

[Term]
id: PEFF:0000001
name: PEFF CV term
def: "PSI Extended FASTA Format controlled vocabulary term." [PSI:PEFF]
relationship: part_of MS:0000000 ! Proteomics Standards Initiative Mass Spectrometry Vocabularies

[Term]
id: PEFF:0000002
name: PEFF file header section term
def: "CV term that may appear in a PEFF file header section." [PSI:PEFF]
is_a: PEFF:0000001 ! PEFF CV term

[Term]
id: PEFF:0000003
name: PEFF file sequence entry term
def: "CV term that may appear in a description line of a PEFF file individual sequence entry." [PSI:PEFF]
is_a: PEFF:0000001 ! PEFF CV term

[Term]
id: PEFF:0000008
name: DbName
def: "PEFF keyword for the sequence database name." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000009
name: Prefix
def: "PEFF keyword for the sequence database prefix." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000010
name: DbDescription
def: "PEFF keyword for the sequence database short description." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000011
name: Decoy
def: "PEFF keyword for the specifying whether the sequence database is a decoy database." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:boolean "The allowed value-type for this CV term."
relationship: has_value_type xsd\:boolean ! The allowed value-type for this CV term

[Term]
id: PEFF:0000012
name: DbSource
def: "PEFF keyword for the source of the database file." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000013
name: DbVersion
def: "PEFF keyword for the database version (release date) according to database provider." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000014
name: DbDate
def: "OBSOLETE PEFF keyword for the database date (release or file date of the source) according to database provider." [PSI:PEFF]
comment: This term was obsoleted.
is_a: PEFF:0000002 ! PEFF file header section term
is_obsolete: true

[Term]
id: PEFF:0000015
name: NumberOfEntries
def: "PEFF keyword for the sumber of sequence entries in the database." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:integer "The allowed value-type for this CV term."
relationship: has_value_type xsd\:integer ! The allowed value-type for this CV term

[Term]
id: PEFF:0000016
name: Conversion
def: "PEFF keyword for the description of the conversion from original format to this current one." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000017
name: SequenceType
def: "PEFF keyword for the molecular type of the sequences." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002002 ! regular expression for PEFF molecular sequence type
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000018
name: SpecificKey
def: "PEFF keyword for database specific keywords not included in the current controlled vocabulary." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000019
name: SpecificValue
def: "PEFF keyword for the specific values for a custom key." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000020
name: DatabaseDescription
def: "PEFF keyword for the short description of the PEFF file." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000021
name: GeneralComment
def: "PEFF keyword for a general comment." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000022
name: ProteoformDb
def: "PEFF keyword that when set to 'true' indicates that the database contains complete proteoforms." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000023
name: OptionalTagDef
def: "PEFF keyword for the short tag (abbreviation) and longer definition used to annotate a sequence annotation (such as variant or modification) in the OptionalTag location." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0000024
name: HasAnnotationIdentifiers
def: "PEFF keyword that when set to 'true' indicates that entries in the database have identifiers for each annotation." [PSI:PEFF]
is_a: PEFF:0000002 ! PEFF file header section term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001001
name: DbUniqueId
def: "OBSOLETE Sequence database unique identifier." [PSI:PEFF]
comment: This term was made obsolete because decided in Heidelberg 2018-04 that this is redundant.
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001002
name: PName
def: "PEFF keyword for the protein full name." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001003
name: NcbiTaxId
def: "PEFF keyword for the NCBI taxonomy identifier." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:int "The allowed value-type for this CV term."
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: PEFF:0001004
name: TaxName
def: "PEFF keyword for the taxonomy name (latin or common name)." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001005
name: GName
def: "PEFF keyword for the gene name." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001006
name: Length
def: "PEFF keyword for the sequence length." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:int "The allowed value-type for this CV term."
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: PEFF:0001007
name: SV
def: "PEFF keyword for the sequence version." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001008
name: EV
def: "PEFF keyword for the entry version." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001009
name: PE
def: "PEFF keyword for the Protein Evidence; A UniProtKB code 1-5." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:int "The allowed value-type for this CV term."
relationship: has_value_type xsd\:int ! The allowed value-type for this CV term

[Term]
id: PEFF:0001010
name: Processed
def: "PEFF keyword for information on how the full length original protein sequence can be processed into shorter components such as signal peptides and chains." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001011
name: Variant
def: "OBSOLETE Sequence variation (substitution, insertion, deletion)." [PSI:PEFF]
comment: This term was made obsolete in favor of VariantSimple and VariantComplex.
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
is_obsolete: true
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001012
name: ModResPsi
def: "PEFF keyword for the modified residue with PSI-MOD identifier." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001013
name: ModRes
def: "PEFF keyword for the modified residue without aPSI-MOD or UniMod identifier." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001014
name: AltAC
def: "PEFF keyword for the Alternative Accession Code." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001015
name: SeqStatus
def: "PEFF keyword for the sequence status. Complete or Fragment." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002003 ! regular expression for PEFF sequence status
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001016
name: CC
def: "PEFF keyword for the entry associated comment." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001017
name: KW
def: "PEFF keyword for the entry associated keyword(s)." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001018
name: GO
def: "PEFF keyword for the Gene Ontology code." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001019
name: XRef
def: "PEFF keyword for the cross-reference to an external resource." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001020
name: mature protein
def: "Portion of a newly synthesized protein that contributes to a final structure after other components such as signal peptides are removed." [PSI:PEFF]
is_a: PEFF:0001032 ! PEFF molecule processing keyword
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001021
name: signal peptide
def: "Short peptide present at the N-terminus of a newly synthesized protein that is cleaved off and is not part of the final mature protein." [PSI:PEFF]
is_a: PEFF:0001032 ! PEFF molecule processing keyword
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001022
name: transit peptide
def: "Short peptide present at the N-terminus of a newly synthesized protein that helps the protein through the membrane of its destination organelle." [PSI:PEFF]
is_a: PEFF:0001032 ! PEFF molecule processing keyword
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001023
name: Conflict
def: "PEFF keyword for the sequence conflict; a UniProtKB term." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001024
name: Crc64
def: "PEFF keyword for the Sequence checksum in crc64." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001025
name: Domain
def: "PEFF keyword for the sequence range of a domain." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001026
name: ID
def: "PEFF keyword for the UniProtKB specific Protein identifier ID; a UniProtKB term." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001027
name: ModResUnimod
def: "PEFF keyword for the modified residue with UniMod identifier." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001028
name: VariantSimple
def: "PEFF keyword for the simple sequence variation of a single amino acid change. A change to a stop codon is permitted with a * symbol. More complex variations must be encoded with the VariantComplex term." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001029
name: VariantComplex
def: "PEFF keyword for a sequence variation that is more complex than a single amino acid change or change to a stop codon." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001030
name: Proteoform
def: "PEFF keyword for the proteoforms of this protein, constructed as a set of annotation identifiers." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001031
name: DisulfideBond
def: "PEFF keyword for the disulfide bonds in this protein, constructed as a sets of annotation identifiers of two half-cystine modifications." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001032
name: PEFF molecule processing keyword
def: "PEFF keyword describing the type of processing event being described." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term

[Term]
id: PEFF:0001033
name: Comment
def: "PEFF keyword for the individual protein entry comment. It is discouraged to put parsable information here. This is only for free-text commentary." [PSI:PEFF]
is_a: PEFF:0000003 ! PEFF file sequence entry term
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001034
name: propeptide
def: "Short peptide that is cleaved off a newly synthesized protein and generally immediately degraded in the process of protein maturation, and is not a signal peptide or transit peptide." [PSI:PEFF]
is_a: PEFF:0001032 ! PEFF molecule processing keyword
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:0001035
name: initiator methionine
def: "N-terminal methionine residue of a protein that can be co-translationally cleaved." [PSI:PEFF]
is_a: PEFF:0001032 ! PEFF molecule processing keyword
xref: value-type:xsd\:string "The allowed value-type for this CV term."
relationship: has_regexp PEFF:1002001 ! regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
relationship: has_value_type xsd\:string ! The allowed value-type for this CV term

[Term]
id: PEFF:1002001
name: regular expression for a value in a key-value pair of a PEFF description line describing one sequence position followed by one PEFF term name and one optional comment
def: "([0-9]+|[A-Z*](|.+)?)." [PSI:PEFF]
is_a: MS:1002479 ! regular expression

[Term]
id: PEFF:1002002
name: regular expression for PEFF molecular sequence type
def: "(AA|NA|DNA|cDNA|RNA|RNAi|tRNA|rRNA|siRNA|mDNA|mRNA|snoRNA|ncRNA|EST|[a-z0-9A-Z]+)." [PSI:PEFF]
is_a: MS:1002479 ! regular expression

[Term]
id: PEFF:1002003
name: regular expression for PEFF sequence status
def: "(Complete|Fragment|[a-z0-9A-Z]+)." [PSI:PEFF]
is_a: MS:1002479 ! regular expression