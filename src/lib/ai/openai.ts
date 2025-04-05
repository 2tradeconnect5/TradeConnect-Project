import { Configuration, OpenAIApi } from 'openai';

// Initialize OpenAI client with API key
// In production, this would be set in your environment
const openaiApiKey = process.env.OPENAI_API_KEY || 'your-openai-api-key';

const configuration = new Configuration({
  apiKey: openaiApiKey,
});

const openai = new OpenAIApi(configuration);

// Helper functions for OpenAI operations
export async function matchJobToTrades(jobDescription: string, location: string, tradeType: string) {
  try {
    const prompt = `
      Job Description: ${jobDescription}
      Location: ${location}
      Trade Type: ${tradeType}
      
      Based on the above job details, identify the top 3 most suitable trades from our database.
      Consider factors like expertise, location proximity, and availability.
      Return a JSON array with trade IDs and match scores (0-100).
    `;
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 500,
      temperature: 0.3,
    });
    
    const text = response.data.choices[0]?.text || '';
    
    // Extract JSON from response
    const jsonMatch = text.match(/\[.*\]/s);
    if (!jsonMatch) {
      throw new Error('Failed to parse AI response');
    }
    
    const matches = JSON.parse(jsonMatch[0]);
    return { matches, error: null };
  } catch (error) {
    console.error('Error matching job to trades:', error);
    return { 
      matches: [
        { trade_id: "1", score: 95 },
        { trade_id: "2", score: 82 },
        { trade_id: "3", score: 78 }
      ], 
      error 
    };
  }
}

export async function analyzeJobTrends(jobs: any[], timeframe: string = '30days') {
  try {
    // In a real implementation, this would send job data to OpenAI for analysis
    // For now, we'll return mock trend analysis
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      trends: {
        popularTradeTypes: [
          { type: 'plumber', count: 24, percentChange: 12 },
          { type: 'electrician', count: 18, percentChange: 8 },
          { type: 'carpenter', count: 12, percentChange: -3 }
        ],
        busyLocations: [
          { location: 'Dublin', count: 32, percentChange: 15 },
          { location: 'Cork', count: 14, percentChange: 7 },
          { location: 'Galway', count: 10, percentChange: 5 }
        ],
        averageJobValue: {
          value: 350,
          percentChange: 5
        },
        seasonalTrends: {
          current: 'increasing',
          forecast: 'peak in 2 weeks'
        }
      },
      error: null
    };
  } catch (error) {
    console.error('Error analyzing job trends:', error);
    return { trends: null, error };
  }
}

export async function generateJobDescription(details: {
  tradeType: string;
  location: string;
  timeframe: string;
  budget?: string;
  specificRequirements?: string;
}) {
  try {
    const prompt = `
      Generate a detailed job description for a ${details.tradeType} job with the following details:
      - Location: ${details.location}
      - Timeframe: ${details.timeframe}
      ${details.budget ? `- Budget: ${details.budget}` : ''}
      ${details.specificRequirements ? `- Specific Requirements: ${details.specificRequirements}` : ''}
      
      The job description should be professional, clear, and include all necessary details for a trade professional.
    `;
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 500,
      temperature: 0.7,
    });
    
    const description = response.data.choices[0]?.text?.trim() || '';
    return { description, error: null };
  } catch (error) {
    console.error('Error generating job description:', error);
    return { 
      description: `Looking for a professional ${details.tradeType} in ${details.location} for a job needed within ${details.timeframe}. ${details.specificRequirements || ''}`, 
      error 
    };
  }
}
