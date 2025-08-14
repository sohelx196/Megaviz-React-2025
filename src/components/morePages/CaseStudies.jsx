import React from 'react'
import ComingSoon from '../ComingSoon'
import caseStudies from '../../assets/icons/comingSoon/caseStudies.png'
function CaseStudies() {
  return (
     <div className=''>
     <ComingSoon
     ComingSoonImg={caseStudies}
      text1="Coming"
      text2="Soon!"
     />
    </div>
  )
}

export default CaseStudies