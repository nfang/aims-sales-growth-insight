export const CATEGORIES = [{
  id: 1, name: 'Sales'
}, {
  id: 2, name: 'Operational Involvement'
}];

export const OBJECTIVES = [{
  id: 1, name: 'Value Selling', description: 'Value Selling', elements: [1,7,8,9]
}, {
  id: 2, name: 'Ability to Differentiate', description: 'Ability to Differentiate', elements: [1,7,8,9]
}, {
  id: 3, name: 'Overcoming Objections', description: 'Overcoming Objections', elements: [1,7,8,9,10]
}, {
  id: 4, name: 'Sales Competencies', description: 'Sales Competencies', elements: [1,7,8,9]
}, {
  id: 5, name: 'Risk & Insurance Plans', description: 'Risk & Insurance Plans', elements: [1,2,7,8,10]
}, {
  id: 6, name: 'Bid Preparation', description: 'Bid Preparation', elements: [2,7,8]
}, {
  id: 7, name: 'BD Tools & Templates', description: 'BD Tools & Templates', elements: [2,7,8,9]
}, {
  id: 8, name: 'Service Excellence', description: 'Service Excellence', elements: [2,3,7,8,9,11]
}, {
  id: 9, name: 'Product Development (Human Asset & Environmental)', description: 'Product Development', elements: [2,7,10,11]
}, {
  id: 10, name: 'Business Planning', description: 'Business Planning', elements: [3,7,8,9,10,11]
}, {
  id: 11, name: 'Business Benchmarking', description: 'Business Benchmarking', elements: [3,7,10,11]
}, {
  id: 12, name: 'Ideal Customer Profile', description: 'Ideal Customer Profile', elements: [3,7,8,9,10]
}, {
  id: 13, name: 'Industry Segmentation', description: 'Industry Segmentation', elements: [3,7,8,10,11]
}, {
  id: 14, name: 'Marketing', description: 'Marketing', elements: [3,7,8,9]
}, {
  id: 15, name: 'Website Development', description: 'Website Development', elements: [3,7,8,11]
}, {
  id: 16, name: 'Search Engine Optimisation', description: 'Search Engine Optimisation', elements: [3,7,8,9]
}, {
  id: 17, name: 'Sales Process', description: 'Sales Process', elements: [3,7,8,9,10]
}, {
  id: 18, name: 'Lead Generation Outsourcing', description: 'Lead Generation Outsourcing', elements: [3,8,9]
}, {
  id: 19, name: 'Net Promoter Score', description: 'Net Promoter Score', elements: [3,7,8,10]
}, {
  id: 20, name: 'Business Growth Coaching', description: 'Business Growth Coaching', elements: [3,7,8,9]
}, {
  id: 21, name: 'Top Performer', description: 'Top Performer', elements: [4,7,8,9,10]
}, {
  id: 22, name: 'Employee Benchmarking', description: 'Employee Benchmarking', elements: [4,7,10,11]
}, {
  id: 23, name: 'Employee Measurement', description: 'Employee Measurement', elements: [4,7,8,10]
}, {
  id: 24, name: 'Employee Retention', description: 'Employee Retention', elements: [4,7,8,10]
}, {
  id: 25, name: 'Employee Development', description: 'Employee Development', elements: [4,7,8,9,10,11]
}, {
  id: 26, name: 'Top Performer Programs', description: 'Top Performer Programs', elements: [4,7,8,9,10]
}, {
  id: 27, name: 'BD Capability', description: 'BD Capability', elements: [4,8,9,10]
}, {
  id: 28, name: 'Understanding Risk', description: 'Understanding Risk', elements: [4,7,8]
}, {
  id: 29, name: 'Competencies', description: 'Competencies', elements: [4,7,8,9,10,11]
}, {
  id: 30, name: 'Training', description: 'Training', elements: [4,9,10]
}, {
  id: 31, name: 'Coaching', description: 'Coaching', elements: [4,9,10]
}, {
  id: 32, name: 'Professional Sales Coaching', description: 'Professional Sales Coaching', elements: [4,8,9]
}, {
  id: 33, name: 'Talent Management', description: 'Talent Management', elements: [4,9,10]
}, {
  id: 34, name: 'Team Management', description: 'Team Management', elements: [4,7,8,9,10,11]
}, {
  id: 35, name: 'AIMS Funded Programs', description: 'AIMS Funded Programs', elements: [5,7,8]
}, {
  id: 36, name: 'AIMS Subsidised Programs', description: 'AIMS Subsidised Programs', elements: [5,7,8,10]
}, {
  id: 37, name: 'Innovation Centre', description: 'Innovation Centre', elements: [5,7,8,9]
}, {
  id: 38, name: 'New Products or Services', description: 'New Products or Services', elements: [5,7,8,11]
}, {
  id: 39, name: 'Knowledge Centre', description: 'Knowledge Centre', elements: [5,7,8,11]
}, {
  id: 40, name: 'Sales Academy', description: 'Sales Academy', elements: [5,8,9]
}, {
  id: 41, name: 'Benchmarking', description: 'Benchmarking', elements: [5]
}, {
  id: 42, name: 'Insurer Funded Programs', description: 'Insurer Funded Programs', elements: [6,7,8,10]
}, {
  id: 43, name: 'Exchange Programs', description: 'Exchange Programs', elements: [6,7,9]
}, {
  id: 44, name: 'Channel Management', description: 'Channel Management', elements: [6,7,8,10]
}, {
  id: 45, name: 'Research Management', description: 'Research Management', elements: [6,7,8,10]
}];

export const ELEMENTS = [{
  id: 1, name: 'Price', category: { id: 1, name: 'Sales' }
}, {
  id: 2, name: 'Product', category: { id: 1, name: 'Sales' }
}, {
  id: 3, name: 'Process', category: { id: 1, name: 'Sales' }
}, {
  id: 4, name: 'People', category: { id: 1, name: 'Sales' }
}, {
  id: 5, name: 'Portfolio', category: { id: 1, name: 'Sales' }
}, {
  id: 6, name: 'Partners', category: { id: 1, name: 'Sales' }
}, {
  id: 7, name: 'Broking', category: { id: 2, name: 'Operational Involvement' }
}, {
  id: 8, name: 'Sales', category: { id: 2, name: 'Operational Involvement' }
}, {
  id: 999, name: '_placeholder_', category: { id: 2, name: 'Operational Involvement' }
}, {
  id: 9, name: 'HR', category: { id: 2, name: 'Operational Involvement' }
}, {
  id: 10, name: 'Finance and Admin', category: { id: 2, name: 'Operational Involvement' }
}, {
  id: 11, name: 'Regulatory Compliance', category: { id: 2, name: 'Operational Involvement' }
}];
