package city.org.rs;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

//Singleton class
public class RecordDAO {
	private static RecordDAO instance; // object to hold single class instance
	private Connection connection;
	private String jdbcURI = "postgres://iauiatldkscmpp:ad05b6b67134e5cf030d07bc9c9723794a5b905d152e1fcabed868e38d214190@ec2-52-208-164-5.eu-west-1.compute.amazonaws.com:5432/db9ns6kjiac4mm";

	// Singleton class "design pattern": defines private constructor that can only
	// be called from within the class itself

	// Private constructor
	private RecordDAO() {
		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e1) {
			System.out.println("class not found");
			e1.printStackTrace();
		}
		try{
			System.out.println("Inside of DB connection");
			URI dbUri = new URI(jdbcURI);
			String username = dbUri.getUserInfo().split(":")[0];
			String password = dbUri.getUserInfo().split(":")[1];
			System.out.println(username);
			System.out.println(password);

			String dbUrl = "jdbc:postgresql://" + dbUri.getHost() + ':' + dbUri.getPort() + dbUri.getPath()
					+ "?sslmode=require";
			connection = DriverManager.getConnection(dbUrl, username, password);
			System.out.println(connection.isValid(4));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("error trying to establish connection");
			StringWriter writer = new StringWriter();
			e.printStackTrace( new PrintWriter(writer,true ));
			System. out.println("exeption stack is :\n"+writer.toString());
		} catch (URISyntaxException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	// Creates and returns single class instance
	// The if statement ensures that, no matter how many times getInstance() is
	// called (from external objects_, it will only create
	// a single instance of the class
	public static RecordDAO getInstance() {
		if (instance == null) {
			instance = new RecordDAO();
		}
		return instance;
	}
	// ----

	public ArrayList<Record> getAllInfo(String id, long date1, long date2) throws SQLException {
		String query = "SELECT * FROM record WHERE date between ? and ?";
		System.out.println("good");
		if (id != null && id.length()>0)
			query += " AND \"userName\" = ?";
		query += ';';
		PreparedStatement ps = connection.prepareStatement(query);
		ps.setTimestamp(1, new Timestamp(date1));
		if (date2 == 0) {
			ps.setTimestamp(2, new Timestamp(System.currentTimeMillis() + 86400000)); // adding an extra day to account
																						// for timezone messiness, this
																						// will get all records up to
																						// today
		} else {
			ps.setTimestamp(2, new Timestamp(date2));
		}

		if (id != null && id.length()>0)
			ps.setString(3, id);
		System.out.println(ps.toString());

		ResultSet rs = ps.executeQuery();
		ArrayList<Record> response = new ArrayList<Record>();
		try {
			while (rs.next()) {
				Record record = rowToRecord(rs);
				response.add(record);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return response;
		// returns all information of record from the user specified time
	}

	public RecordAverageDTO getAverageGlucose(String id, long date1, long date2) throws SQLException {
		String query = "SELECT AVG(\"intakeCarbs\"), AVG(\"glucoseBlood\"), AVG(\"medicationDose\") FROM record WHERE date between ? and ?";
		if (id != null && id.length()>0)
			query += " AND \"userName\" = ?";
		query += ';';
		PreparedStatement ps = connection.prepareStatement(query);
		ps.setTimestamp(1, new Timestamp(date1));
		if (date2 == 0) {
			ps.setTimestamp(2, new Timestamp(System.currentTimeMillis() + 86400000)); // adding an extra day to account
																						// for timezone messiness, this
																						// will get all records up to
																						// today
		} else {
			ps.setTimestamp(2, new Timestamp(date2));
		}

		if (id != null && id.length()>0)
			ps.setString(3, id);
		System.out.println(ps.toString());

		ResultSet rs = ps.executeQuery();
//		RecordAverageDTO response = null;
		try {
			 rs.next();

		} catch (SQLException e) {
			e.printStackTrace();
		}
		System.out.println(rs.getDouble(1));
		RecordAverageDTO response = new RecordAverageDTO();
		response.setAverageIntakeCarbs(rs.getDouble(1));
		response.setAverageGlucose(rs.getDouble(2));
		response.setAverageMedicationDose(rs.getDouble(3));
		return response;
		// returns the average daily blood glucose level over a (user- specified)
		// period.
	}


	public int addRecord(Record record) {
		int id = -1;
		try {
			PreparedStatement ps = connection.prepareStatement(
					"INSERT INTO record" + "(\"glucoseBlood\", \"intakeCarbs\", \"medicationDose\", \"date\", \"userName\")"
							+ " VALUES (?, ?, ?, ?, ?)" + "RETURNING \"recordId\";");

			ps.setDouble(1, record.getGlucoseBlood());
			ps.setDouble(2, record.getIntakeCarbs());
			ps.setDouble(3, record.getMedicationDose());
			ps.setTimestamp(4, record.getDate());
			ps.setString(5, record.getName());

			System.out.println(ps.toString());
			ps.execute();
			ResultSet res = ps.getResultSet();
			res.next();
			id = res.getInt(1);
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return id;
	}


	public boolean update(Record record) {
		try {
			PreparedStatement ps = connection.prepareStatement(
					"UPDATE record SET \"glucoseBlood\" = ?, \"intakeCarbs\" = ?, \"medicationDose\" = ?, \"date\" = ?, \"userName\" = ? where \"recordId\" = ?;");

			ps.setDouble(1, record.getGlucoseBlood());
			ps.setDouble(2, record.getIntakeCarbs());
			ps.setDouble(3, record.getMedicationDose());
			ps.setTimestamp(4, record.getDate());
			ps.setString(5, record.getName());
			ps.setLong(6, record.getRecordId());
			System.out.println(ps.toString());
			ps.execute();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
	}
	/*
	 * Helper function that maps a database result set to a Record
	 */
	public Record rowToRecord(ResultSet rs) {
		Record record = new Record();
		try {
			record.setRecordId(rs.getLong("recordId"));
			record.setDate(rs.getTimestamp("date"));
			record.setIntakeCarbs(rs.getDouble("intakeCarbs"));
			record.setGlucoseBlood(rs.getDouble("glucoseBlood"));
			record.setMedicationDose(rs.getDouble("medicationDose"));
			record.setName(rs.getString("userName"));
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return record;
	}

	public boolean delete(Long id) {
		try {
			PreparedStatement ps = connection.prepareStatement(
					"DELETE from record where \"recordId\" = ?;");

			ps.setLong(1, id);
			System.out.println(ps.toString());
			ps.execute();
			return true;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
	}

}
