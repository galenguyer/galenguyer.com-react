export default function NotFoundExcuse() {
    const excuses = [
        "of clock speed",
        "of solar flares",
        "of electromagnetic radiation from satellite debris",
        "of static from nylon underwear",
        "of static from plastic slide rules",
        "of global warming",
        "of poor power conditioning",
        "of static buildup",
        "of the doppler effect",
        "of hardware stress fractures",
        "of magnetic interference from credit cards",
        "of dry joints on cable plug",
        "we're waiting for the phone company to fix that line",
        "of a Windows problem, try calling Microsoft support",
        "of a temporary routing anomaly",
        "somebody was calculating pi on the server",
        "of fat electrons in the lines",
        "of excess surge protection",
        "of a floating point processor overflow",
        "of a divide-by-zero error",
        "of a POSIX compliance problem",
        "your monitor resolution is too high",
        "of an improperly oriented keyboard",
        "of network packets travelling uphill (use a carrier pigeon)",
        "of decreasing electron flux",
        "first Saturday after first full moon in Winter",
        "of radiosity depletion",
        "of a broken CPU radiator",
        "it works the way the Wang did, what's the problem",
        "of a positron router malfunction",
        "of cellular telephone interference",
        "of techtonic stress",
        "of piezo-electric interference",
        "of (l)user error",
        "it's working as designed",
        "of a corrupted dynamic software linking table",
        "of heavy gravity fluctuation, try moving your computer to to floor rapidly",
        "the secretary plugged their hairdryer into the UPS",
        "of terrorist activities",
        "of not enough memory, go get system upgrade",
        "of an interrupt configuration error",
        "spaghetti cable caused packet failure",
        "the boss forgot system password",
        "of a bank holiday - system operating credits not recharged",
        "of a virus attack, luser responsible",
        "a waste water tank overflowed onto the computer",
        "of a complete transient lockout",
        "of bad ether in the cables",
        "of bogon emissions",
        "of a change in Earth's rotational speed",
        "of cosmic ray particles crashed through the hard disk platter",
        "the smell from unhygienic janitorial staff wrecked the tape heads",
        "the  hamster in running wheel had a coronary; waiting for replacement to be fed-exed from Wyoming",
        "evil dogs hypnotised the night shift",
        "the plumber mistook the routing panel for a decorative wall fixture",
        "electricians made popcorn in the power supply",
        "groundskeepers stole the root password",
        "of a high pressure system failure",
        "of failed trials, system needs redesigning",
        "the system has been recalled",
        "it was not approved by the FCC",
        "you need to wrap the system in aluminum foil to fix problem",
        "it's not properly grounded, please bury your computer",
        "your CPU needs recalibration",
        "your system needs to be rebooted",
        "of a bit bucket overflow",
        "descramble code is needed from a software company",
        "it's only available on a need to know basis",
        "a knot in cables caused data stream to become twisted and kinked",
        "nesting roaches shorted out the ether cable",
        "the file system is full of it",
        "Satan did it",
        "Daemons did it",
        "you're out of memory",
        "there isn't any problem",
        "of an unoptimized hard drive",
        "of a typo in the code",
        "of a design limitation",
        "Windows 3.1 IS a General Protection Fault.",
        "that's a great computer you have there; but have you considered how it would work as a BSD machine?",
        "I have to circuit an AC line through my head to get this database working.",
        "yo mama dresses you funny and you need a mouse to delete files.",
        "the support staff is hung over, send aspirin and come back LATER.",
        "someone is standing on the ethernet cable, causing a kink in the cable",
        'of a Windows 95 undocumented "feature"',
        "of runt packets",
        "the password is too complex to decrypt",
        "the boss' kid fucked up the machine",
        "of electromagnetic energy loss",
        "of budget cuts",
        "a mouse chewed through power cable",
        "of a stale file handle (next time use Tupperware(tm)!)",
        "the feature is not yet implemented",
        "of an internet outage",
        "of a Pentium FDIV bug",
        "the vendor no longer supports the product",
        "of a small animal kamikaze attack on power supplies",
        "a vendor put the bug there.",
        "SIMM crosstalk.",
        "an IRQ dropout",
        "a collapsed Backbone",
        "the power company is testing the new voltage spike (creation) equipment",
        "the operator is on strike due to broken coffee machine",
        "the backup tape was overwritten with copy of system manager's favourite CD",
        "UPS interrupted the server's power",
        "the electrician didn't know what the yellow cable was so he yanked the ethernet out.",
        "the keyboard isn't plugged in",
        "the air conditioning water supply pipe ruptured over the machine room",
        "the electricity substation in the car park blew up.",
        "the rolling stones concert down the road caused a brown out",
        "the salesman drove over the CPU board.",
        "the monitor is plugged into the serial port",
        "the root nameservers are out of sync",
        "of electro-magnetic pulses from French above ground nuke testing.",
        "your keyboard's space bar is generating spurious keycodes.",
        "the real ttys became pseudo ttys and vice-versa.",
        "the printer thinks its a router.",
        "the router thinks its a printer.",
        "of evil hackers from Serbia.",
        "we just switched to FDDI.",
        "the halon system went off and killed the operators.",
        "Bill Gates is a Jehovah's witness and so nothing can work on St. Swithin's day.",
        "the user to computer ratio is too high.",
        "the user to computer ration is too low.",
        "we just switched to Sprint.",
        "it has Intel Inside",
        "of sticky bits on disk.",
        "the power company is having EMP problems with their reactor",
        "the ring needs another token",
        "new management",
        "telnet: Unable to connect to remote host: Connection refused",
        "SCSI Chain overterminated",
        "it's not plugged in.",
        "of network lag due to too many people playing deathmatch",
        "you put the disk in upside down.",
        "of loose daemons in system.",
        "the user was distributing pornography on server; system seized by FBI.",
        "of a BNC (brain not connected) error",
        "of a UBNC (user brain not connected) error",
        "of an LBNC (luser brain not connected) error",
        "the disks are spinning backwards - toggle the hemisphere jumper.",
        "the new guy cross-connected phone lines with ac power bus.",
        "we had to use hammer to free stuck disk drive heads.",
        "there's too few computrons available.",
        "of a flat tire on station wagon with tapes.",
        "our communications satellite is being used by the military for star wars.",
        "a party-bug in the Aloha protocol.",
        "you must insert a coin for a new game",
        "of dew on the telephone lines.",
        "Arcserve crashed the server again.",
        "someone needed the powerstrip, so they pulled the switch plug.",
        "my pony-tail hit the on/off switch on the power strip.",
        "of a big to little endian conversion error",
        "you can tune a file system, but you can't tune a fish.",
        "of a dumb terminal",
        "of zombie processes haunting the computer",
        "of incorrect time synchronization",
        "of defunct processes",
        "of stubborn processes",
        "of a non-redundant fan failure",
        "of monitor VLF leakage",
        "of bugs in the RAID",
        'you have no "any" key on keyboard',
        "root rot",
        "Backbone Scoliosis",
        "your file is at /pub/lunch",
        "excessive collisions & not enough packet ambulances",
        "le0: no carrier: transceiver cable problem?",
        "of broadcast packets on the wrong frequency",
        "the popper is unable to process the jumbo kernel",
        "filesystem /dev/null is full",
        "of a pseudo-user on a pseudo-terminal",
        "of recursive traversal of loopback mount points",
        "of a backbone adjustment",
        "the OS swapped to disk",
        "of vapors from evaporating sticky-note adhesives",
        "of sticktion",
        "of a short leg on the process table",
        "of multicasts on broken packets",
        "of an ether leak",
        "of Atilla the Hub",
        "of endothermal recalibration",
        "the filesystem is not big enough for Jumbo Kernel Patch",
        "loop found in loop in redundant loopback",
        "the system consumed all the paper for paging",
        "permission denied",
        "we're reformatting the page. please wait...",
        "of a disk or the processor on fire.",
        "the SCSI is too wide.",
        "of proprietary information.",
        "someone typed 'mv * /dev/null'.",
        "of a runaway cat on system.",
        "you didn't pay the new support fee",
        "we only support a 1200 bps connection.",
        "we only support a 28000 bps connection.",
        "me no internet, only janitor, me just wax floors.",
        "a pentium won't do, you need an SGI to connect with us.",
        "Post-it Note sludge leaked into the monitor.",
        "the curls in your keyboard cord are losing electricity.",
        "the monitor needs another box of pixels.",
        "of a RPC_PMAP_FAILURE",
        "of a kernel panic: write-only-memory (/dev/wom0) capacity exceeded.",
        "the write-only-memory subsystem is too slow for this machine. Contact your local dealer.",
        "we should get more lines so we don't have voice lines.",
        "quantum dynamics are affecting the transistors",
        "police are examining all internet packets in the search for a narco-net-trafficker",
        "we are currently trying a new concept of using a live mouse.  Unfortunately, one has yet to survive being hooked up to the computer... please bear with us.",
        "your mail is being routed through Germany ... and they're censoring us.",
        "only people with names beginning with 'A' are getting mail this week (a la Microsoft)",
        "we didn't pay the Internet bill and it's been cut off.",
        "of lightning strikes.",
        "of course it doesn't work. We've performed a software upgrade.",
        "you need to change your language to Finnish.",
        "fluorescent lights are generating negative ions. If turning them off doesn't work, take them out and put tin foil on the ends.",
        "of high nuclear activity in your area.",
        "your building was built over the universities first nuclear research site. And wow, aren't you the lucky one, your office is right over where the core is buried!",
        "the MGs ran out of gas.",
        "the UPS doesn't have a battery backup.",
        "of recursivity.  Call back if it happens again.",
        "someone thought The Big Red Button was a light switch.",
        "the mainframe needs to rest.  It's getting old, you know.",
        "... Actually, I'm not sure.  Try calling the Internet's head office -- it's in the book.",
        "the lines are all busy (busied out, that is -- why let them in to begin with?).",
        "of those computer people at The Eye.  They keep stuffing things up.",
        "a star wars satellite accidently blew up the WAN.",
        "of a fatal error right in front of screen",
        "that function is not currently supported, but Bill Gates assures us it will be featured in the next upgrade.",
        "of the wrong polarity of neutron flow",
        "the standard luser's learning curve appears to be fractal",
        "we had to turn off that service to comply with the CDA Bill.",
        "of ionization from the air-conditioning",
        "TCP/IP UDP alarm threshold is set too low.",
        "someone is broadcasting pygmy packets and the router doesn't know how to deal with them.",
        "the new frame relay network hasn't bedded down the software loop transmitter yet.",
        "the fanout is dropping voltage too much, try cutting some of those little traces",
        "the plate voltage is too low on the demodulator tube",
        "you did wha... oh dear....",
        "the CPU needs bearings repacked",
        "there's too many little pins on CPU confusing it, bend back and forth until 10-20% are neatly removed. Do not leave metal bits visible!",
        "the software uses US measurements, but the OS is in metric...",
        "the computer fled, mouse and all.",
        "your cat tried to eat the mouse.",
        "the Borg tried to assimilate your system. Resistance is futile.",
        "of the lightning storm we had yesterday",
        "of the lightning storm we had last week",
        "of the lightning storm we had last month",
        "we have been forced to cut back on the number of users able to access the system at one time due to Federal Budget problems.",
        "there's too much radiation coming from the soil.",
        "we have run out of bits. Don't worry, the next supply will be coming next week.",
        "the program load was too heavy for processor to lift.",
        "your processes are running slowly due to a weak power supply",
        "our ISP is having switching problems",
        "our ISP is having routing problems",
        "our ISP is having SMDS problems",
        "our ISP is having frame relay problems",
        "we've run out of licenses",
        "of interference from lunar radiation",
        "there's only standing room on the bus.",
        "you need to install an RTFM interface.",
        "the software doesn't work.",
        "that's easy to fix, but I can't be bothered.",
        "someone's tie is caught in the printer, and if anything else gets printed, he'll be in it too.",
        "we're upgrading /dev/null",
        "the Usenet news is out of date",
        "our POP server was kidnapped by a weasel.",
        "it's stuck in the Web.",
        "your modem doesn't speak English.",
        "the mouse escaped.",
        "all of the packets are empty.",
        "the UPS is on strike.",
        "of a neutrino overload on the nameserver",
        "of melting hard drives",
        "someone has messed up the kernel pointers",
        "the kernel license has expired",
        "Netscape has crashed",
        "the cord jumped over and hit the power switch.",
        "you touched it.",
        "of bit rot",
        "the U.S. Postal Service",
        "your Flux Capacitor has gone bad.",
        "the Dilithium Crystals need to be rotated.",
        "the static electricity routing is acting up.",
        "a traceroute says that there is a routing problem in the backbone.  It's not our problem.",
        "the co-locator cannot verify the frame-relay gateway to the ISDN server.",
        "high altitude condensation from U.S.A.F prototype aircraft has contaminated the primary subnet mask. Turn off your computer for 9 days to avoid damaging it.",
        "the lawn mower blades in your fan need sharpening",
        "our electrons are on a bender",
        "telecommunications is upgrading.",
        "telecommunications is downgrading.",
        "telecommunications is downshifting.",
        "the hard drive is sleeping. Let it wake up on it's own.",
        "of interference between the keyboard and the chair.",
        "the CPU has shifted, and become decentralized.",
        "we no longer have a root account due to the CDA.",
        "we ran out of dial tone and we're and waiting for the phone company to deliver another bottle.",
        "you must've hit the wrong any key.",
        "of a PCMCIA slave driver",
        "the token fell out of the ring. Call us when you find it.",
        "the hardware bus needs a new token.",
        "of too many interrupts",
        "of not enough interrupts",
        "the data on your hard drive is out of balance.",
        "the Digital Manipulator is exceeding velocity parameters",
        "there appears to be a Slow/Narrow SCSI-0 Interface problem",
        "of a microelectronic Riemannian curved-space fault in the write-only file system",
        "there's some fractal radiation jamming the backbone",
        "of routing problems on the neural net",
        "IRQ problems with the Un-Interruptible-Power-Supply",
        "the CPU-angle has to be adjusted because of vibrations coming from the nearby road",
        "of emissions from GSM-phones",
        "the CD-ROM server needs recalibration",
        "the firewall needs cooling",
        "of an asynchronous inode failure",
        "of a transient bus protocol violation",
        "of incompatible bit-registration operators",
        "your process is not ISO 9000 compliant",
        "you need to upgrade your VESA local bus to a MasterCard local bus.",
        "of the recent proliferation of nuclear testing",
        "our elves are on strike. (Why do they call EMAG Elf Magic)",
        "the internet exceeded the luser cap, please wait until a luser logs off before attempting to log back on.",
        "your page is now being delivered by the USPS.",
        "your computer hasn't been returning all the bits it gets from the Internet.",
        "you've been infected by the Telescoping Hubble virus.",
        "of a scheduled global CPU outage",
        "your Pentium has a heating problem - try cooling it with ice cold water.(Do not turn off your computer, you do not want to cool down the Pentium Chip while he isn't working, do you?)",
        "your processor has processed too many instructions.  Turn it off immediately, do not type any commands!!",
        "your packets were eaten by the terminator",
        "your processor does not develop enough heat.",
        "we need a licensed electrician to replace the light bulbs in the computer room.",
        "the POP server is out of Coke",
        "our fiber optics caused gas main leak",
        "the server is depressed and needs Prozac",
        "of quantum decoherence",
        "of those damn raccoons!",
        "of a suboptimal routing experience",
        "a plumber is needed, the network drain is clogged",
        "50% of the manual is in .pdf readme files",
        "the AA battery in the wallclock sends magnetic interference",
        "the xy axis in the trackball is coordinated with the summer solstice",
        "the butane lighter causes the pincushioning",
        "old inkjet cartridges emanate barium-based fumes",
        "of a manager in the cable duct",
        "of a critical bug that we'll fix in the next update.",
        "of an HTTPD Error 666 : BOFH was here",
        "of an HTTPD Error 4004 : very old Intel cpu - insufficient processing power",
        "the ATM board has run out of 10 pound notes.  We are having a whip round to refill it, care to contribute?",
        "of a network failure -  call NBC",
        "we're having to manually track the satellite.",
        "your computer has suffered a memory leak, and we're waiting for it to be topped up.",
        "our computers have suffered a memory leak, and we're waiting for them to be topped up.",
        "the rubber band broke",
        "we're on Token Ring, and it looks like the token got loose.",
        "stray Alpha Particles from memory packaging caused Hard Memory Error on Server.",
        "of a paradigm shift...without a clutch",
        "the problem exists between keyboard and chair",
        "the cables are not the same length.",
        "of a second-system effect.",
        "of chewing gum on /dev/sd3c",
        "boredom in the kernel.",
        "of the daemons! The daemons! The terrible daemons!",
        "the Boss won't let me near a computer.",
        "we were struck by the Good Times virus",
        "your parity check is overdrawn and you're out of cache.",
        "communist revolutionaries are taking over the server room and demanding all the computers in the building or they shoot the sysadmin. Poor misguided fools.",
        "of a plasma conduit breach",
        "we're out of cards on drive D:",
        "of sand fleas eating the Internet cables",
        "the parallel processors are running perpendicular today",
        "the ATM cell has no roaming feature turned on, notebooks can't connect",
        "our webmasters were kidnapped by an evil cult.",
        "of a failure to adjust for daylight savings time.",
        "of a virus transmitted from computer to sysadmins.",
        "of a virus due to computers having unsafe sex.",
        "of incorrectly configured static routes on the corerouters.",
        "we were forced to support NT servers and the sysadmins quit.",
        "a suspicious pointer corrupted virtual machine",
        "of the InterNIC's.",
        "budget cuts forced us to sell all the power cords for the servers.",
        "someone hooked the twisted pair wires into the answering machine.",
        "our operators were killed by year 2000 bug bite.",
        "we've picked COBOL as the language of choice.",
        "our operators were killed when huge stack of backup tapes fell over.",
        "the robotic tape changer mistook operator's tie for a backup tape.",
        "someone was smoking in the computer room and set off the halon systems.",
        "your processor has taken a ride to Heaven's Gate on the UFO behind Hale-Bopp's comet.",
        "of an ID-10-T error",
        "of dyslexics retyping hosts file on servers",
        "the internet is being scanned for viruses.",
        "your computer's union contract is set to expire at midnight.",
        "of bad user karma.",
        "/dev/clue was linked to /dev/null",
        "of increased sunspot activity.",
        "we already sent around a notice about that.",
        "it's union rules. There's nothing we can do about it. Sorry.",
        "of interference from the Van Allen Belt.",
        "Jupiter is aligned with Mars.",
        "of redundant ACLs.",
        "the mail server was hit by UniSpammer.",
        "T-1's are congested due to porn traffic to the news server.",
        "the data for intranet got routed through the extranet and landed on the internet.",
        "we are a 100% Microsoft Shop.",
        "we are Microsoft.  What you are experiencing is not a problem; it is an undocumented feature.",
        "sales staff sold a product we don't offer.",
        "the secretary sent chain letter to all 5000 employees.",
        "the sysadmin didn't hear pager go off due to loud music from bar-room speakers.",
        "the sysadmin accidentally destroyed pager with a large hammer.",
        "the sysadmins are unavailable because they are in a meeting talking about why they are unavailable so much.",
        "bad cafeteria food landed all the sysadmins in the hospital.",
        "of route flapping at the NAP.",
        "our computers are underwater due to SYN flooding.",
        "the vulcan death ping has been applied.",
        "the electrical conduits in machine room are melting.",
        "of a traffic jam on the Information Superhighway.",
        "of Radial Telemetry Infiltration",
        "some cow-tippers tipped a cow onto the server.",
        "tachyon emissions are overloading the system",
        "the maintenance window is broken",
        "we're out of slots on the server",
        "the computer is room being moved.  Our systems are down for the weekend.",
        "the sysadmins are busy fighting SPAM.",
        "repeated reboots of the system failed to solve problem",
        "the feature was not beta tested",
        "the domain controller is not responding",
        "someone else stole your IP address, call the Internet detectives!",
        "it's not RFC-822 compliant.",
        "the operation failed because: there is no message for this error (#1014)",
        "the stop bit was received",
        "internet is needed to catch the etherbunny",
        "the network is down, IP packets ar enow delivered via UPS",
        "of a firmware update in the coffee machine",
        "of a temporal anomaly",
        "our mouse has an out-of-cheese-error",
        "our borg implants are failing",
        "borg nanites have infested the server",
        "one bad user has been found in front of the screen",
        "the internet shut down due to maintenance",
        "a daemon escaped from pentagram",
        "of crop circles in the corn shell",
        "our sticky bit has come loose",
        "our hot Java has gone cold",
        "of a cache miss - please take better aim next time",
        "the hash table has woodworm",
        "the trojan horse ran out of hay",
        "zombie processes have been detected, the machine is haunted.",
        "overflow error in /dev/null",
        "your browser's cookie is corrupted -- someone's been nibbling on it.",
        "the mailer-daemon is busy burning your message in hell.",
        "it's by design, according to Microsoft",
        "vi needs to be upgraded to vii",
        "greenpeace free'd the mallocs",
        "terrorists crashed an airplane into the server room, have to remove /bin/laden.",
        "of astropneumatic oscillations in the water-cooling",
        "somebody ran the operating system through a spelling checker.",
        "of rhythmic variations in the voltage reaching the power supply.",
        "of a keyboard actuator failure.",
        "of a packet held up at customs.",
        "of a propagation delay.",
        "of high line impedance.",
        "of power surges on the Underground.",
        "it's been deprecated. The new one is worse.",
        "of excess condensation in cloud network",
        "of a layer 8 problem",
        "the math co-processor had an overflow error that leaked out and shorted the RAM",
        "a leap second overloaded our RHEL6 servers",
        "the DNS server drank too much and had a hiccup",
        "your machine had the fuses in backwards.",
    ];
    const excuse = excuses[Math.floor(Math.random() * excuses.length)];
    return (
        <p>The requested page could not be found. It looks like it's because {excuse}</p>
    );
}
