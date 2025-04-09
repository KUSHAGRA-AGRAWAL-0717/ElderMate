
import { Patient, VitalSign, Medication, Appointment, Contact } from "@/contexts/ElderContext";

export const demoPatient: Patient = {
  id: "patient-001",
  name: "Eleanor Johnson",
  age: 78,
  gender: "Female",
  emergencyContact: "David Johnson (Son)",
  address: "123 Maple Street, Apt 4B",
  roomActivity: "normal",
  lastActive: "2 minutes ago"
};

export const demoHealthData: VitalSign[] = [
  {
    name: "Heart Rate",
    value: 82,
    unit: "bpm",
    status: "normal",
    min: 60,
    max: 100,
    time: "10 minutes ago"
  },
  {
    name: "Blood Pressure",
    value: 138,
    unit: "mmHg",
    status: "warning",
    min: 90,
    max: 130,
    time: "30 minutes ago"
  },
  {
    name: "Blood Oxygen",
    value: 97,
    unit: "%",
    status: "normal",
    min: 95,
    max: 100,
    time: "15 minutes ago"
  },
  {
    name: "Temperature",
    value: 98.6,
    unit: "°F",
    status: "normal",
    min: 97.7,
    max: 99.5,
    time: "45 minutes ago"
  }
];

export const demoMedications: Medication[] = [
  {
    id: "med-001",
    name: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    timeOfDay: ["Morning"],
    taken: false,
    nextDose: "Today, 8:00 AM"
  },
  {
    id: "med-002",
    name: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    timeOfDay: ["Morning", "Evening"],
    taken: true,
    nextDose: "Today, 6:00 PM"
  },
  {
    id: "med-003",
    name: "Vitamin D",
    dosage: "1000 IU",
    frequency: "Once daily",
    timeOfDay: ["Morning"],
    taken: true,
    nextDose: "Tomorrow, 8:00 AM"
  }
];

export const demoAppointments: Appointment[] = [
  {
    id: "appt-001",
    title: "Dr. Smith - Checkup",
    date: "April 15, 2025",
    time: "10:30 AM",
    location: "Memorial Hospital",
    notes: "Bring medication list and insurance card"
  },
  {
    id: "appt-002",
    title: "Physical Therapy",
    date: "April 12, 2025",
    time: "2:00 PM",
    location: "Wellness Center",
    notes: "Wear comfortable clothing"
  },
  {
    id: "appt-003",
    title: "Dentist - Cleaning",
    date: "May 5, 2025",
    time: "9:00 AM",
    location: "Bright Smile Dental"
  }
];

export const demoContacts: Contact[] = [
  {
    id: "contact-001",
    name: "David Johnson",
    relationship: "Son",
    phoneNumber: "(555) 123-4567",
    lastContact: "2 days ago"
  },
  {
    id: "contact-002",
    name: "Sarah Miller",
    relationship: "Daughter",
    phoneNumber: "(555) 987-6543",
    lastContact: "5 days ago"
  },
  {
    id: "contact-003",
    name: "Robert Taylor",
    relationship: "Friend",
    phoneNumber: "(555) 456-7890",
    lastContact: "1 week ago"
  }
];

export const healthDataHistory = {
  "Heart Rate": [
    { time: "8:00 AM", value: 72 },
    { time: "10:00 AM", value: 75 },
    { time: "12:00 PM", value: 78 },
    { time: "2:00 PM", value: 80 },
    { time: "4:00 PM", value: 82 }
  ],
  "Blood Pressure": [
    { time: "8:00 AM", value: 125 },
    { time: "10:00 AM", value: 128 },
    { time: "12:00 PM", value: 130 },
    { time: "2:00 PM", value: 135 },
    { time: "4:00 PM", value: 138 }
  ],
  "Blood Oxygen": [
    { time: "8:00 AM", value: 98 },
    { time: "10:00 AM", value: 98 },
    { time: "12:00 PM", value: 97 },
    { time: "2:00 PM", value: 97 },
    { time: "4:00 PM", value: 97 }
  ],
  "Temperature": [
    { time: "8:00 AM", value: 98.4 },
    { time: "10:00 AM", value: 98.5 },
    { time: "12:00 PM", value: 98.7 },
    { time: "2:00 PM", value: 98.6 },
    { time: "4:00 PM", value: 98.6 }
  ]
};

export const activityData = [
  { time: "5:00 AM", value: 0 },
  { time: "6:00 AM", value: 0 },
  { time: "7:00 AM", value: 3 },
  { time: "8:00 AM", value: 8 },
  { time: "9:00 AM", value: 7 },
  { time: "10:00 AM", value: 5 },
  { time: "11:00 AM", value: 6 },
  { time: "12:00 PM", value: 9 },
  { time: "1:00 PM", value: 7 },
  { time: "2:00 PM", value: 3 },
  { time: "3:00 PM", value: 5 },
  { time: "4:00 PM", value: 6 }
];
