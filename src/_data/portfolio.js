const fetch = require('node-fetch');

module.exports = async function() {
  // Configuration - adjust these values
  const CMS_BASE_URL = process.env.CMS_BASE_URL || 'http://localhost:9292';
  const PORTFOLIO_SLUG = process.env.PORTFOLIO_SLUG || 'wasatch-bitworks';
  
  try {
    console.log(`Fetching portfolio data from: ${CMS_BASE_URL}/api/portfolio/${PORTFOLIO_SLUG}`);
    
    const response = await fetch(`${CMS_BASE_URL}/api/portfolio/${PORTFOLIO_SLUG}`);
    
    if (!response.ok) {
      console.warn(`Failed to fetch portfolio data: ${response.status} ${response.statusText}`);
      return getFallbackData();
    }
    
    const data = await response.json();
    console.log('Successfully fetched portfolio data from CMS');
    
    return data;
  } catch (error) {
    console.warn(`Error fetching portfolio data: ${error.message}`);
    console.log('Using fallback data instead');
    return getFallbackData();
  }
};

// Fallback data structure that matches the current site
function getFallbackData() {
  return {
    client: {
      name: "Zach Kane",
      slug: "zach-kane"
    },
    bio: {
      content: "After a long career in television serving the Wasatch Front, I shifted gears to software engineering and web design — bringing that same dedication to clear communication into building clean, functional websites.\n\nI create everything from lightweight static websites to complex custom builds with databases and dynamic features. My focus is on performance, scalability, and giving small businesses and founders the confidence to grow online."
    },
    projects: [
      {
        title: "Wasatch Bitworks",
        description: "The small biz web engine: CMS, storefront, and beautiful frontend built in Sinatra + Tailwind.",
        tech_stack: ["Ruby", "Sinatra", "PostgreSQL", "Tailwind CSS"],
        display_order: 0
      },
      {
        title: "Workout Tracker", 
        description: "Custom-built fitness app with user auth, progress tracking, and a no-fluff UI.",
        tech_stack: ["Ruby", "Sinatra", "PostgreSQL", "HTML", "CSS"],
        display_order: 1
      }
    ],
    gallery: [
      {
        image_url: "/images/sample1.jpg",
        caption: "Rufus Hummingbird",
        display_order: 0
      },
      {
        image_url: "/images/sample2.jpg", 
        caption: "Project Two",
        display_order: 1
      },
      {
        image_url: "/images/sample3.jpg",
        caption: "Project Three", 
        display_order: 2
      }
    ]
  };
}