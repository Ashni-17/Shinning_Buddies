export const NAV=[
['/','Dashboard','◐'],['/customers','Customers','☺'],['/surveys','Site surveys','⌖'],['/packages','Packages','▤'],['/quotations','Quotations','✎'],
['/payments','Payments','₹'],['/inventory','Inventory','▦'],['/dispatch','Dispatch','➤'],['/installations','Installations','⚒'],['/technicians','Technicians','✚'],
['/passport','Solar passport','❖'],['/warranty','Warranty','⛨'],['/tickets','Service tickets','✉'],['/finance','Finance','◈'],['/subsidy','Subsidy','✦']];
export const DATA={
customers:{title:'Customers',add:'Add customer',cols:['Name','City','Capacity','Stage'],rows:[['Meena Iyer','Chennai','5 kW','Quotation sent'],['Arun Traders','Coimbatore','25 kW','Installing'],['St. Mary School','Madurai','40 kW','Surveyed'],['Karthik R','Trichy','3 kW','Completed']]},
surveys:{title:'Site surveys',add:'Schedule survey',cols:['Site','Roof type','Shadow-free area','Status'],rows:[['Meena Iyer','RCC flat','42 m²','Done'],['Arun Traders','Metal sheet','180 m²','Pending'],['St. Mary School','RCC flat','320 m²','Done']]},
packages:{title:'Packages',add:'New package',cols:['Package','Panels','Inverter','Price','Status'],rows:[['Home Starter 3 kW','6 × 540 W','3 kW hybrid','₹1,85,000','Active'],['Home Plus 5 kW','10 × 540 W','5 kW on-grid','₹2,90,000','Active'],['Business 25 kW','46 × 540 W','25 kW three-phase','₹13,40,000','Active']]},
quotations:{title:'Quotations',add:'Create quotation',cols:['Quote','Customer','Package','Status'],rows:[['Q-1042','Meena Iyer','Home Plus 5 kW','Sent'],['Q-1043','Arun Traders','Business 25 kW','Approved'],['Q-1044','St. Mary School','Custom 40 kW','Draft']]},
payments:{title:'Payments',add:'Record payment',cols:['Receipt','Customer','Amount','Status'],rows:[['R-5521','Arun Traders','₹4,00,000','Paid'],['R-5522','Meena Iyer','₹90,000','Pending'],['R-5523','Karthik R','₹1,10,000','Paid']]},
inventory:{title:'Inventory',add:'Receive stock',cols:['Item','Serial range','In stock','Status'],rows:[['540 W mono panel','SB-P-0001…0400','212','In stock'],['5 kW inverter','SB-I-0001…0030','4','Low'],['Mounting rails','—','860','In stock'],['Net meter','SB-M-0001…0020','0','Out']]},
dispatch:{title:'Dispatch',add:'New dispatch',cols:['Dispatch','Site','Vehicle','Status'],rows:[['D-301','Arun Traders','TN 09 AB 4412','In transit'],['D-302','Meena Iyer','TN 01 CD 8830','Delivered'],['D-303','St. Mary School','TN 58 EF 1204','Scheduled']]},
installations:{title:'Installations',add:'Assign crew',cols:['Site','Crew','Start','Status'],rows:[['Arun Traders','Crew B','03 Nov','Installing'],['Meena Iyer','Crew A','06 Nov','Scheduled'],['Karthik R','Crew A','21 Oct','Completed']]},
technicians:{title:'Technicians',add:'Add technician',cols:['Name','Crew','Jobs done','Status'],rows:[['Vignesh K','Crew A','48','Active'],['Surya M','Crew B','37','Active'],['Dinesh P','Crew B','22','On leave']]},
passport:{title:'Solar passport',add:'Issue passport',cols:['Passport','Customer','System','Status'],rows:[['SP-8801','Karthik R','3 kW rooftop','Active'],['SP-8802','Arun Traders','25 kW rooftop','Pending']]},
warranty:{title:'Warranty',add:'Register warranty',cols:['Card','Item','Valid until','Status'],rows:[['W-2201','540 W panels','Oct 2051','Active'],['W-2202','5 kW inverter','Oct 2036','Active'],['W-2203','Net meter','Mar 2026','Expired']]},
tickets:{title:'Service tickets',add:'Raise ticket',cols:['Ticket','Customer','Issue','Status'],rows:[['T-771','Karthik R','Low generation','Open'],['T-772','Meena Iyer','Inverter error E04','In progress'],['T-773','Arun Traders','Panel cleaning','Resolved']]},
finance:{title:'Finance',add:'Add entry',cols:['Entry','Category','Amount','Status'],rows:[['Panel purchase','Expense','₹9,20,000','Paid'],['Arun Traders advance','Income','₹4,00,000','Paid'],['Crew wages','Expense','₹1,35,000','Pending']]},
subsidy:{title:'Subsidy',add:'Start application',cols:['Application','Customer','Scheme','Status'],rows:[['SUB-90','Meena Iyer','PM Surya Ghar','Submitted'],['SUB-91','Karthik R','PM Surya Ghar','Approved'],['SUB-92','Arun Traders','—','Rejected']]}};
export const TONE={
  // Green
  Done:'g',Paid:'g',Approved:'g',Delivered:'g',Completed:'g',Active:'g','In stock':'g',Resolved:'g',Issued:'g',
  Feasible:'g',Disbursed:'g','Inspection passed':'g',Replaced:'g','Net-metering approved':'g','Order confirmed':'g',Closed:'g',
  
  // Blue
  Sent:'b',Installing:'b','In transit':'b','In progress':'b','Structure done':'b','Electrical done':'b','Testing & QC':'b',
  Submitted:'b',Scheduled:'b',Scheduling:'b','Quotation sent':'b',Surveyed:'b','Survey scheduled':'b',Assigned:'b',
  'Site ready':'b','On site':'b',Processing:'b','Under review':'b','Document check':'b',Seasonal:'b',Promotional:'b',
  
  // Amber
  Pending:'a','Pending review':'a','Pending approval':'a',Draft:'a',Low:'a',Open:'a','On leave':'a',Busy:'a',
  'On hold':'a','On Hold':'a','Waiting for parts':'a','Partially paid':'a',Preparing:'a',Loaded:'a',
  'Claim in progress':'a',Lead:'a',Revised:'a',Ordered:'a',Reserved:'a',Training:'a',
  
  // Red
  Out:'r',Expired:'r',Rejected:'r',Failed:'r',Cancelled:'r',Unfeasible:'r',Overdue:'r',Disputed:'r',
  Discontinued:'r',Inactive:'r',Void:'r',Suspended:'r',Delayed:'r',Returned:'r',Archived:'r'
};

export const STATUS_OPTIONS = {
  // 1. Customers: lifecycle stages from lead acquisition to completion
  customers: [
    'Lead',
    'Surveyed',
    'Quotation sent',
    'Installing',
    'Active',
    'Completed',
    'On hold',
    'Cancelled'
  ],

  // 2. Site Surveys: survey schedule & roof feasibility outcomes
  surveys: [
    'Scheduled',
    'In progress',
    'Pending',
    'Done',
    'Feasible',
    'Pending review',
    'Unfeasible',
    'Cancelled'
  ],

  // 3. Packages: catalog package availability
  packages: [
    'Active',
    'Seasonal',
    'Draft',
    'Archived',
    'Discontinued'
  ],

  // 4. Quotations: formal quotation negotiation lifecycle
  quotations: [
    'Draft',
    'Under review',
    'Sent',
    'Approved',
    'Revised',
    'Rejected',
    'Expired'
  ],

  // 5. Payments: milestone customer payment tracking
  payments: [
    'Pending',
    'Paid',
    'Partially paid',
    'Overdue',
    'Failed',
    'Refunded'
  ],

  // 6. Inventory: warehouse stock levels & procurement
  inventory: [
    'In stock',
    'Low',
    'Out',
    'Ordered',
    'Reserved',
    'Discontinued'
  ],

  // 7. Dispatch: materials and hardware vehicle transport
  dispatch: [
    'Scheduled',
    'Preparing',
    'Loaded',
    'In transit',
    'Delivered',
    'Delayed',
    'Cancelled'
  ],

  // 8. Installations: on-site physical engineering stages
  installations: [
    'Scheduled',
    'Site ready',
    'Installing',
    'Structure done',
    'Electrical done',
    'Testing & QC',
    'Completed',
    'On hold',
    'Cancelled'
  ],

  // 9. Technicians: field crew availability & deployment status
  technicians: [
    'Active',
    'On site',
    'Scheduled',
    'Busy',
    'On leave',
    'Training',
    'Inactive'
  ],

  // 10. Solar Passport: digital grid synchronisation & passbook credentials
  passport: [
    'Active',
    'Pending',
    'Inspection passed',
    'Net-metering approved',
    'Issued',
    'Suspended',
    'Expired'
  ],

  // 11. Warranty: module, inverter and workmanship coverage
  warranty: [
    'Active',
    'Claim in progress',
    'Under review',
    'Replaced',
    'Expired',
    'Void'
  ],

  // 12. Service Tickets: post-install maintenance & customer support
  tickets: [
    'Open',
    'Assigned',
    'Scheduled',
    'In progress',
    'Waiting for parts',
    'Resolved',
    'Closed'
  ],

  // 13. Finance: revenue, project expenses & accounting ledger
  finance: [
    'Pending',
    'Processing',
    'Approved',
    'Paid',
    'Overdue',
    'Disputed',
    'Cancelled'
  ],

  // 14. Subsidy: governmental subsidy disbursal workflows (PM Surya Ghar)
  subsidy: [
    'Draft',
    'Document check',
    'Submitted',
    'Under review',
    'Approved',
    'Disbursed',
    'Rejected'
  ],

  // Default fallback
  default: [
    'Active',
    'Scheduled',
    'In progress',
    'Pending',
    'Completed',
    'Cancelled'
  ]
};

export function getStatusTone(status) {
  if (!status) return 'b';
  if (TONE[status]) return TONE[status];
  const s = String(status).toLowerCase();
  if (s.includes('active') || s.includes('done') || s.includes('paid') || s.includes('approved') || s.includes('complete') || s.includes('stock') || s.includes('resolved') || s.includes('issued') || s.includes('feasible') || s.includes('disburs') || s.includes('pass')) return 'g';
  if (s.includes('install') || s.includes('schedul') || s.includes('transit') || s.includes('progress') || s.includes('sent') || s.includes('submit') || s.includes('survey') || s.includes('ready') || s.includes('assign') || s.includes('season')) return 'b';
  if (s.includes('pend') || s.includes('draft') || s.includes('low') || s.includes('open') || s.includes('leave') || s.includes('hold') || s.includes('part') || s.includes('wait') || s.includes('lead') || s.includes('order') || s.includes('prepar') || s.includes('claim')) return 'a';
  if (s.includes('out') || s.includes('expir') || s.includes('reject') || s.includes('fail') || s.includes('cancel') || s.includes('close') || s.includes('inactive') || s.includes('overdue') || s.includes('unfeas') || s.includes('void') || s.includes('delay') || s.includes('disput') || s.includes('discontin') || s.includes('archiv')) return 'r';
  return 'b';
}
