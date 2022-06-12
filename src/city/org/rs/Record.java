package city.org.rs;

import java.sql.Timestamp;

public class Record {
	private long recordId;
	private String name;
	private Timestamp date;
	private double glucoseBlood;
	private double intakeCarbs;
	private double medicationDose;
	
	
	public Record() {
		
	}
	public Record(long recordId, Timestamp date, double glucoseBlood, double intakeCarbs, double medicationDose, String name) {
		this.recordId = recordId;
		this.date = date;
		this.glucoseBlood = glucoseBlood;
		this.intakeCarbs = intakeCarbs;
		this.medicationDose = medicationDose;
		this.name = name;
	}
	
	public Record(Timestamp date, double glucoseBlood, double intakeCarbs, double medicationDose, String name) {
		this.date = date;
		this.glucoseBlood = glucoseBlood;
		this.intakeCarbs = intakeCarbs;
		this.medicationDose = medicationDose;
		this.name = name;
	}
	
	public Timestamp getDate() {
		return date;
	}
	public long getRecordId() {
		return recordId;
	}
	public double getGlucoseBlood() {
		return glucoseBlood;
	}
	public double getIntakeCarbs() {
		return intakeCarbs;
	}
	public double getMedicationDose() {
		return medicationDose;
	}
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	public void setRecordId(long recordId) {
		this.recordId = recordId;
	}
	public void setDate(Timestamp date) {
		this.date = date;
	}
	public void setGlucoseBlood(double glucoseBlood) {
		this.glucoseBlood = glucoseBlood;
	}
	public void setIntakeCarbs(double intakeCarbs) {
		this.intakeCarbs = intakeCarbs;
	}
	public void setMedicationDose(double medicationDose) {
		this.medicationDose = medicationDose;
	}
	@Override
	public String toString() {
		return "Record [recordId=" + recordId + ", date=" + date + ", glucoseBlood=" + glucoseBlood + ", intakeCarbs=" + intakeCarbs
				+ ", medicationDose=" + medicationDose + "]";
	}
}
