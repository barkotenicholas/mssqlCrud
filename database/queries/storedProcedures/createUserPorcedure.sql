CREATE OR ALTER PROCEDURE spCreateUser
	(
	 @firstName nvarchar(50),
	 @lastName nvarchar(50),
	 @email nvarchar(50),
	 @password nvarchar(150)
	)
	AS
		BEGIN

		INSERT INTO Users(first_name,last_name,email ,password) VALUES (@firstName,@lastName,@email,@password)

END