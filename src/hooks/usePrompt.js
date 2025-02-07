import { useState, useEffect } from 'react';
import axios from 'axios';

const usePrompt = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const generatePrompt = async () => {
      try {
        setLoading(true);

        // Fetch ETH price
        const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
        const response = await axios.get(url);
        const ethPrice = response.data.ethereum.usd;

        const dynamicPrompt = `

        <h2>🔹 Welcome to AICM! How can we assist you today?</h2>
        
        <ul>
          <li><strong>🆓 Essential User:</strong> Get started with free AI-powered tools.</li>
          <li><strong>🚀 Elevate User:</strong> Unlock enhanced features and AI-driven insights.</li>
          <li><strong>🌟 Elite User:</strong> Gain top placement, AI tools, and social media boost.</li>
        </ul>
        
        <hr>
        
        <h2>🆓 Essential Plan (Free AI-Powered Tools)</h2>
        ✔️ AI Conversion Pro <br>
        ✔️ AI Smart Search Optimization (Coming Soon) <br>
        ✔️ Product/Service Detail Page <br>
        ✔️ Real Reviews & Ratings <br>
        ✔️ Secure Payment Gateway <br>
        ✔️ Basic Analytics Dashboard <br>
        ✔️ AI-Driven FAQs <br>
        
        👉 <a href="https://aicm.store/pricing" target="_blank">Try for Free</a>
        
        <hr>
        
        <h2>🚀 Elevate Plan (Enhanced AI Capabilities – 0.5 ETH / $${(0.5 * ethPrice || 0).toFixed(2)})</h2>
        <strong>Includes all Essential Plan features</strong> plus: <br>
        ✔️ Verified Seller Badge <br>
        ✔️ AI Vendor Copilot (Coming Soon) <br>
        ✔️ Reduced Transaction Fees <br>
        ✔️ Sponsored Ad Discounts <br>
        
        👉 <a href="https://aicm.store/pricing" target="_blank">Buy Now – 0.5 ETH (~$${(0.5 * ethPrice || 0).toFixed(2)})</a>
        
        <hr>
        
        <h2>🌟 Elite Plan (Premium AI Features – 1 ETH / $${(1 * ethPrice || 0).toFixed(2)})</h2>
        <strong>Includes all Elevate Plan features</strong> plus: <br>
        ✔️ Custom Token Integration <br>
        ✔️ Multi-Language AI Support <br>
        ✔️ Dedicated Account Manager <br>
        ✔️ Exclusive Beta Feature Access <br>
        ✔️ Project Awareness Campaign <br>
        
        👉 <a href="https://aicm.store/pricing" target="_blank">Buy Now – 1 ETH (~$${(1 * ethPrice || 0).toFixed(2)})</a>
        
        <hr>
        
        <h2>📌 List of AICM Products & Pricing:</h2>
        <ul>
          <li>🆓 <strong>Essential Plan:</strong> Free → <a href="https://aicm.store/pricing" target="_blank">Try Now</a></li>
          <li>🚀 <strong>Elevate Plan:</strong> 0.5 ETH (~$${(0.5 * ethPrice || 0).toFixed(2)}) → <a href="https://aicm.store/pricing" target="_blank">Buy Now</a></li>
          <li>🌟 <strong>Elite Plan:</strong> 1 ETH (~$${(1 * ethPrice || 0).toFixed(2)}) → <a href="https://aicm.store/pricing" target="_blank">Buy Now</a></li>
        </ul>
        
        <hr>
        
        <h2>❓ Need help choosing?</h2>
        Let me know your budget, business needs, or goals, and I’ll recommend the best plan for you!  
        
        <h2>💬 Additional Support:</h2>
        📧 Contact: <strong>info@aicm.store</strong> <br>
        🌐 Visit: <a href="https://aicm.store" target="_blank">AICM Website</a>
        
        `;
        
        

        setPrompt(dynamicPrompt);
      } catch (err) {
        console.error('Error generating prompt:', err.message);
        setError('Failed to generate prompt');
      } finally {
        setLoading(false);
      }
    };

    generatePrompt();
  }, []); // Empty dependency array ensures it runs only once

  return { prompt, loading, error };
};

export default usePrompt;
