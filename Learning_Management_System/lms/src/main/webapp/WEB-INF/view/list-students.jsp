<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<title>List Students</title>
</head>
<body>

	<div id="wrapper">
		<div id="header">
			<h2>LMS - Learning Management System</h2>
		</div>
	</div>
	
	<div id="container">
		<div id="content">
			<table>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Mobile</th>
				</tr>
				<c:forEach var="tempStudent" items="${students}">
					<tr>
						<td>${tempStudent.firstName}</td>
						<td>${tempStudent.lastName}</td>
						<td>${tempStudent.email}</td>
						<td>${tempStudent.mobile}</td>
							
					</tr>
				</c:forEach>
				
			</table>
		</div>
	</div>

</body>
</html>