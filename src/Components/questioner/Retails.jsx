import React from "react";
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Retails() {

const Retails = [
    { id : 1,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2020/09/Brand-logos.png',
      imageAlt: 'drama'
    },
    { id : 2,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2020/02/Male_fashion-strip.svg',
      imageAlt: 'drama'
    },
    { id : 3,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2020/12/Value-Fashion-Brands-1.png',
      imageAlt: 'drama'
    },
    { id : 3,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2021/09/youth-brands-banner-1.png',
      imageAlt: 'drama'
    },
    { id : 4,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2019/09/homeware-fashion-icons3.svg',
      imageAlt: 'drama'
    },
    { id : 5,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2021/09/Jewellery-brands-banner.png',
      imageAlt: 'drama'
    },
    { id : 6,
      imageSrc: 'https://tfglimited.co.za/wp-content/uploads/2019/09/sport-fashion-icons.svg',
      imageAlt: 'drama'
    },
  ];

    return(
      <div className="m-2">
        <select>
          <option value="">Drama</option>
        </select>
          {Retails.map((Retails) => (
          <div key={Retails.id} className="m-2">
            <img
                  src={ Retails.imageSrc}
                  alt={ Retails.imageAlt}
                  className="w-full h-full object-center object-cover w-50 h-50"
                />
           </div> 
          ))}
        
        <br/>
         <Link href ="/Municipality"className="justify-content-start"><ArrowBackIcon/> Back </Link>
        <Link href ="/Retails"className="justify-end">Next <ArrowForwardIcon/></Link>
      </div>
    );
}

export default Retails;