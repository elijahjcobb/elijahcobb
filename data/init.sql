CREATE TABLE positions (
	id SERIAL PRIMARY KEY,
	slug TEXT UNIQUE NOT NULL,
	short_name TEXT,
	name TEXT NOT NULL,
	href TEXT NOT NULL,
	position TEXT NOT NULL,
	start_year INT NOT NULL,
	start_month INT NOT NULL,
	end_year INT,
	end_month INT,
	tasks JSON
);

CREATE TABLE links (
	id SERIAL PRIMARY KEY,
	href TEXT NOT NULL,
	position_id SERIAL,
	FOREIGN KEY (position_id) REFERENCES positions(id)
);