import React from 'react'
import CV from "../../assests/cv.pdf"

const CTA = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.setAttribute('download', 'G.Koshika_Dulanjana_CV.pdf'); 
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className='cta'>
      <button onClick={handleDownload} download className='btn btn-primary'>Download CV</button>
      <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA
