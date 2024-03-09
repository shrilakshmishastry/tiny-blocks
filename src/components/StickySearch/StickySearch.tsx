import { ChangeEvent, useState } from "react";
import "./StickySearch.css";

const bankList = [
  {
    bank: "Abhyudaya Co-operative Bank",
    ifscPrefix: "ABHY",
  },
  {
    bank: "Royal Bank of Scotland N.V.",
    ifscPrefix: "ABNA",
  },
  {
    bank: "Akola District Central Co-operative Bank",
    ifscPrefix: "ADCC",
  },
  {
    bank: "Ahmednagar District Central Co-operative Bank",
    ifscPrefix: "AHDC",
  },
  {
    bank: "Airtel Payments Bank",
    ifscPrefix: "AIRP",
  },
  {
    bank: "Ajara Urban Co-operative Bank",
    ifscPrefix: "AJAR",
  },
  {
    bank: "Ambarnath Jai-hind Co-operative Bank",
    ifscPrefix: "AJHC",
  },
  {
    bank: "Akola Janata Commercial Co-operative Bank",
    ifscPrefix: "AKJB",
  },
  {
    bank: "Allahabad Bank",
    ifscPrefix: "ALLA",
  },
  {
    bank: "Ahmedabad Mercantile Co-operative Bank",
    ifscPrefix: "AMCB",
  },
  {
    bank: "Ahmednagar Merchants Co-operative Bank",
    ifscPrefix: "AMDN",
  },
  {
    bank: "Andhra Bank",
    ifscPrefix: "ANDB",
  },
  {
    bank: "Australia and New Zealand Banking Group",
    ifscPrefix: "ANZB",
  },
  {
    bank: "Andhra Pradesh State Co-operative Bank",
    ifscPrefix: "APBL",
  },
  {
    bank: "Andhra Pragathi Grameena Bank",
    ifscPrefix: "APGB",
  },
  {
    bank: "Andhra Pradesh Grameena Vikas Bank",
    ifscPrefix: "APGV",
  },
  {
    bank: "A.P. Mahesh Co-operative Urban Bank",
    ifscPrefix: "APMC",
  },
  {
    bank: "Arvind Sahakari Bank",
    ifscPrefix: "ARBL",
  },
  {
    bank: "Apna Sahakari Bank",
    ifscPrefix: "ASBL",
  },
  {
    bank: "AU Small Finance Bank",
    ifscPrefix: "AUBL",
  },
  {
    bank: "Almora Urban Co-operative Bank",
    ifscPrefix: "AUCB",
  },
  {
    bank: "Bassein Catholic Co-operative Bank",
    ifscPrefix: "BACB",
  },
  {
    bank: "Baramati Sahakari Bank",
    ifscPrefix: "BARA",
  },
  {
    bank: "Bank of Baroda",
    ifscPrefix: "BARB",
  },
  {
    bank: "Barclays Bank",
    ifscPrefix: "BARC",
  },
  {
    bank: "Bank of Bahrein and Kuwait",
    ifscPrefix: "BBKM",
  },
  {
    bank: "Bharat Co-operative Bank",
    ifscPrefix: "BCBM",
  },
  {
    bank: "Bank of Ceylon",
    ifscPrefix: "BCEY",
  },
  {
    bank: "",
    ifscPrefix: "BCHN",
  },
  {
    bank: "Bandhan Bank",
    ifscPrefix: "BDBL",
  },
  {
    bank: "Dena Bank",
    ifscPrefix: "BKDN",
  },
  {
    bank: "Bank of India",
    ifscPrefix: "BKID",
  },
  {
    bank: "Bombay Mercantile Co-operative Bank",
    ifscPrefix: "BMCB",
  },
  {
    bank: "BNP Paribas Bank",
    ifscPrefix: "BNPA",
  },
  {
    bank: "Bhagini Nivedita Sahakari Bank Pune",
    ifscPrefix: "BNSB",
  },
  {
    bank: "Bank of America",
    ifscPrefix: "BOFA",
  },
  {
    bank: "MUFG Bank",
    ifscPrefix: "BOTM",
  },
  {
    bank: "",
    ifscPrefix: "BUCB",
  },
  {
    bank: "Central Bank of India",
    ifscPrefix: "CBIN",
  },
  {
    bank: "Citizen Credit Co-operative Bank",
    ifscPrefix: "CCBL",
  },
  {
    bank: "JP Morgan Chase Bank NA",
    ifscPrefix: "CHAS",
  },
  {
    bank: "CITI Bank",
    ifscPrefix: "CITI",
  },
  {
    bank: "City Union Bank",
    ifscPrefix: "CIUB",
  },
  {
    bank: "Capital Small Finance Bank",
    ifscPrefix: "CLBL",
  },
  {
    bank: "Canara Bank",
    ifscPrefix: "CNRB",
  },
  {
    bank: "Coastal Local Area Bank",
    ifscPrefix: "COAS",
  },
  {
    bank: "Corporation Bank",
    ifscPrefix: "CORP",
  },
  {
    bank: "Cosmos Co-operative Bank",
    ifscPrefix: "COSB",
  },
  {
    bank: "Credit Suisse AG",
    ifscPrefix: "CRES",
  },
  {
    bank: "Chhattisgarh Rajya Gramin Bank",
    ifscPrefix: "CRGB",
  },
  {
    bank: "Credit Agricole Corporate and Investment Bank",
    ifscPrefix: "CRLY",
  },
  {
    bank: "Shri Chhatrapati Rajashri Shahu Urban Co-operative Bank",
    ifscPrefix: "CRUB",
  },
  {
    bank: "Catholic Syrian Bank",
    ifscPrefix: "CSBK",
  },
  {
    bank: "Chartered Sahakari Bank Niyamitha",
    ifscPrefix: "CSBX",
  },
  {
    bank: "Chinatrust Commercial Bank",
    ifscPrefix: "CTCB",
  },
  {
    bank: "Development Bank of Singapore",
    ifscPrefix: "DBSS",
  },
  {
    bank: "DCB Bank",
    ifscPrefix: "DCBL",
  },
  {
    bank: "Darussalam Co-operative Urban Bank",
    ifscPrefix: "DCUB",
  },
  {
    bank: "Deogiri Nagari Sahakari Bank Aurangabad",
    ifscPrefix: "DEOB",
  },
  {
    bank: "Deutsche Bank",
    ifscPrefix: "DEUT",
  },
  {
    bank: "Deposit Insurance and Credit Guarantee Corporation",
    ifscPrefix: "DICG",
  },
  {
    bank: "Delhi State Co-operative Bank",
    ifscPrefix: "DLSC",
  },
  {
    bank: "Dhanlaxmi Bank",
    ifscPrefix: "DLXB",
  },
  {
    bank: "Dmk Jaoli Bank",
    ifscPrefix: "DMKJ",
  },
  {
    bank: "Dombivli Nagari Sahakari Bank",
    ifscPrefix: "DNSB",
  },
  {
    bank: "Doha Bank QSC",
    ifscPrefix: "DOHB",
  },
  {
    bank: "Durgapur Steel Peoples Co-operative Bank",
    ifscPrefix: "DURG",
  },
  {
    bank: "Emirates NBD Bank",
    ifscPrefix: "EBIL",
  },
  {
    bank: "Export Import Bank of India",
    ifscPrefix: "EIBI",
  },
  {
    bank: "Equitas Small Finance Bank",
    ifscPrefix: "ESFB",
  },
  {
    bank: "Esaf Small Finance Bank",
    ifscPrefix: "ESMF",
  },
  {
    bank: "Federal Bank",
    ifscPrefix: "FDRL",
  },
  {
    bank: "Fino Payments Bank",
    ifscPrefix: "FINO",
  },
  {
    bank: "Firstrand Bank",
    ifscPrefix: "FIRN",
  },
  {
    bank: "Fincare Small Finance Bank ",
    ifscPrefix: "FSFB",
  },
  {
    bank: "Greater Bombay Co-operative Bank",
    ifscPrefix: "GBCB",
  },
  {
    bank: "Gadchiroli District Central Co-operative Bank",
    ifscPrefix: "GDCB",
  },
  {
    bank: "Gujarat State Co-operative Bank",
    ifscPrefix: "GSCB",
  },
  {
    bank: "",
    ifscPrefix: "GSSB",
  },
  {
    bank: "Haryana State Co-operative Apex Bank",
    ifscPrefix: "HARC",
  },
  {
    bank: "HASTI Co-operative Bank",
    ifscPrefix: "HCBL",
  },
  {
    bank: "HDFC Bank",
    ifscPrefix: "HDFC",
  },
  {
    bank: "Himachal Pradesh State Co-operative Bank",
    ifscPrefix: "HPSC",
  },
  {
    bank: "Hongkong & Shanghai Banking Corporation",
    ifscPrefix: "HSBC",
  },
  {
    bank: "Hutatma Sahakari Bank",
    ifscPrefix: "HUSB",
  },
  {
    bank: "Woori Bank",
    ifscPrefix: "HVBK",
  },
  {
    bank: "PT Bank Maybank Indonesia TBK",
    ifscPrefix: "IBBK",
  },
  {
    bank: "IDBI",
    ifscPrefix: "IBKL",
  },
  {
    bank: "Industrial Bank of Korea",
    ifscPrefix: "IBKO",
  },
  {
    bank: "Industrial and Commercial Bank of China",
    ifscPrefix: "ICBK",
  },
  {
    bank: "510 Army Base W/s Credit Co-operative Primary Bank",
    ifscPrefix: "ICIC",
  },
  {
    bank: "Indian Clearing Corporation",
    ifscPrefix: "ICLL",
  },
  {
    bank: "IDFC FIRST Bank",
    ifscPrefix: "IDFB",
  },
  {
    bank: "Indian Bank",
    ifscPrefix: "IDIB",
  },
  {
    bank: "Indusind Bank",
    ifscPrefix: "INDB",
  },
  {
    bank: "Indian Overseas Bank",
    ifscPrefix: "IOBA",
  },
  {
    bank: "India Post Payments Bank",
    ifscPrefix: "IPOS",
  },
  {
    bank: "Irinjalakuda Town Co-operative Bank",
    ifscPrefix: "ITBL",
  },
  {
    bank: "Jammu and Kashmir Bank",
    ifscPrefix: "JAKA",
  },
  {
    bank: "Janaseva Sahakari Bank, Pune",
    ifscPrefix: "JANA",
  },
  {
    bank: "Janaseva Sahakari Bank (Borivli)",
    ifscPrefix: "JASB",
  },
  {
    bank: "Jio Payments Bank",
    ifscPrefix: "JIOP",
  },
  {
    bank: "Jalgaon Janata Bank",
    ifscPrefix: "JJSB",
  },
  {
    bank: "Jalgaon Peoples Co-operative Bank",
    ifscPrefix: "JPCB",
  },
  {
    bank: "Janakalyan Sahakari Bank",
    ifscPrefix: "JSBL",
  },
  {
    bank: "Janata Sahakari Bank (Pune)",
    ifscPrefix: "JSBP",
  },
  {
    bank: "Jana Small Finance Bank",
    ifscPrefix: "JSFB",
  },
  {
    bank: "Janatha Seva Co-operative Bank",
    ifscPrefix: "JTSC",
  },
  {
    bank: "Kangra Central Co-operative Bank",
    ifscPrefix: "KACE",
  },
  {
    bank: "Kallappanna Awade Ichalkaranji Janata Sahakari Bank",
    ifscPrefix: "KAIJ",
  },
  {
    bank: "Kangra Co-operative Bank",
    ifscPrefix: "KANG",
  },
  {
    bank: "Karnataka Bank",
    ifscPrefix: "KARB",
  },
  {
    bank: "Kookmin Bank",
    ifscPrefix: "KBKB",
  },
  {
    bank: "Kalupur Commercial Co-operative Bank",
    ifscPrefix: "KCCB",
  },
  {
    bank: "Kalyan Janata Sahakari Bank",
    ifscPrefix: "KJSB",
  },
  {
    bank: "Kotak Mahindra Bank",
    ifscPrefix: "KKBK",
  },
  {
    bank: "Kerala Gramin Bank",
    ifscPrefix: "KLGB",
  },
  {
    bank: "Kurla Nagarik Sahakari Bank",
    ifscPrefix: "KNSB",
  },
  {
    bank: "KEB Hana Bank",
    ifscPrefix: "KOEX",
  },
  {
    bank: "Kolhapur Urban Co-operative Bank",
    ifscPrefix: "KOLH",
  },
  {
    bank: "Kerala State Co-operative Bank",
    ifscPrefix: "KSBK",
  },
  {
    bank: "Karnataka State Co-operative Apex Bank",
    ifscPrefix: "KSCB",
  },
  {
    bank: "Karad Urban Co-operative Bank",
    ifscPrefix: "KUCB",
  },
  {
    bank: "Karur Vysya Bank",
    ifscPrefix: "KVBL",
  },
  {
    bank: "Karnataka Vikas Grameena Bank",
    ifscPrefix: "KVGB",
  },
  {
    bank: "Laxmi Vilas Bank",
    ifscPrefix: "LAVB",
  },
  {
    bank: "Bank of Maharashtra",
    ifscPrefix: "MAHB",
  },
  {
    bank: "Maharashtra Gramin Bank",
    ifscPrefix: "MAHG",
  },
  {
    bank: "Meghalaya Co-operative Apex Bank",
    ifscPrefix: "MCAB",
  },
  {
    bank: "Mahanagar Co-operative Bank",
    ifscPrefix: "MCBL",
  },
  {
    bank: "Model Co-operative Bank",
    ifscPrefix: "MDBK",
  },
  {
    bank: "Mumbai District Central Co-operative Bank",
    ifscPrefix: "MDCB",
  },
  {
    bank: "Mizuho Bank",
    ifscPrefix: "MHCB",
  },
  {
    bank: "Malkapur Urban Co-operative Bank",
    ifscPrefix: "MKPB",
  },
  {
    bank: "Malad Sahakari Bank",
    ifscPrefix: "MSBL",
  },
  {
    bank: "Maharashtra State Co-operative Bank",
    ifscPrefix: "MSCI",
  },
  {
    bank: "Mashreq Bank",
    ifscPrefix: "MSHQ",
  },
  {
    bank: "Muslim Co-operative Bank",
    ifscPrefix: "MSLM",
  },
  {
    bank: "Mehsana Urban Co-operative Bank",
    ifscPrefix: "MSNU",
  },
  {
    bank: "Municipal Co-operative Bank",
    ifscPrefix: "MUBL",
  },
  {
    bank: "Sir M Visvesvaraya Co-operative Bank",
    ifscPrefix: "MVCB",
  },
  {
    bank: "National Bank of Abu Dhabi PJSC",
    ifscPrefix: "NBAD",
  },
  {
    bank: "National Bank for Agriculture and Development",
    ifscPrefix: "NBRD",
  },
  {
    bank: "Nilambur Co-operative Urban Bank",
    ifscPrefix: "NCUB",
  },
  {
    bank: "North East Small Finance Bank",
    ifscPrefix: "NESF",
  },
  {
    bank: "Nagpur Nagarik Sahakari Bank",
    ifscPrefix: "NGSB",
  },
  {
    bank: "New India Co-operative Bank",
    ifscPrefix: "NICB",
  },
  {
    bank: "Nav Jeevan Co-operative Bank",
    ifscPrefix: "NJBK",
  },
  {
    bank: "NKGSB Co-operative Bank",
    ifscPrefix: "NKGS",
  },
  {
    bank: "Nasik Merchants Co-operative Bank",
    ifscPrefix: "NMCB",
  },
  {
    bank: "Nutan Nagarik Sahakari Bank",
    ifscPrefix: "NNSB",
  },
  {
    bank: "Bank of Nova Scotia",
    ifscPrefix: "NOSC",
  },
  {
    bank: "NSDL Payments Bank",
    ifscPrefix: "NSPB",
  },
  {
    bank: "Nainital Bank",
    ifscPrefix: "NTBL",
  },
  {
    bank: "Navnirman Co-operative Bank",
    ifscPrefix: "NVNM",
  },
  {
    bank: "Oriental Bank of Commerce",
    ifscPrefix: "ORBC",
  },
  {
    bank: "Odisha State Co-operative Bank",
    ifscPrefix: "ORCB",
  },
  {
    bank: "Gopinath Patil Parsik Janata Sahakari Bank",
    ifscPrefix: "PJSB",
  },
  {
    bank: "Karnataka Gramin Bank",
    ifscPrefix: "PKGB",
  },
  {
    bank: "Prime Co-operative Bank",
    ifscPrefix: "PMEC",
  },
  {
    bank: "Pavana Sahakari Bank",
    ifscPrefix: "PSBL",
  },
  {
    bank: "Punjab & Sind Bank",
    ifscPrefix: "PSIB",
  },
  {
    bank: "Pandharpur Urban Co-operative Bank",
    ifscPrefix: "PUCB",
  },
  {
    bank: "Punjab National Bank",
    ifscPrefix: "PUNB",
  },
  {
    bank: "Pusad Urban Co-operative Bank",
    ifscPrefix: "PUSD",
  },
  {
    bank: "Paytm Payments Bank",
    ifscPrefix: "PYTM",
  },
  {
    bank: "Qatar National Bank",
    ifscPrefix: "QNBA",
  },
  {
    bank: "Rabobank International",
    ifscPrefix: "RABO",
  },
  {
    bank: "RBL Bank",
    ifscPrefix: "RATN",
  },
  {
    bank: "Reserve Bank Of India",
    ifscPrefix: "RBIN",
  },
  {
    bank: "Reserve Bank of India",
    ifscPrefix: "RBIP",
  },
  {
    bank: "Reserve Bank of India",
    ifscPrefix: "RBIS",
  },
  {
    bank: "Rajnandgaon District Central Co-operative Bank",
    ifscPrefix: "RDCB",
  },
  {
    bank: "Rajasthan Marudhara Gramin Bank",
    ifscPrefix: "RMGB",
  },
  {
    bank: "Rajkot Nagarik Sahakari Bank",
    ifscPrefix: "RNSB",
  },
  {
    bank: "Rajarambapu Sahakari Bank",
    ifscPrefix: "RRBP",
  },
  {
    bank: "Rajgurunagar Sahakari Bank",
    ifscPrefix: "RSBL",
  },
  {
    bank: "Rajasthan State Co-operative Bank",
    ifscPrefix: "RSCB",
  },
  {
    bank: "Rajarshi Shahu Sahakari Bank",
    ifscPrefix: "RSSB",
  },
  {
    bank: "SBER Bank",
    ifscPrefix: "SABR",
  },
  {
    bank: "Sahebrao Deshmukh Co-operative Bank",
    ifscPrefix: "SAHE",
  },
  {
    bank: "Sant Sopankaka Sahakari Bank",
    ifscPrefix: "SANT",
  },
  {
    bank: "State Bank of India",
    ifscPrefix: "SBIN",
  },
  {
    bank: "Samarth Sahakari Bank",
    ifscPrefix: "SBLS",
  },
  {
    bank: "Standard Chartered Bank",
    ifscPrefix: "SCBL",
  },
  {
    bank: "Surat District Co-operative Bank",
    ifscPrefix: "SDCB",
  },
  {
    bank: "Satara District Central Co-operative Bank",
    ifscPrefix: "SDCE",
  },
  {
    bank: "Sree Charan Souhardha Co-operative Bank",
    ifscPrefix: "SECB",
  },
  {
    bank: "Saurashtra Gramin Bank",
    ifscPrefix: "SGBA",
  },
  {
    bank: "Shinhan Bank",
    ifscPrefix: "SHBK",
  },
  {
    bank: "South Indian Bank",
    ifscPrefix: "SIBL",
  },
  {
    bank: "Sindhudurg District Central Co-operative Bank",
    ifscPrefix: "SIDC",
  },
  {
    bank: "Solapur Janata Sahakari Bank",
    ifscPrefix: "SJSB",
  },
  {
    bank: "Shree Kadi Nagarik Sahakari Bank",
    ifscPrefix: "SKNB",
  },
  {
    bank: "Shikshak Sahakari Bank",
    ifscPrefix: "SKSB",
  },
  {
    bank: "Sumitomo Mitsui Banking Corporation",
    ifscPrefix: "SMBC",
  },
  {
    bank: "Shivalik Small Finance Bank",
    ifscPrefix: "SMCB",
  },
  {
    bank: "Smriti Nagrik Sahakari Bank",
    ifscPrefix: "SMNB",
  },
  {
    bank: "Saraspur Nagrik Co-operative Bank",
    ifscPrefix: "SNBK",
  },
  {
    bank: "Societe Generale",
    ifscPrefix: "SOGE",
  },
  {
    bank: "Surat People's Co-operative Bank",
    ifscPrefix: "SPCB",
  },
  {
    bank: "Saraswat Co-operative Bank",
    ifscPrefix: "SRCB",
  },
  {
    bank: "SBM Bank",
    ifscPrefix: "STCB",
  },
  {
    bank: "Surat National Co-operative Bank",
    ifscPrefix: "SUNB",
  },
  {
    bank: "Suryoday Small Finance Bank",
    ifscPrefix: "SURY",
  },
  {
    bank: "Suco Souharda Sahakari Bank",
    ifscPrefix: "SUSB",
  },
  {
    bank: "Sutex Co-operative Bank",
    ifscPrefix: "SUTB",
  },
  {
    bank: "SVC Co-operative Bank",
    ifscPrefix: "SVCB",
  },
  {
    bank: "Shree Veershaiv Co-operative Bank",
    ifscPrefix: "SVSH",
  },
  {
    bank: "Syndicate Bank",
    ifscPrefix: "SYNB",
  },
  {
    bank: "Ankola Urban Co-operative Bank",
    ifscPrefix: "TAUB",
  },
  {
    bank: "Banaskantha Mercantile Co-operative Bank",
    ifscPrefix: "TBMC",
  },
  {
    bank: "Thane Bharat Sahakari Bank",
    ifscPrefix: "TBSB",
  },
  {
    bank: "Thane District Central Co-operative Bank",
    ifscPrefix: "TDCB",
  },
  {
    bank: "Tumkur Grain Merchant's Co-operative Bank",
    ifscPrefix: "TGMB",
  },
  {
    bank: "TJSB Sahakari Bank",
    ifscPrefix: "TJSB",
  },
  {
    bank: "Tamilnad Mercantile Bank",
    ifscPrefix: "TMBL",
  },
  {
    bank: "The Malad Sahakari Bank",
    ifscPrefix: "TMSB",
  },
  {
    bank: "Nawanagar Co-operative Bank",
    ifscPrefix: "TNCB",
  },
  {
    bank: "Chennai Central Co-operative Bank",
    ifscPrefix: "TNSC",
  },
  {
    bank: "Punjab State Co-operative Bank",
    ifscPrefix: "TPSC",
  },
  {
    bank: "Telangana State Co-operative Apex Bank",
    ifscPrefix: "TSAB",
  },
  {
    bank: "Satara Sahakari Bank",
    ifscPrefix: "TSSB",
  },
  {
    bank: "Textile Traders Co-operative Bank",
    ifscPrefix: "TTCB",
  },
  {
    bank: "Union Bank of India",
    ifscPrefix: "UBIN",
  },
  {
    bank: "UCO Bank",
    ifscPrefix: "UCBA",
  },
  {
    bank: "",
    ifscPrefix: "UCLB",
  },
  {
    bank: "Ujjivan Small Finance Bank",
    ifscPrefix: "UJVN",
  },
  {
    bank: "",
    ifscPrefix: "UNBA",
  },
  {
    bank: "United Overseas Bank",
    ifscPrefix: "UOVB",
  },
  {
    bank: "Uttar Pradesh Co-operative Bank",
    ifscPrefix: "UPCB",
  },
  {
    bank: "Urban Co-operative Bank Perinthalmanna",
    ifscPrefix: "URBN",
  },
  {
    bank: "United Bank of India",
    ifscPrefix: "UTBI",
  },
  {
    bank: "Axis Bank",
    ifscPrefix: "UTIB",
  },
  {
    bank: "Utkarsh Small Finance Bank",
    ifscPrefix: "UTKS",
  },
  {
    bank: "Udaipur Urban Co-operative Bank",
    ifscPrefix: "UUCB",
  },
  {
    bank: "Varachha Co-operative Bank",
    ifscPrefix: "VARA",
  },
  {
    bank: "Vasai Janata Sahakari Bank",
    ifscPrefix: "VASJ",
  },
  {
    bank: "The Vijay Co-operative Bank",
    ifscPrefix: "VCOB",
  },
  {
    bank: "Vijaya Bank",
    ifscPrefix: "VIJB",
  },
  {
    bank: "Vishweshwar Sahakari Bank",
    ifscPrefix: "VSBL",
  },
  {
    bank: "Vasai Vikas Sahakari Bank",
    ifscPrefix: "VVSB",
  },
  {
    bank: "West Bengal State Co-operative Bank",
    ifscPrefix: "WBSC",
  },
  {
    bank: "Yes Bank",
    ifscPrefix: "YESB",
  },
  {
    bank: "Zoroastrian Co-operative Bank",
    ifscPrefix: "ZCBL",
  },
  {
    bank: "Zila Sahakari Bank Ghaziabad",
    ifscPrefix: "ZSBL",
  },
];

const StickySearch = () => {
  const [suggestions, setSuggestions] = useState(bankList);
  const [isInputSticked, setIsInputSticked] = useState(false);

  const onSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filterSuggestions = bankList.filter((suggestion) =>
      suggestion.bank.includes(e.target.value)
    );

    setSuggestions(filterSuggestions);
  };

  const onScroll = (e: React.UIEvent<HTMLElement>) => {
    console.log(e.currentTarget.scrollTop > 120);
    if (e.currentTarget.scrollTop > 10) {
      setIsInputSticked(true);
    } else {
      setIsInputSticked(false);
    }
  };

  return (
    <section onScroll={onScroll}>
      <header></header>
      <main>
        <label className={isInputSticked ? "input-sticky" : ""}>
          <span>Search Bank</span>
          <input
            onScroll={onScroll}
            onChange={onSearchTermChange}
            type="text"
            name="bank-search"
            id="bank-search"
          />
        </label>
        {suggestions.map((suggestion) => (
          <p key={suggestion.ifscPrefix}>{suggestion.bank}</p>
        ))}
      </main>
    </section>
  );
};

export default StickySearch;
