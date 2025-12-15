import React, { useState } from 'react'
import ProfesionalSlider from './../../assets/professional.jpg';
import MinimalistSlider from './../../assets/Minimalist-White.jpg';
import ModernGradientSlider from './../../assets/modern-gradient.jpg';
import DarkSlider  from './../../assets/dark.jpg';
import PastelSlider from './../../assets/pastel-ppt.jpg';
import TechSlider from './../../assets/tech.jpg';

const Design_Styles= 
[
  {
    "styleName": "Professional Blue 💼",
    "colors": {
      "primary": "#0A66C2",
      "secondary": "#1C1C1C",
      "accent": "#E8F0FE",
      "background": "#FFFFFF",
      "gradient": "linear-gradient(135deg, #0A66C2, #E8F0FE)"
    },
    "designGuide": "🧠 Create a professional corporate-style presentation with blue and white tones, modern sans-serif fonts, clean layout, and minimal icons. Use subtle gradients and geometric backgrounds for a trustworthy business feel.",
    "icon": "Briefcase",
    "bannerImage": ProfesionalSlider
  },
  {
    "styleName": "Minimal White ⚪",
    "colors": {
      "primary": "#1C1C1C",
      "secondary": "#AAAAAA",
      "accent": "#EDEDED",
      "background": "#FFFFFF",
      "gradient": "linear-gradient(135deg, #FFFFFF, #EDEDED)"
    },
    "designGuide": "🧠 Generate a minimalist slide deck with white backgrounds, black text, and light grey accents. Keep layouts clean, use lots of whitespace, and apply simple typography for a calm, elegant aesthetic.",
    "icon": "Square",
    "bannerImage": PastelSlider
  },
  {
    "styleName": "Modern Gradient 🌈",
    "colors": {
      "primary": "#8A2BE2",
      "secondary": "#00C9FF",
      "accent": "#92FE9D",
      "background": "#FFFFFF",
      "gradient": "linear-gradient(135deg, #8A2BE2, #00C9FF, #92FE9D)"
    },
    "designGuide": "🧠 Design a modern gradient-style PPT with vibrant gradient backgrounds, glassmorphism overlays, and smooth transitions. Use modern typography and bright gradients for an innovative, tech-savvy vibe.",
    "icon": "Sparkles",
    "bannerImage": ModernGradientSlider
  },
  {
    "styleName": "Elegant Dark 🖤",
    "colors": {
      "primary": "#0D0D0D",
      "secondary": "#1F1F1F",
      "accent": "#FFD700",
      "background": "#0D0D0D",
      "gradient": "linear-gradient(135deg, #0D0D0D, #1F1F1F)"
    },
    "designGuide": "🧠 Create a luxury-style dark presentation with black and gold accents, serif fonts, and subtle lighting effects. Keep it premium, cinematic, and elegant.",
    "icon": "Star",
    "bannerImage": DarkSlider
  },
  
  {
    "styleName": "Startup Pitch 🚀",
    "colors": {
      "primary": "#0052CC",
      "secondary": "#36B37E",
      "accent": "#172B4D",
      "background": "#FFFFFF",
      "gradient": "linear-gradient(135deg, #0052CC, #36B37E)"
    },
    "designGuide": "🧠 Design a sleek startup pitch deck with blue-green tones, bold headings, clean data charts, and a clear problem-solution layout. Keep slides dynamic and investor-friendly.",
    "icon": "Rocket",
    "bannerImage": TechSlider
  },

  {
    "styleName": "Infographic Style 📊",
    "colors": {
      "primary": "#007AFF",
      "secondary": "#FF9500",
      "accent": "#FF3B30",
      "background": "#FFFFFF",
      "gradient": "linear-gradient(135deg, #007AFF, #FF9500, #FF3B30)"
    },
    "designGuide": "🧠 Create an infographic-style presentation using colorful charts, vector icons, and bold data visuals. Focus on clarity, consistency, and engaging flow for data storytelling.",
    "icon": "BarChart",
    "bannerImage": MinimalistSlider
  }
]

export type DesignStyle=
 {
    styleName:string,
    colors:any,
    designGuide:string,
    icon:string,
    bannerImage:any

   }
// Is component ko ek function milega jiska naam selectStyle hoga
// jo DesignStyle type ka data lega
// aur kuch return nahi karega
type props={
   selectStyle:(style: DesignStyle) => void
}
// selectStyle ek callback function hai
// Child (SliderStyle) parent ko inform kar raha hai
// User ne ye design select kiya hai



const SliderStyle = ({selectStyle}:props) => {
    const[selectedStyle,setSelectedStyle] = useState<string>();
  return (
    <div className='mt-5'>
        <h2 className='font-bold text-xl'>Select Slider Style</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-3'>
            {Design_Styles.map((design,index)=>(
                <div
                  key={index}
                  className={`cursor-pointer ${design.styleName === selectedStyle ? 'p-1 rounded-2xl border-2' : ''}`}
                  onClick={()=>{setSelectedStyle(design.styleName);selectStyle(design)}}
                >
                    <img src={design.bannerImage} alt={design.styleName}
                    width={300}
                    height={300}
                    className='w-full rounded-2xl object-cover h-[120px] hover:scale-105 transition-all'
                    />
                    <h2 className='font-medium text-center mt-1'>{design.styleName}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}
export default SliderStyle    


// Props ke through jaane wale functions = callbacks
// User actions pe chalne wale functions = callbacks
// React / Firebase jo baad me call kare = callbacks
// The code uses callback functions to enable child-to-parent communication for 
// design selection and outline updates, as well as event callbacks for handling user interactions and lifecycle events.
// 