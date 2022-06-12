package city.org.rs;

public class RecordAverageDTO {
	public double averageGlucose;
	public double averageMedicationDose;
	public double averageIntakeCarbs;
	public double getAverageGlucose() {
		return averageGlucose;
	}
	public void setAverageGlucose(double averageGlucose) {
		this.averageGlucose = averageGlucose;
	}
	public double getAverageMedicationDose() {
		return averageMedicationDose;
	}
	public void setAverageMedicationDose(double averageMedicationDose) {
		this.averageMedicationDose = averageMedicationDose;
	}
	public double getAverageIntakeCarbs() {
		return averageIntakeCarbs;
	}
	public void setAverageIntakeCarbs(double averageIntakeCarbs) {
		this.averageIntakeCarbs = averageIntakeCarbs;
	}
	public RecordAverageDTO(double averageGlucose, double averageMedicationDose, double averageIntakeCarbs) {
		super();
		this.averageGlucose = averageGlucose;
		this.averageMedicationDose = averageMedicationDose;
		this.averageIntakeCarbs = averageIntakeCarbs;
	}
	
	public RecordAverageDTO() {
		
	}
	
}
