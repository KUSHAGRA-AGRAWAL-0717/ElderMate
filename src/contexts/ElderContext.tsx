
import React, { createContext, useContext, useState, ReactNode } from "react";
import { demoPatient, demoHealthData, demoMedications, demoAppointments, demoContacts } from "@/utils/demoData";

export type HealthStatus = "normal" | "warning" | "alert" | "inactive";

export interface VitalSign {
  name: string;
  value: number;
  unit: string;
  status: HealthStatus;
  min: number;
  max: number;
  time: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  timeOfDay: string[];
  taken: boolean;
  nextDose: string;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  notes?: string;
}

export interface Contact {
  id: string;
  name: string;
  relationship: string;
  phoneNumber: string;
  lastContact: string;
  image?: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  emergencyContact: string;
  address: string;
  roomActivity: HealthStatus;
  lastActive: string;
}

export interface ElderContextType {
  patient: Patient;
  healthData: VitalSign[];
  medications: Medication[];
  appointments: Appointment[];
  contacts: Contact[];
  alerts: string[];
  emergencyMode: boolean;
  toggleEmergencyMode: () => void;
  acknowledgeAlert: (index: number) => void;
  markMedicationTaken: (id: string) => void;
}

const ElderContext = createContext<ElderContextType | undefined>(undefined);

export const ElderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [patient, setPatient] = useState<Patient>(demoPatient);
  const [healthData, setHealthData] = useState<VitalSign[]>(demoHealthData);
  const [medications, setMedications] = useState<Medication[]>(demoMedications);
  const [appointments, setAppointments] = useState<Appointment[]>(demoAppointments);
  const [contacts, setContacts] = useState<Contact[]>(demoContacts);
  const [alerts, setAlerts] = useState<string[]>([
    "Missed morning medication: Blood pressure pill",
    "Heart rate elevated above normal range",
    "Unusual inactivity detected in living room"
  ]);
  const [emergencyMode, setEmergencyMode] = useState<boolean>(false);

  const toggleEmergencyMode = () => {
    setEmergencyMode(prev => !prev);
  };

  const acknowledgeAlert = (index: number) => {
    setAlerts(prev => prev.filter((_, i) => i !== index));
  };

  const markMedicationTaken = (id: string) => {
    setMedications(prev => 
      prev.map(med => 
        med.id === id ? { ...med, taken: true } : med
      )
    );
  };

  return (
    <ElderContext.Provider value={{
      patient,
      healthData,
      medications,
      appointments,
      contacts,
      alerts,
      emergencyMode,
      toggleEmergencyMode,
      acknowledgeAlert,
      markMedicationTaken
    }}>
      {children}
    </ElderContext.Provider>
  );
};

export const useElder = (): ElderContextType => {
  const context = useContext(ElderContext);
  if (context === undefined) {
    throw new Error("useElder must be used within an ElderProvider");
  }
  return context;
};
