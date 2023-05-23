CREATE TABLE bd_schema.speciality (
  id VARCHAR(10) PRIMARY KEY,
  specialityName VARCHAR(50)
);

INSERT INTO bd_schema.speciality (id, specialityName)
VALUES
    ('ESP001', 'plastic surgery'),
    ('ESP002', 'general medicine'),
    ('ESP003', 'obstetrics and gynecology'),
    ('ESP004', 'odontology'),
    ('ESP005', 'ophthalmology'),
    ('ESP006', 'orthorhinolaryngology'),
    ('ESP007', 'pediatrician'),
    ('ESP008', 'traumatology'),
    ('ESP009', 'urology');
