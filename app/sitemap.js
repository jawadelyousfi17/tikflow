import { MetadataRoute } from 'next'
 
export default function sitemap() {
  return [
    {
      url: 'https://tikfoo.vip',

      priority: 1,
    },
    {
      url: 'https://tikfoo.vip/about',
      
    },
    {
      url: 'https://tikfoo.vip/terms',
    
    },
  ]
}