USE faerie_swimmingin;

CREATE TABLE Cortes (
	Id_Corte INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Descripción TEXT
    );
    
    CREATE TABLE Personajes (
    Id_Personaje INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Raza VARCHAR(50) NOT NULL,
    Descripción TEXT,
    fk_corte INT,
    FOREIGN KEY (fk_corte) REFERENCES Cortes(Id_Corte)
    );
    
    INSERT INTO Cortes (Nombre, Descripción)
    VALUES 
    ('La Corte Suprema', 'Gobierna sobre Elfhame y todas sus Cortes Menores'),
	('La Corte de los Dientes', 'Corte menor'),
	('La Corte de las Termitas', 'Corte menor'),
    ('La Corte de las Polillas', 'Corte menor');
    
    
    INSERT INTO Personajes (Nombre, Raza, Descripción)
    VALUES ('Cardan', 'Fae', 'Rey de Elfhame');
    
    UPDATE Personajes SET fk_corte = 1 WHERE Id_Personaje = 1;
    
    INSERT INTO Personajes (Nombre, Raza, Descripción, fk_corte)
    VALUES 
    ('Jude', 'Humana', 'Reina de Elfhame', 1),
    ('Vivi', 'Semifae', 'Hermana de Jude', 1),
    ('Taryn', 'Humana', 'Gemela de Jude', 1),
    ('Wren', 'Fae', 'Heredera de la Corte de los Dientes', 2),
    ('Oak', 'Fae', 'Heredero Greenbriar', 1),
    ('Bogdana', 'Fae', 'Bruja', 2),
    ('Grima Mog', 'Fae', 'Gorra roja', 1),
    ('Annet', 'Fae', 'Reina de la Corte de las Polillas', 4),
    ('Roiben', 'Fae', 'Rey de la Corte de las Termitas', 3);
    
    SELECT * FROM Personajes INNER JOIN Cortes ON Cortes.Id_Corte = Personajes.fk_corte;

    SELECT 
        Personajes.Id_Personaje,
        Personajes.Nombre AS Nombre_Personaje,
        Personajes.Raza,
        Personajes.Descripción,
        Cortes.Nombre AS Nombre_Corte
    FROM Personajes 
    INNER JOIN Cortes ON Cortes.Id_Corte = Personajes.fk_corte;

    SELECT * FROM Cortes;
    
    INSERT INTO Personajes(Nombre, Raza, Descripción) VALUES ('Madoc', 'Fae', 'Padre adoptivo de Jude, gorro rojo');

    UPDATE Personajes SET Nombre = 'Madoc', Raza = 'Fae', Descripción = 'Padre adoptivo de Jude, Taryn y Oak. Gorro rojo' WHERE Id_Personaje = 11;

    DELETE from Personajes WHERE Id_Personaje = 11;