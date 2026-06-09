const scheduleData = [
  {
    "day": "Monday  June 29",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium",
    "title": "Opening + Sooinn Lee",
    "track": "General"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 201",
    "title": "AIED01 (TL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 203",
    "title": "AIED02 (SL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 209",
    "title": "AIED03 (HL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED04 (TL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 2",
    "title": "AIED05 (TL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 206",
    "title": "AIED06 (HS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 210",
    "title": "AIED07 (TS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "101",
    "title": "AIED08 (TS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "102",
    "title": "AIED09 (HS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "104",
    "title": "AIED10 (TS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "105",
    "title": "AIED11 (HS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 201",
    "title": "AIED12 (HL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 203",
    "title": "AIED13 (TL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 209",
    "title": "AIED14 (TL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 1",
    "title": "AIED BLUE SKY",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 2",
    "title": "AIED15 (HL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 206",
    "title": "AIED16 (TS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 210",
    "title": "AIED17 (TS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "101",
    "title": "AIED18 (SS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "102",
    "title": "AIED19 (TS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "104",
    "title": "AIED20 (HS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "105",
    "title": "AIED21 (HS)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium",
    "title": "Panel - Rethinking Assessment in the Age of AI",
    "track": "General"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 201",
    "title": "AIED22 (SL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 203",
    "title": "AIED23 (TL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 209",
    "title": "AIED24 (HL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED BLUE SKY",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium Meeting 2",
    "title": "AIED25 (HL)",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 206",
    "title": "AIED-Reserved",
    "track": "AIED"
  },
  {
    "day": "Monday  June 29",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 210",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Monday  June 29",
    "session": "Reception",
    "time": "17:30 - 20:00",
    "room": "Grand Ballroom",
    "title": "Reception",
    "track": "General"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium",
    "title": "Keynote - Ashok Goel",
    "track": "General"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 201",
    "title": "AIED26 (TL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 202",
    "title": "AIED27 (TL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 203",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 205",
    "title": "AIED28 (TL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 209",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED29 (HL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 2",
    "title": "AIED30 (HL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 206",
    "title": "AIED31 (HS)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 210",
    "title": "AIED32 (HS)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 201",
    "title": "AIED33 (HL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 203",
    "title": "AIED34 (TL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 209",
    "title": "AIED35 (HL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 1",
    "title": "Doctoral Consortium  AIED",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 2",
    "title": "Doctoral Consortium  EDM",
    "track": "EDM"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 206",
    "title": "AIED36 (SS)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 210",
    "title": "AIED37 (HS)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 201",
    "title": "AIED38 (TL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 203",
    "title": "AIED39 (TL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 209",
    "title": "AIED40 (HL)",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 206",
    "title": "AIED-Reserved",
    "track": "AIED"
  },
  {
    "day": "Tuesday  June 30",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 210",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium",
    "title": "Keynote- Bongshin Lee",
    "track": "General"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 201",
    "title": "AIED41 (SL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 203",
    "title": "AIED42 (HL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 209",
    "title": "AIED43 (TL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED PIP",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 2",
    "title": "WIDE-AIED",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 206",
    "title": "AIED44 (TS)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 210",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 201",
    "title": "AIED45 (HL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 203",
    "title": "AIED46 (TL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 209",
    "title": "AIED47 (TL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 1",
    "title": "AIED PIP",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 2",
    "title": "WIDE-AIED",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 206",
    "title": "AIED48 (TS)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 210",
    "title": "AIED49 (HS)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium",
    "title": "EDM Test of Time",
    "track": "EDM"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 201",
    "title": "AIED50 (HL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 202",
    "title": "AIED51 (TL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 203",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 205",
    "title": "AIED52 (SL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 209",
    "title": "AIED53 (HL)",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED PIP",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium Meeting 2",
    "title": "WIDE-AIED",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 206",
    "title": "AIED-Reserved",
    "track": "AIED"
  },
  {
    "day": "Wednesday July 1",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 210",
    "title": "AIED54 (HS)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium",
    "title": "Keynote - Vincent Aleven",
    "track": "General"
  },
  {
    "day": "Thursday July 2",
    "session": "",
    "time": "10:15-10:45",
    "room": "North 201",
    "title": "Posters/LBR Interactive Events",
    "track": "General"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 205",
    "title": "AIED55 (SL)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 209",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED56 (HL)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 2",
    "title": "AIED57 (TL)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 206",
    "title": "AIED58 (HS)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 210",
    "title": "AIED59 (HS)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 201",
    "title": "Posters/LBR Interactive Events",
    "track": "General"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 205",
    "title": "AIED60 (TL)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 209",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 1",
    "title": "AIED BLUE SKY",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 2",
    "title": "AIED61 (HS)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 206",
    "title": "AIED62 (SS)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 210",
    "title": "AIED63 (HS)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 205",
    "title": "AIED64 (TL)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 209",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium Meeting 1",
    "title": "AIED BLUE SKY",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium Meeting 2",
    "title": "AIED65 (TL)",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 206",
    "title": "AIED-Reserved",
    "track": "AIED"
  },
  {
    "day": "Thursday July 2",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "North 210",
    "title": "AIED66 (TS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 201",
    "title": "AIED67 (SL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 203",
    "title": "AIED68 (TL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 209",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium Meeting 1",
    "title": "WIDE-AIED",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "Auditorium Meeting 2",
    "title": "AIED69 (HL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 206",
    "title": "AIED70 (TS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 1",
    "time": "9:00-10:15",
    "room": "North 210",
    "title": "AIED71 (TS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium",
    "title": "Panel - Learning Research Communities in an AI-Saturated World",
    "track": "General"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 201",
    "title": "AIED72 (HL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 203",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 205",
    "title": "AIED73 (HL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 209",
    "title": "AIED74 (TL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 1",
    "title": "WIDE-AIED",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "Auditorium Meeting 2",
    "title": "AIED75 (TS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 206",
    "title": "AIED76 (SS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 2",
    "time": "10:45-12:00",
    "room": "North 210",
    "title": "AIED77 (TS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium",
    "title": "Large Event",
    "track": "General"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 201",
    "title": "AIED78 (TL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 202",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 203",
    "title": "AIED79 (SL)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 205",
    "title": "L@S",
    "track": "L@S"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 209",
    "title": "EDM",
    "track": "EDM"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 1",
    "title": "WIDE-AIED",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "Auditorium Meeting 2",
    "title": "AIED80 (HS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 206",
    "title": "AIED-Reserved",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 3",
    "time": "14:00-15:15",
    "room": "North 210",
    "title": "AIED81 (TS)",
    "track": "AIED"
  },
  {
    "day": "Friday July 3",
    "session": "Session 4",
    "time": "15:45-17:00",
    "room": "Auditorium",
    "title": "Closing",
    "track": "General"
  }
];
const sessionDetailsData = {
  "AIED01 (TL)": {
    "title": "Learning Policies & Pedagogical Orchestration",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "305",
        "authors": "Md Mirajul Islam, Rajesh Debnath, Adittya Soukarjya Saha and Min Chi",
        "title": "Hierarchical Apprenticeship Learning from Imperfect Demonstrations with Evolving Rewards",
        "topic": "Teacher Support & Collaboration",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "National Institute of Technology Agartala"
      },
      {
        "paper_id": "530",
        "authors": "Fares Fawzi, Seyed Parsa Neshaei, Marta Knezevic, Tanya Nazaretsky and Tanja Käser",
        "title": "REFINE: Real-world Exploration of Interactive Feedback and Student Behaviour",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "École Polytechnique Fédérale de Lausanne"
      },
      {
        "paper_id": "682",
        "authors": "Yuang Wei, Ruijia Li and Bo Jiang",
        "title": "SLOW: Strategic Logical-inference Open Workspace for Real-time Cognitive Adaptation in AI Tutoring",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Shanghai University of Traditional Chinese Medicine"
      }
    ]
  },
  "AIED02 (SL)": {
    "title": "Algorithmic Fairness & Bias",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "164",
        "authors": "Yun Wang, Xuansheng Wu, Jingyuan Huang, Lei Liu, Xiaoming Zhai and Ninghao Liu",
        "title": "BRIDGE the Gap: Mitigating Bias Amplification in Automated Scoring of English Language Learners via Inter-group Data Augmentation",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Ministry of Education of the People's Republic of China"
      },
      {
        "paper_id": "173",
        "authors": "Xuanyu Liu and Wen Zhu",
        "title": "Decomposing the Fairness Gap: Disentangling Data Scarcity from Validity Bias in AI-Driven Formative Assessment",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Central South University"
      },
      {
        "paper_id": "491",
        "authors": "Yishan Du, Conrad Borchers and Mutlu Cukurova",
        "title": "A Benchmark for Gender Bias in Large Language Model Feedback on Student Essays",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Nanjing Brain Hospital"
      }
    ]
  },
  "AIED03 (HL)": {
    "title": "Ethics Trust and Acceptance",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "153",
        "authors": "Eryka Probierz, Anita Gałuszka, Tomasz Grzejszczak and Adam Gałuszka",
        "title": "When AI Listens: Perceived Empathy, Trust, and Acceptance in Human–AI Supportive Interactions",
        "topic": "Ethics, Trust & Bias",
        "country": "PL",
        "country_name": "波蘭 (Poland)",
        "institution": "Jagiellonian University"
      },
      {
        "paper_id": "1052",
        "authors": "Vanessa Dennen and Yasin Yalcin",
        "title": "Constructing Acceptable Use: Instructor Boundary‑Setting with Generative AI",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Florida State University"
      },
      {
        "paper_id": "1085",
        "authors": "Griffin Pitts, Neha Rani and Weedguet Mildort",
        "title": "Trust and Reliance on AI in Education: AI Literacy and Need for Cognition as Moderators",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "North Carolina State University"
      }
    ]
  },
  "AIED04 (TL)": {
    "title": "Scaffolding & Teachable Agents",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "Aud Meeting 1",
    "papers": [
      {
        "paper_id": "29",
        "authors": "Clayton Cohn, Siyuan Guo, Surya Rayala, Hanchen David Wang, Naveeduddin Mohammed, Umesh Timalsina, Shruti Jain, Angela Eeds, Menton Deweese, Pamela J. Osborn Popp, Rebekah Stanton, Shakeera Walker, Meiyi Ma and Gautam Biswas",
        "title": "Evidence–Decision–Feedback: Theory-Driven Adaptive Scaffolding for LLM Agents",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Vanderbilt University"
      },
      {
        "paper_id": "647",
        "authors": "Chenyu Hou, Hua Yu, Gaoxia Zhu, John Derek Anas, Jiao Liu and Yew Soo Ong",
        "title": "Grounding Programming Agent in Computational Thinking: Design and Evaluation of MazeMate",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Hebei Medical University"
      },
      {
        "paper_id": "703",
        "authors": "Jiajia Song, Zhihan Guo and Jionghao Lin",
        "title": "Simulating Novice Students Using Machine Unlearning and Relearning in LLMs",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Southwest University"
      }
    ]
  },
  "AIED05 (TL)": {
    "title": "AI for Programming Education & Error Prediction (Tech-Long)",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "55",
        "authors": "Jeevan Chapagain and Vasile Rus",
        "title": "Enhancing Intelligent Tutoring Systems with Instruction-Tuned LLMs: Automated Assessment of Student Code Comprehension",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Memphis"
      },
      {
        "paper_id": "1044",
        "authors": "Martha Shaka and Ken Brown",
        "title": "Cold-Start Syntax Error Prediction in Programming Education: Comparing Sequential Knowledge Tracing and Large Language Models",
        "topic": "Programming & STEM",
        "country": "IE",
        "country_name": "愛爾蘭 (Ireland)",
        "institution": "University College Cork"
      },
      {
        "paper_id": "1235",
        "authors": "Alexis Ross, Megha Srivastava, Jeremiah Blanchard and Jacob Andreas",
        "title": "Modeling Student Learning with 3.8 Million Program Traces",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Boston University"
      }
    ]
  },
  "AIED06 (HS)": {
    "title": "Multi-Agent Systems & Agentic AI",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "96",
        "authors": "Jiwon Chun, Yuling Zhuang, Armanto Sutedjo, Colin Xu, Rong Ren and Meng Xia",
        "title": "ArguMath: AI-Simulated Environment for Pre-Service Teacher Training in Orchestrating Classroom Mathematics Argumentation",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Qilu University of Technology"
      },
      {
        "paper_id": "311",
        "authors": "Zheng Fang",
        "title": "CLEM: Constrained Learning Environment Models for Simulating Human Cognitive Processes",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Florida State University"
      },
      {
        "paper_id": "698",
        "authors": "Richard David, Sachin Singh and Dr. Sumit Kalra",
        "title": "Who Do Learners Ask for Help? Modeling Social Role Diversity in Agentic AI for Educational Help-Seeking",
        "topic": "Generative AI & LLMs",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "St Bartholomew's Hospital"
      },
      {
        "paper_id": "758",
        "authors": "Moiz Imran and Sahan Bulathwela",
        "title": "Catching The Correct Answer Trap: Characterising AI Tutor Blind Spots When Analysing Student Reasoning",
        "topic": "Generative AI & LLMs",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "Centre for Artificial Intelligence and Robotics"
      },
      {
        "paper_id": "1307",
        "authors": "Eunyoung Kim, Hyosung Park, Subin Yu, Jiyeong Shin and Hyo-Jeong So",
        "title": "An Adaptive Multi-Agent Learning Environment for Interprofessional Communication Training in Nursing Education",
        "topic": "Generative AI & LLMs",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Yonsei University"
      }
    ]
  },
  "AIED07 (TS)": {
    "title": "Multimodal Learning and Video Analytics",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "44",
        "authors": "Yixuan Shen, Peng He, Honglu Liu, Yuyang Ji, Tingting Li, Tianlong Chen, Kaidi Xu and Feng Liu",
        "title": "Can Multimodal LLMs ‘See’ Science Instruction? Benchmarking Pedagogical Reasoning in K-12 Classroom Video",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Shanghai University of Electric Power"
      },
      {
        "paper_id": "146",
        "authors": "Stella Xin Yin, Zhengyuan Liu, Dion Hoe-Lian Goh and Nancy F. Chen",
        "title": "Leveraging LLMs for Dynamic Engagement Pattern Recognition in Collaborative Learning",
        "topic": "Generative AI & LLMs",
        "country": "SG",
        "country_name": "新加坡 (Singapore)",
        "institution": "Nanyang Technological University"
      },
      {
        "paper_id": "279",
        "authors": "Nasim Eshgarf, Zack Carpenter and Craig Anderson",
        "title": "The Limits of Text-Only LLMs for Think-Aloud Transcript Correction: A Multimodal Comparison in the Context of a Puzzle Video Game",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Fudan University"
      },
      {
        "paper_id": "411",
        "authors": "Jacob Levine, Miguel Aenlle, Craig Zilles, Matthew West and Mariana Silva",
        "title": "Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Feinstein Institute for Medical Research"
      },
      {
        "paper_id": "461",
        "authors": "Cunling Bian, Saisai Ye and Weigang Lu",
        "title": "Do Instructional Behaviors Generalize Across Disciplines? An Empirical Study with Fine-Tuned Multimodal LLMs",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Ocean University of China"
      }
    ]
  },
  "AIED08 (TS)": {
    "title": "Automated Scoring and Evaluation Rubrics",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "Room 101",
    "papers": [
      {
        "paper_id": "273",
        "authors": "Cole Walsh and Rodica Ivan",
        "title": "Measuring What Matters---or What’s Convenient?: Robustness of LLM-Based Scoring Systems to Construct-Irrelevant Factors",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Broad Institute"
      },
      {
        "paper_id": "574",
        "authors": "Ji Yoon Jung, Ummugul Bezirhan and Matthias von Davier",
        "title": "Beyond the Gold Standard: Reliability Estimation of Human and GenAI Scoring",
        "topic": "Writing & Language Support",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Hallym University Kangnam Sacred Heart Hospital"
      },
      {
        "paper_id": "633",
        "authors": "Nam Tuan Ly, Hung Tuan Nguyen, Truong Thanh-Nghia and Masaki Nakagawa",
        "title": "Contrastive Network-based Similarity for Zero-Shot Automatic Scoring of Very Short Handwritten Answers",
        "topic": "Writing & Language Support",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Tokyo University of Agriculture and Technology"
      },
      {
        "paper_id": "845",
        "authors": "Mohammadreza Molavi Hajiagha, Abdolali Faraji, Zohre Rasoulkhani, Mohammadreza Tavakoli and Gábor Kismihók",
        "title": "Cross-Dataset Bloom Question Classification: Supervised Models and Prompted LLMs",
        "topic": "Generative AI & LLMs",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "Technische Informationsbibliothek (TIB)"
      },
      {
        "paper_id": "966",
        "authors": "Alessio Ferrato, Carla Limongelli, Daniele Schicchi and Davide Taibi",
        "title": "Large Language Models for Automated Bloom's Taxonomy Classification in Computer Science Assessment",
        "topic": "Writing & Language Support",
        "country": "IT",
        "country_name": "義大利 (Italy)",
        "institution": "Roma Tre University"
      }
    ]
  },
  "AIED09 (HS)": {
    "title": "AI Literacy & Ethical Reasoning",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "Room 102",
    "papers": [
      {
        "paper_id": "230",
        "authors": "Yun Dai",
        "title": "Patterns of Ethical Reasoning Among Middle School Students: Misconceptions and Mental Models of Transparency and Explainability in AI Systems",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Miami"
      },
      {
        "paper_id": "324",
        "authors": "Md Touhidul Islam, Mahir Akgun and Syed Billah",
        "title": "Shaping Credibility Judgments in Human–GenAI Partnership via Weaker LLMs: A Transactive Memory Perspective on AI Literacy",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Pennsylvania State University"
      },
      {
        "paper_id": "879",
        "authors": "Otto Segersven, Lechen Zhang, Joonas Merikko and Linda Mannila",
        "title": "Conceptualizing the depth and breadth of AI Literacy",
        "topic": "Writing & Language Support",
        "country": "FI",
        "country_name": "芬蘭 (Finland)",
        "institution": "University of Helsinki"
      },
      {
        "paper_id": "962",
        "authors": "Valentina Nachtigall, Maximilian Krug and Hanall Sung",
        "title": "Uncritical but Overconfident? How Learners Engage with AI-Generated Images of Scientists",
        "topic": "Writing & Language Support",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "Ruhr University Bochum"
      },
      {
        "paper_id": "1058",
        "authors": "Caitlin Tenison, Jesse Sparks, Teresa Ober, Tenaha O'Reilly, Michael Suhan, Beata Beigman Klebanov and Diego Zapata-Rivera",
        "title": "Designing Scenario-Based Tasks for Assessing AI Literacy",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Educational Testing Service"
      }
    ]
  },
  "AIED10 (TS)": {
    "title": "AI-Driven Writing Support and Analytics",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "Room 104",
    "papers": [
      {
        "paper_id": "120",
        "authors": "Di Wu, Kamila Misiejuk, Sonsoles López Pernas, Guanliang Chen, Mohammed Saqr and Eduardo Oliveira",
        "title": "From writing traces to personalised support: Guiding LLMs with stylometric fingerprints",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of North Carolina at Chapel Hill"
      },
      {
        "paper_id": "307",
        "authors": "Chang-Yen Liao",
        "title": "AI Roles as Multiple-Source Texts: Designing a Detective-Inquiry Writing Activity for Elementary Students",
        "topic": "Writing & Language Support",
        "country": "TW",
        "country_name": "台灣 (Taiwan)",
        "institution": "National Central University"
      },
      {
        "paper_id": "350",
        "authors": "Kaixun Yang, Jiameng Wei, Zhiping Liang, Mladen Raković, Eduardo Oliveira, Dragan Gašević and Guanliang Chen",
        "title": "Predicting the Finish Before the Draft Ends: Continuous Forecasting of Writing Performance from Process Traces",
        "topic": "Writing & Language Support",
        "country": "AU",
        "country_name": "澳洲 (Australia)",
        "institution": "Australian Regenerative Medicine Institute"
      },
      {
        "paper_id": "935",
        "authors": "S. Thomas Christie, Matthew Zent, Anna Rafferty and Simon Woodhead",
        "title": "Writing Response Theory: Confidence-Aware Likelihood-Based Measurement from Student Writing",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carleton College"
      },
      {
        "paper_id": "1219",
        "authors": "Fanjie Li, Madison Lee Mason, Daniel T. Levin and Alyssa Friend Wise",
        "title": "When Can We Trust AI Coding of Student-Generated Text? A Committee-Based Approach to Diagnosing Agreement and Uncertainty at Scale",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Vanderbilt University"
      }
    ]
  },
  "AIED11 (HS)": {
    "title": "Modeling the Learner & Personalization",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "Room 105",
    "papers": [
      {
        "paper_id": "137",
        "authors": "Junsoo Park, Youssef Medhat, Htet Phyo Wai, Ploy Thajchayapong and Ashok K. Goel",
        "title": "Evaluating Learner Representations for Differentiation Prior to Instructional Outcomes",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Georgia Institute of Technology"
      },
      {
        "paper_id": "303",
        "authors": "Carrie Demmans Epp, Guher Gorgun, Jai Riley, Yalmaz Abdullah and Kaitlynn Sisson-Pau",
        "title": "Representing Uncertainty in Open Learner Models: Supporting User Interpretation",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CA",
        "country_name": "加拿大 (Canada)",
        "institution": "University of Alberta"
      },
      {
        "paper_id": "365",
        "authors": "Kaimao Sheng and Irene-Angelica Chounta",
        "title": "Beyond One-Size-Fits-All: Personalizing Computational Proxies of the Zone of Proximal Development Through Help-Seeking Behaviors",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Cognitive Research (United States)"
      },
      {
        "paper_id": "587",
        "authors": "Xiaokang Lei, Ching Christie Pang, Zesheng Hong, Yuyang Jiang, Xin Tong and Pan Hui",
        "title": "Operationalizing Adaptive Scaffolding: A State-Driven Design Framework for Hybrid Learning with Digital Teachers",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Xi'an University of Architecture and Technology"
      },
      {
        "paper_id": "681",
        "authors": "Qiao Jin, Yang Zhan, Will Morgus, Kyle Price, Michael Sandbothe, Jonathan Sewall, Octav Popescu, Susan Berman, Stephen E Fancsali, Steve Ritter, Ken Holstein and Vincent Aleven",
        "title": "From Feasibility to Generalization in the Field: Using an MR-Based Teacher Orchestration Tool in AI-Supported K-12 Classrooms",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Ministry of Education of the People's Republic of China"
      }
    ]
  },
  "AIED12 (HL)": {
    "title": "Developmental & Evolutionary Dynamics",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "888",
        "authors": "Hai Li, Wanli Xing, Chenglu Li, Taehyun Kim, Yukyeong Song and Jinhee Kim",
        "title": "Bidirectional Co-Regulation Mechanisms Between Teachable Agents and Students: Authority-Agency Evolutionary Characteristics and Their Link to Learning Gains Through Time Series Dynamics",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Nanjing Tech University"
      },
      {
        "paper_id": "923",
        "authors": "Guojing Zhou, Shaoming Chai and Zhenhai He",
        "title": "Catalyst Without Convergence: Analyzing Student–AI Interaction Trajectories in Knowledge Building",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Colorado Boulder"
      },
      {
        "paper_id": "1340",
        "authors": "Maria Poiaganova, Tino Endres, Cesarina Criscione, April Wang and Radu Tanase",
        "title": "Learner-Stage-Aware AI Tutor Improves Learning Processes: Field-Experimental Evidence",
        "topic": "Other AIED Topics",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "Zürcher Fachhochschule"
      }
    ]
  },
  "AIED13 (TL)": {
    "title": "Multimodal Mathematical Reasoning",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "145",
        "authors": "Dingjie Song, Tianlong Xu, Yifan Zhang, Hang Li, Zhiling Yan, Xing Fan, Haoyang Li, Lichao Sun and Qingsong Wen",
        "title": "Can MLLMs Read Students' Minds? Unpacking Multimodal Error Analysis in Handwritten Math",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Nanjing University"
      },
      {
        "paper_id": "472",
        "authors": "Tengju Li, Penghe Chen, Jiong Wang, Ding Yu, Hao Wu and Yu Lu",
        "title": "From Problem Solving to Pedagogical Feedback: Student-Centric Tree-of-Thought Reasoning for Student Error Attribution",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Ocean University of China"
      },
      {
        "paper_id": "764",
        "authors": "Luca Nicolae Cuclea, Sabin Codrut Badea and Adrian Marius Dumitran",
        "title": "RoMathExam: A Longitudinal Dataset of Romanian Math Exams (1895–2025) with a Seven-Decade Core (1957–2025)",
        "topic": "Programming & STEM",
        "country": "RO",
        "country_name": "羅馬尼亞 (Romania)",
        "institution": "University of Bucharest"
      }
    ]
  },
  "AIED14 (TL)": {
    "title": "Ethics, Privacy, & Safety in AIED",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "651",
        "authors": "Zhaohui Li, Peng He, Zhiyuan Chen, Honglu Liu, Zeyuan Wang, Tingting Li and Jinjun Xiong",
        "title": "SciEval: A Benchmark for Automatic Evaluation of K–12 Science Instructional Materials",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Jinan University"
      },
      {
        "paper_id": "710",
        "authors": "Justin Vasselli, Adam Nohejl and Taro Watanabe",
        "title": "An AI-Assisted Co-Planning System for Early English Reading Practice",
        "topic": "Ethics, Trust & Bias",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Nara Institute of Science and Technology"
      },
      {
        "paper_id": "750",
        "authors": "Fan Yang, Ke Wang, Wenzhou Dou, Yifan Shuai, Zitao Liu and Weiqi Luo",
        "title": "The Cost of Thinking: Increased Jailbreak Risk in Large Language Models in Education",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "University of Science and Technology of China"
      }
    ]
  },
  "AIED15 (HL)": {
    "title": "Programming & Serious Games",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "490",
        "authors": "Zhenni He, Patrick Pang, Ka-Meng Siu and Qizhong Ou",
        "title": "From Auxiliary Tool to Teaching Partner: A Human-AI Co-Teaching Model for Primary Programming Classrooms",
        "topic": "Programming & STEM",
        "country": "MO",
        "country_name": "Other (MO)",
        "institution": "Macao Polytechnic University"
      },
      {
        "paper_id": "951",
        "authors": "Matthieu Branthôme, Badmavasan Kirouchenassamy, Sébastien Lallé, Sébastien Jolivet, Mathieu Muratet and Amel Yessad",
        "title": "Embedding Pedagogical Principles into LLMs: A Field Study of AI-Generated Feedback in a Programming Serious Game",
        "topic": "Programming & STEM",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Centre National de la Recherche Scientifique"
      },
      {
        "paper_id": "1333",
        "authors": "Jerome Brender, Laila El-Hamamsy, Kim Uittenhove, Aitor Perez, Patrick Jermann, Francesco Mondada and Engin Bumbacher",
        "title": "Reflective Dialogue or Prompt Refinement? Effects of Tutor Scaffolding on Students' Independent LLM Use for Programming",
        "topic": "Programming & STEM",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "Haute École Pédagogique du Canton de Vaud"
      }
    ]
  },
  "AIED16 (TS)": {
    "title": "Automated Creativity and Performance Assessment",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "95",
        "authors": "Sam Grouchnikov, Phillip Gregory and Jiho Noh",
        "title": "Using Poly-Encoders for Computationally Efficient Automated Creativity Assessment",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Sandia National Laboratories California"
      },
      {
        "paper_id": "399",
        "authors": "Yan Zhang, Qikai He, Mengqiao Chen, Chuanya Duan and Wei Xu",
        "title": "MPKT: A Knowledge Tracing Model for Music Performance Learning",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Central South University"
      },
      {
        "paper_id": "711",
        "authors": "Zekun Huang, Shuyan Chen, Yiwen Chen, Xun Zhou and Wei Xu",
        "title": "EduArt-Bench: A Benchmark and Lightweight Scoring Calibration for K-12 Art Education",
        "topic": "Writing & Language Support",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Xiamen University"
      },
      {
        "paper_id": "841",
        "authors": "Blaženka Divjak, Petra Vondra, Darko Grabar, Barbi Svetec and Josipa Bađari",
        "title": "Study Program Curriculum Development with an AI Assistant",
        "topic": "Writing & Language Support",
        "country": "HR",
        "country_name": "克羅埃西亞 (Croatia)",
        "institution": "University of Zagreb"
      },
      {
        "paper_id": "1163",
        "authors": "Luyang Fang, Yingchuan Zhang, Jongchan Park, Zhaoji Wang, Ping Ma and Xiaoming Zhai",
        "title": "Confidence-Aware Automated Assessment of Student-Drawn Scientific Models",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Georgia"
      }
    ]
  },
  "AIED17 (TS)": {
    "title": "Adaptive Learning and Curriculum Design",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "52",
        "authors": "Sidney Tio, Wen Jun Li, Ramesha Karunasena and Pradeep Varakantham",
        "title": "RL Agents Reveal What's Hard: Bootstrapping Difficulty-Ordered Curricula for Human Learners",
        "topic": "Generative AI & LLMs",
        "country": "SG",
        "country_name": "新加坡 (Singapore)",
        "institution": "Singapore Management University"
      },
      {
        "paper_id": "70",
        "authors": "Yunus Zeytuncu",
        "title": "4OPS: Exact Enumeration and Difficulty Modeling for Integer Arithmetic Puzzles",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "East Texas A&M University"
      },
      {
        "paper_id": "474",
        "authors": "Jian Xu and Wangda Zhu",
        "title": "From Black-Box Generation to Pedagogically Controllable Creation: A Text-to-Image Interactive System in Design Education",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "St. Jude Children's Research Hospital"
      },
      {
        "paper_id": "524",
        "authors": "Jiayi Wang, Ruiwei Xiao, Xinying Hou and John Stamper",
        "title": "Enabling Multi-Agent Systems as Learning Designers: Applying Learning Sciences to AI Instructional Design",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "North China University of Science and Technology"
      },
      {
        "paper_id": "911",
        "authors": "Jie Gao and Adam K. Dubé",
        "title": "Personalizing Mathematical Game-based Learning for Children: A Preliminary Study",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Second Military Medical University"
      }
    ]
  },
  "AIED18 (SS)": {
    "title": "Responsible AI: Governance Privacy and Ethical Frameworks",
    "track": "Social",
    "type": "Short-paper session",
    "room": "Room 101",
    "papers": [
      {
        "paper_id": "310",
        "authors": "Jessica Vandenberg, Bradford Mott, Carlos Penilla, James Lester and Elizabeth Ozer",
        "title": "Introducing Adolescents to the Social Dimensions of AI through Story-Driven Game-Based Learning",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "North Carolina State University"
      },
      {
        "paper_id": "622",
        "authors": "Xiaohang Luo, Ran Ju, Yingqi Wang and Jingran Xu",
        "title": "Measuring AI Leadership in Education: Development and Validation of the AI Educational Leadership Competency Scale (AIELCS) for Administrators",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Xinzhou Teachers University"
      },
      {
        "paper_id": "880",
        "authors": "Aristoteles Barros, Mateus Monteiro, Ermesson Lima, Ig Ibert Bittencourt, Seiji Isotani, Luiz Rodrigues and Diego Dermeval",
        "title": "Offline-First AIED: An Architectural Blueprint for On-Device LLM Integration in Low-Resource Educational Contexts",
        "topic": "Ethics, Trust & Bias",
        "country": "BR",
        "country_name": "巴西 (Brazil)",
        "institution": "Universidade Federal de Alagoas"
      },
      {
        "paper_id": "901",
        "authors": "Matheus Arataque Uema, Talita de Paula Cypriano de Souza, Luiz Rodrigues, Ig Ibert Bittencourt, Diego Dermeval and Seiji Isotani",
        "title": "Designing Unplugged AIED Systems: An Elastic Offline-First Mobile Application for Pedagogical Support",
        "topic": "Ethics, Trust & Bias",
        "country": "BR",
        "country_name": "巴西 (Brazil)",
        "institution": "Universidade de São Paulo"
      },
      {
        "paper_id": "1236",
        "authors": "Tomasz Adamczyk, Wiktoria Mieleszczenko-Kowszewicz, Beata Bajcar, Grzegorz Chodak, Aleksander Szczęsny, Maciej Markiewicz, Karolina Ostrowska, Aleksandra Sawczuk and Przemysław Kazienko",
        "title": "Sociodemographic Biases in Educational Counselling by Large Language Models",
        "topic": "Ethics, Trust & Bias",
        "country": "PL",
        "country_name": "波蘭 (Poland)",
        "institution": "Krakow Cardiovascular Research Institute"
      }
    ]
  },
  "AIED19 (TS)": {
    "title": "Advanced Knowledge Tracing Models",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "Room 102",
    "papers": [
      {
        "paper_id": "139",
        "authors": "Eamon Worden, Neil Heffernan, Cristina Heffernan and Shashank Sonkar",
        "title": "FoundationalED: Dataset for Foundational Knowledge Tracing Pedagogical Grounding of LLMs",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Worcester Polytechnic Institute"
      },
      {
        "paper_id": "541",
        "authors": "Naiming Liu, Richard Baraniuk and Shashank Sonkar",
        "title": "Circuit Complexity of Hierarchical Knowledge Tracing and Implications for Log-Precision Transformers",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Micron (United States)"
      },
      {
        "paper_id": "675",
        "authors": "Indronil Bhattacharjee and Christabel Wayllace",
        "title": "MAML-KT: Addressing Cold Start Problem in Knowledge Tracing for New Students via Few-Shot Model-Agnostic Meta Learning",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "New Mexico State University"
      },
      {
        "paper_id": "1140",
        "authors": "Jiachen Gong, Anshula Bali, Ishrat Ahmed, Michelle Banawan and Danielle McNamara",
        "title": "Re-imagine Knowledge Tracing with Student Agency in a Generative AI Language Tutor",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "East China University of Science and Technology"
      },
      {
        "paper_id": "1350",
        "authors": "Ryosuke Nagai, Kyohei Atarashi, Koh Takeuchi, Jill-Jênn Vie and Hisashi Kashima",
        "title": "Estimating Learners' Skill Acquisition Without Temporal Information",
        "topic": "Learning Analytics & Student Modeling",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Yamaguchi University"
      }
    ]
  },
  "AIED20 (HS)": {
    "title": "Learning Analytics & Interaction Trajectories",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "Room 104",
    "papers": [
      {
        "paper_id": "359",
        "authors": "Corina Luca Focsan, Marie Cynthia Abijuru Kamikazi, Tamisha Thompson, Jennifer St. John, Kirk Vanacore, Danielle R. Thomas, Kenneth R. Koedinger and René F. Kizilcec",
        "title": "Does the TalkMoves Codebook Generalize to One-on-One Tutoring and Multimodal Interaction?",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Cornell University"
      },
      {
        "paper_id": "607",
        "authors": "Farhan Ali and Yehong Yang",
        "title": "Curiosity, prior achievement, and interaction patterns: Heterogeneity of generative AI effects uncovered by causal inference",
        "topic": "Generative AI & LLMs",
        "country": "PK",
        "country_name": "Other (PK)",
        "institution": "Federal Urdu University"
      },
      {
        "paper_id": "627",
        "authors": "Yujing Zhang, Xianghui Meng, Shihui Feng and Jionghao Lin",
        "title": "Human–AI Collaboration Reconfigures Group Regulation from Socially Shared to Hybrid Co-Regulation",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Tianjin University of Traditional Chinese Medicine"
      },
      {
        "paper_id": "998",
        "authors": "Taelin Karidi, Ofra Amir and Ido Roll",
        "title": "AI in the Wild: A Large-Scale Analysis of College Students’ Authentic Interactions with Generative AI",
        "topic": "Generative AI & LLMs",
        "country": "IL",
        "country_name": "以色列 (Israel)",
        "institution": "Hebrew University of Jerusalem"
      },
      {
        "paper_id": "1351",
        "authors": "Nuo Chen, Wanying Zhong, Kejie Shen and Yizhou Fan",
        "title": "Beyond the Chat Window: A Trace-Based Positioning Analysis of Student-GenAI Interactions in Academic Writing",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "University of Science and Technology of China"
      }
    ]
  },
  "AIED21 (HS)": {
    "title": "Dialogue & Conversational Scaffolding",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "Room 105",
    "papers": [
      {
        "paper_id": "319",
        "authors": "Jeonghyun Lee, Meryem Yilmaz Soylu, Jui-Tse Hung, Gayane Grigoryan, Christopher Cui and Daniel Forsyth",
        "title": "Scaling Socratic Dialogue with Generative AI: Understanding Implications for Student Engagement and Learning Outcomes",
        "topic": "Writing & Language Support",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Samsung (South Korea)"
      },
      {
        "paper_id": "960",
        "authors": "Sam Gilson, Benyamin Tabarsi and Tiffany Barnes",
        "title": "Adversarial Assignment Perturbation: Effects on Help-seeking Behaviors in Student Generative AI Chatbot Use",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "North Carolina State University"
      },
      {
        "paper_id": "1002",
        "authors": "Shu-Yi Hsu, Jensen Cassity, Cheng Yu Lin and Yipu Zheng",
        "title": "Complementing Human Instruction: Student Interaction Patterns with a Pedagogically Aligned AI Teaching Assistant",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "TW",
        "country_name": "台灣 (Taiwan)",
        "institution": "Chung Shan Medical University"
      },
      {
        "paper_id": "1170",
        "authors": "Meenakshi Mittal, Christopher Mach, Kaden Tang and Narges Norouzi",
        "title": "Analyzing TA Edits of LLM Responses to Live Lecture Q&A",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "Punjab Agricultural University"
      },
      {
        "paper_id": "1250",
        "authors": "Yiliu Pan, Sina Rismanchian and Shayan Doroudi",
        "title": "From Empirical Replication to Hypothesis Generation: Concretizing Our Understanding of Learning with a Computational Model of ICAP",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of California, Irvine"
      }
    ]
  },
  "AIED22 (SL)": {
    "title": "Equity Policy & Standards",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "560",
        "authors": "Daniela Teodorescu, Guher Gorgun, Delaney Lothian Lothian, Jialiang Yan, Yalmaz Abdullah, Hongwei Wang, Minghao Cai and Carrie Demmans Epp",
        "title": "Supporting the Text Entry of nêhiyawêwin for Lifelong Learners",
        "topic": "Ethics, Trust & Bias",
        "country": "RO",
        "country_name": "羅馬尼亞 (Romania)",
        "institution": "University of Bucharest"
      },
      {
        "paper_id": "952",
        "authors": "Tobias Vieira Francisco, Abílio Nogueira Barros, Felipe Vieira Roque, Tiago Paulino, Augusto Schmidt, Flavia Galvani, Rafael Oliveira, Leonardo Brandão Marques, Diego Dermeval, Pedro Barreto, Anita Gea Martinez Stefani, Marisa de Santana da Costa, Emanuel Marques Queiroga, Elthon Oliveira, Cristian Cechinel and Thales Vieira",
        "title": "Territorial Fairness in Large-Scale Academic Risk Prediction: Comparing National and State-Level Machine Learning Models in Brazil",
        "topic": "Ethics, Trust & Bias",
        "country": "BR",
        "country_name": "巴西 (Brazil)",
        "institution": "Universidade Federal de Alagoas"
      },
      {
        "paper_id": "2055",
        "authors": "Rabia Turan, Sadie Gill, Desiree Stanley and Parva Thakkar",
        "title": "Learning Components as Intermediary for Educational Standards Crosswalks",
        "topic": "Ethics, Trust & Bias",
        "country": "TR",
        "country_name": "土耳其 (Turkey)",
        "institution": "Marmara University"
      }
    ]
  },
  "AIED23 (TL)": {
    "title": "Analyzing Educational Dialogue & Discourse",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "498",
        "authors": "Xinyu Zhu, Fei Jiang, Xiaoqing Gu and Gong Wang",
        "title": "New Intent Discovery for Educational Dialogue Texts via Semantic-Aware Data Augmentation",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Scripps Research Institute"
      },
      {
        "paper_id": "1144",
        "authors": "Videep Venkatesha, Sifat Anindho, Ethan Seefried and Nathaniel Blanchard",
        "title": "Using LLMs to Annotate Pedagogical Moves: You Know What I Mean?",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Colorado State University"
      },
      {
        "paper_id": "1171",
        "authors": "Hongming Li, Huan Kuang and Anthony F. Botelho",
        "title": "Can We Trust AI's Self-Assessment? Evaluating and Improving LLM Confidence Calibration in Educational Dialogue Coding",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Merck & Co., Inc., Rahway, NJ, USA (United States)"
      }
    ]
  },
  "AIED24 (HL)": {
    "title": "Classroom Orchestration & Real-time Analytics",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "88",
        "authors": "Hyungwoo Song, Kieun Park and Bongwon Suh",
        "title": "From Exploration to Creation: How Teachers Orchestrate AI-Supported Learning in History Classrooms",
        "topic": "Teacher Support & Collaboration",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Seoul National University"
      },
      {
        "paper_id": "325",
        "authors": "Tomohiro Nagashima, Shintaro Sato, Mirella Hladký, Niklas Scholz and Lisa Siegrist",
        "title": "Teachers’ Perspectives on Decision-Making in AI-Supported Classrooms: A Cross-Cultural Study of Germany and Japan",
        "topic": "Teacher Support & Collaboration",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "University of Stuttgart"
      },
      {
        "paper_id": "413",
        "authors": "Yuchen Liu, Roberto Martinez-Maldonado, Riordan Alfredo, Paola Mejia-Domenzain, Dwi Rahayu and Sadia Nawaz",
        "title": "AI-Driven Analytics of Team-Teaching Talk: Acoustic Patterns across Experience, Cohorts and the Learning Design",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Zhejiang Chinese Medical University"
      }
    ]
  },
  "AIED25 (HL)": {
    "title": "Metacognitive Feedback & Regulation",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "322",
        "authors": "Suqing Liu, Runlong Ye, Christopher Eaton, Bogdan Simion and Michael Liut",
        "title": "A Comparative Study of Technical Writing Feedback Quality: Evaluating LLMs, SLMs, and Humans in Computer Science Topics",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Fudan University"
      },
      {
        "paper_id": "536",
        "authors": "Seyed Parsa Neshaei, Richard Lee Davis and Tanja Käser",
        "title": "Moving Beyond Review: Applying Language Models to Planning and Translation in Reflection",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "École Polytechnique Fédérale de Lausanne"
      },
      {
        "paper_id": "785",
        "authors": "Chun Ki Chuang, Wei Dai, Tongguang Li, Jionghao Lin, Xinyu Li, Yizhou Fan and Dragan Gašević",
        "title": "From Feedback to Regulation: Comparing Generative AI and Human Feedback in Supporting Self-Regulated Learning",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "HK",
        "country_name": "香港 (Hong Kong)",
        "institution": "Education University of Hong Kong"
      }
    ]
  },
  "AIED26 (TL)": {
    "title": "LLM-based Automated Grading & Scoring",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "512",
        "authors": "Robinson Ferrer, Zhongzhou Chen and Shashank Sonkar",
        "title": "When Can We Trust LLM Graders? Calibrating Confidence for Automated Assessment",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Central Florida"
      },
      {
        "paper_id": "823",
        "authors": "Longwei Cong, Sonja Hahn, Sebastian Gombert, Leon Camus, Hendrik Drachsler and Ulf Kroehne",
        "title": "Confidence Estimation in Automatic Short Answer Grading with LLMs",
        "topic": "Writing & Language Support",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "DIPF | Leibniz Institute for Research and Information in Education"
      },
      {
        "paper_id": "1207",
        "authors": "Yucheng Chu, Hang Li, Kaiqi Yang, Yasemin Copur-Gencturk, Kevin Haudek, Joseph Krajcik and Jiliang Tang",
        "title": "Optimizing In-Context Demonstrations for LLM-based Automated Grading",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Michigan State University"
      }
    ]
  },
  "AIED27 (TL)": {
    "title": "AI for Specialized Subject Domains",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 202",
    "papers": [
      {
        "paper_id": "479",
        "authors": "Yuri Noviello, Anastasia Birillo and Gosia Migut",
        "title": "ANVIL: Analogies and Video for CS Lecturers",
        "topic": "Other AIED Topics",
        "country": "IT",
        "country_name": "義大利 (Italy)",
        "institution": "University of Bologna"
      },
      {
        "paper_id": "593",
        "authors": "Phurinat Polasa, Narabodee Rodjananant, Thanapon Thanadunpremdet, Settapun Laoaree, Chonlana Kruawuthikun and Nattapol Kritsuthikul",
        "title": "PSC: Personalized Sentence-level Pronunciation Coaching Framework for Thai EFL Learners",
        "topic": "Writing & Language Support",
        "country": "TH",
        "country_name": "Other (TH)",
        "institution": "King Mongkut's University of Technology Thonburi"
      },
      {
        "paper_id": "973",
        "authors": "Shamya Karumbaiah, Alina Guha and Anurag Maravi",
        "title": "SLAI: AI Support for Multilingual Small Group Discussions in Science Classrooms",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Wisconsin–Madison"
      }
    ]
  },
  "AIED28 (TL)": {
    "title": "Personalization & Adaptive Instructional Design",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 205",
    "papers": [
      {
        "paper_id": "761",
        "authors": "Chiara Magurno, Michele Luca Contalbo, Matteo Paganelli, Enrico Giliberti, Chiara Bertolini and Francesco Guerra",
        "title": "CLAIRE: a Controllable LLM Tutoring Framework for Reading Comprehension",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "IT",
        "country_name": "義大利 (Italy)",
        "institution": "Università Iuav di Venezia"
      },
      {
        "paper_id": "1177",
        "authors": "Johaun Hatchett, Debshila Basu Mallick, Brittany Bradford and Richard Baraniuk",
        "title": "Learning Context Matters: Measuring and Diagnosing Personalization in AI Instructional Design",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Rice University"
      },
      {
        "paper_id": "1310",
        "authors": "Nicy Scaria, Silvester John Joseph Kennedy and Deepak Subramani",
        "title": "Learning in Blocks: A Multi Agent Debate Assisted Personalized Adaptive Learning Framework for Language Learning",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Atkins (United States)"
      }
    ]
  },
  "AIED29 (HL)": {
    "title": "Inquiry-Based Learning & STEM Guidance",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "Aud Meeting 1",
    "papers": [
      {
        "paper_id": "481",
        "authors": "Hanyu Su, Huilin Zhang and Shihui Feng",
        "title": "Comparing the Impact of Pedagogy-Informed Custom and General-Purpose GAI Chatbots on Students’ Science Problem-Solving Processes and Performance Using Heterogeneous Interaction Network Analysis",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Sichuan University"
      },
      {
        "paper_id": "684",
        "authors": "Ga Young Lee and Hyo-Jeong So",
        "title": "Supporting Scientific Sensemaking under Uncertainty in Inquiry-Based Learning with an AI-based Chatbot",
        "topic": "Generative AI & LLMs",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Gyeongsang National University"
      },
      {
        "paper_id": "705",
        "authors": "Ekaterina Shved, Engin Bumbacher, Seyed Parsa Neshaei and Tanja Käser",
        "title": "Teaching Multivariational Reasoning through AI-Guided Inquiry in Interactive Simulations",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "RU",
        "country_name": "Other (RU)",
        "institution": "Magnitogorsk Iron and Steel Works (Russia)"
      }
    ]
  },
  "AIED30 (HL)": {
    "title": "Human-AI Collaborative Authoring",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "136",
        "authors": "Mehmet Arif Demirtas, Sungjin Nam and Gabrielle Griffin",
        "title": "Leveraging Human-AI Collaboration for a Passage-Based Question Authoring Tool",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Louisville"
      },
      {
        "paper_id": "393",
        "authors": "Zifeng Liu, Anupom Mondol, Xinyue Jiao, Jie Chao, Linlin Li and Wanli Xing",
        "title": "From Examples to Rules? Exploring Inductive Reverse Engineering and Deductive Few-Shot Coding via LLMs for Qualitative Data Analysis",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Beijing University of Chemical Technology"
      },
      {
        "paper_id": "1297",
        "authors": "Maciej Markiewicz, Beata Bajcar, Wiktoria Mieleszczenko-Kowszewicz, Aleksander Szczęsny, Tomasz Adamczyk, Grzegorz Chodak, Karolina Ostrowska, Aleksandra Sawczuk, Jolanta Babiak, Jagoda Szklarczyk and Przemysław Kazienko",
        "title": "How Annotation Trains Annotators: Competence Development in Social Influence Recognition",
        "topic": "Other AIED Topics",
        "country": "PL",
        "country_name": "波蘭 (Poland)",
        "institution": "Nicolaus Copernicus University"
      }
    ]
  },
  "AIED31 (HS)": {
    "title": "Scientific Inquiry & STEM Applications",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "715",
        "authors": "Xiaofei Zhou, Jiameng Wei, Clayton Cohn, Gautam Biswas, Guanliang Chen and Zhen Bai",
        "title": "How Teacher-Expert Collaboration Shapes the Quality of AI-Supported Scientific Inquiry Learning",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "The Fourth People's Hospital"
      },
      {
        "paper_id": "991",
        "authors": "Eceay Çeltik, Bora Şenceylan, İbrahim Delen and Gökhan İnce",
        "title": "Automated Evaluation of Student-Chatbot Interactions in Climate Education Using Large Language Models",
        "topic": "Generative AI & LLMs",
        "country": "TR",
        "country_name": "土耳其 (Turkey)",
        "institution": "Istanbul Technical University"
      },
      {
        "paper_id": "1007",
        "authors": "Field M. Watts, Lei Liu, Teresa M. Ober, Yi Song, Euvelisse Jusino-Del Valle, Yun Wang and Xiaoming Zhai",
        "title": "AI Evaluation and Feedback to Support Middle-School Students’ Scientific Argumentation and Reasoning",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Wisconsin–Milwaukee"
      },
      {
        "paper_id": "1027",
        "authors": "Griffin Pitts, Kimia Fazeli, Tirth Bhatt, Jennifer Albert, Marnie Hill, Tiffany Barnes, Shiyan Jiang and Bita Akram",
        "title": "Democratizing Foundations of Problem-Solving with AI: A Breadth-First Search Curriculum for Middle School Students",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "North Carolina State University"
      },
      {
        "paper_id": "1048",
        "authors": "Xiaoyi Tian, Shan Zhang, Yukyeong Song, Tom McKlin, Kristy Elizabeth Boyer and Maya Israel",
        "title": "An Attitude Paradox? Examining Ability Beliefs and Persistence Intentions in a Middle School Conversational AI Learning Experience",
        "topic": "Programming & STEM",
        "country": "AU",
        "country_name": "澳洲 (Australia)",
        "institution": "The University of Sydney"
      }
    ]
  },
  "AIED32 (HS)": {
    "title": "Programming Education in the Age of GenAI",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "227",
        "authors": "Takuya Iwanaga, Huiyong Li, Boxuan Ma and Chengjiu Yin",
        "title": "Visual Attention Transitions and Self-Regulated Help Seeking in Programming Comprehension",
        "topic": "Programming & STEM",
        "country": "AU",
        "country_name": "澳洲 (Australia)",
        "institution": "Australian Institute of Marine Science"
      },
      {
        "paper_id": "363",
        "authors": "Giovanni Troiano, Daniel Escobar Morales, Guillermo Castro Pons, Gregorio Robles and Casper Harteveld",
        "title": "Back to the Future: What Can Remixing Teach Us About Coding in the Age of AI",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Northeastern University"
      },
      {
        "paper_id": "567",
        "authors": "Tianyu Shao, Miguel Feijóo-García, Yi Zhang, Hugo Castellanos, Tawfiq Salem, Alejandra Magana and Tianyi Li",
        "title": "Tracing Prompt-Level Interaction Trajectories to Understand Student Learning with LLMs in Programming Education",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Chinese Academy of Medical Sciences & Peking Union Medical College"
      },
      {
        "paper_id": "752",
        "authors": "Yimeng Sun, Haiyang Xin, Qiannan Niu and Shuang Li",
        "title": "Computational Thinking Development in AI Agent Creation: A Mixed-Methods Study",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "University of Science and Technology Liaoning"
      },
      {
        "paper_id": "788",
        "authors": "Tianlong Zhong, Gaoxia Zhu, Yuhan Wang and Dengyin Li",
        "title": "Cognitive Processes Underlying Divergent Levels of Performance and Agency in AI-Assisted Programming",
        "topic": "Programming & STEM",
        "country": "SG",
        "country_name": "新加坡 (Singapore)",
        "institution": "Nanyang Technological University"
      }
    ]
  },
  "AIED33 (HL)": {
    "title": "Multimodal Analytics & Embodied Learning",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "12",
        "authors": "Conrad Borchers, Valdemar Švábenský, Sandesh K. Kafle, Kevin K. Tang and Jan Vykopal",
        "title": "Multimodal Analytics of Cybersecurity Crisis Preparation Exercises: What Predicts Success?",
        "topic": "Learning Analytics & Student Modeling",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "University of Oxford"
      },
      {
        "paper_id": "1143",
        "authors": "Allison Poh and Ivon Arroyo",
        "title": "What Do Future Teachers Look For in Movement-Based Learning? Implications For Multimodal Systems",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Massachusetts Amherst"
      },
      {
        "paper_id": "1192",
        "authors": "Owen Henkel, Bill Roberts, Doug Jaffe and Laurence Holt",
        "title": "Seeing the Big Picture: Evaluating Multimodal LLMs’ Ability to Interpret and Grade Handwritten Student Work",
        "topic": "Generative AI & LLMs",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "University of Oxford"
      }
    ]
  },
  "AIED34 (TL)": {
    "title": "Predictive Models for Learner Behavior",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "639",
        "authors": "Youheng Bai, Shen Han, Gangyi Tan, Jiahao Chen, Zitao Liu and Weiqi Luo",
        "title": "Beyond Next-Response Prediction: Evaluating Knowledge State Transition Consistency in Deep Learning Based Knowledge Tracing Models",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Jinan University"
      },
      {
        "paper_id": "950",
        "authors": "Edouard Nadaud, Bénédicte Le Grand and Lionel Prévost",
        "title": "SEPT Privacy-by-Design Framework for Early Teacher Intervention: Modeling Difficulty as a Deviation from a Student's Success Signature",
        "topic": "Learning Analytics & Student Modeling",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Centre de Recherche en Informatique"
      },
      {
        "paper_id": "1213",
        "authors": "Anthony F. Botelho, Zhongtian Huang, Natalia S. Martin and Jinnie Shin",
        "title": "Modeling Completion Time in Mathematics Formative Assessments: Content-Based Prediction of Time Variation",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Florida"
      }
    ]
  },
  "AIED35 (HL)": {
    "title": "AI in K-12 Mathematics",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "285",
        "authors": "Katie Bainbridge, Jess Vitale and Candace Walkington",
        "title": "Using LLMs to score mathematics lessons for instructional quality with the UTOP",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Rice University"
      },
      {
        "paper_id": "676",
        "authors": "Hai Li, Wanli Xing, Chenglu Li and Bailing Lyu",
        "title": "Who Benefits From Which Voice? Group-Differentiated Effects of Teachable Agent Voice Emotion Design on Achievement Emotions and Engagement Patterns in K-12 Mathematics Learning",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Nanjing Tech University"
      },
      {
        "paper_id": "1070",
        "authors": "Tyree Cowell, Kole Norberg, Rae Bastoni, Unekwu Shaibu, April Murphy, Stephen Fancsali, Steve Ritter and Husni Almoubayyed",
        "title": "Modality Matters: How Text, Audio, and Video Interactions Shape Student Engagement and Performance with AI Tutors in K–12 Mathematics",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      }
    ]
  },
  "AIED36 (SS)": {
    "title": "Learning Through Play: AI Literacy and Collaborative Games",
    "track": "Social",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "162",
        "authors": "Aitor Arronte Alvarez and Naiyi Xie Fincham",
        "title": "Identifying High-Confidence Social Biases in LLMs for Trustworthy Conversational Tutoring Agents",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Hawaiʻi at Mānoa"
      },
      {
        "paper_id": "280",
        "authors": "Adrienn Toth, Linda Fanconi, Noé Zufferey and Verena Zimmermann",
        "title": "Personalization over Privacy? Implications of the Privacy-Personalization Trade-Off on Future Use of Intelligent Tutoring Systems",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "ETH Zurich"
      },
      {
        "paper_id": "348",
        "authors": "Kyudong Park, Heewon Min, Chaewon Lee and Ki-Young Shin",
        "title": "Dual Mechanisms of Demographic Bias in LLM-based Essay Scoring: A Mechanistic Interpretability Analysis and Mitigation Approach",
        "topic": "Writing & Language Support",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Kwangwoon University"
      },
      {
        "paper_id": "495",
        "authors": "Jie Cao, Zhanxin Hao and Jifan Yu",
        "title": "Decoding Student Dialogue: A Multi-Dimensional Benchmark and Bias Analysis of Large Language Models as Annotation Tools",
        "topic": "Writing & Language Support",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "University of Essex"
      },
      {
        "paper_id": "1038",
        "authors": "Fan Zhang and Rui Guo",
        "title": "AI That Helps—or Widens Gaps? Equity Impacts of a Teaching-by-Learning Tutor in K–12 Mathematics",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Google (United States)"
      }
    ]
  },
  "AIED37 (HS)": {
    "title": "Institutional Policy & Faculty Perspectives",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "131",
        "authors": "Hagit Meishar-Tal, Tami Seifert and Miri Shonfeld",
        "title": "Faculty Response to Generative AI: Attitudes, Change in Practice and Policy towards Students' Use",
        "topic": "Teacher Support & Collaboration",
        "country": "IL",
        "country_name": "以色列 (Israel)",
        "institution": "Holon Institute of Technology"
      },
      {
        "paper_id": "404",
        "authors": "Jie Gao and Jiayi Zhang",
        "title": "To Use or Not to Use: Investigating Student Perceptions of Faculty Generative AI Usage in Higher Education",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Second Military Medical University"
      },
      {
        "paper_id": "556",
        "authors": "Gerti Pishtari, Florian Gnadlinger and Tobias Ley",
        "title": "When Teachers use AI Chatbtos and are Trained for it: Impact on Learning Design Quality and Cognitive Effort.",
        "topic": "Teacher Support & Collaboration",
        "country": "AT",
        "country_name": "奧地利 (Austria)",
        "institution": "Universität für Weiterbildung Krems"
      },
      {
        "paper_id": "977",
        "authors": "Xunyi Gao, Shamya Karumbaiah, Yitong Fu and Jais Brohinsky",
        "title": "Pedagogical Values Mediate Teacher Perceptions on Using AI to Support Students’ Learning of Scientific Explanations",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Union Hospital"
      },
      {
        "paper_id": "1053",
        "authors": "Sydney Miller and Nigel Bosch",
        "title": "Writing Instructors’ Pedagogical Decisions About Generative AI",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Georgia"
      }
    ]
  },
  "AIED38 (TL)": {
    "title": "Quality & Evaluation of Intelligent Tutoring Systems",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "129",
        "authors": "Nizam Kadir, Nacha Sockalingam and Dorien Herremans",
        "title": "From Untamed Black Box to Interpretable Pedagogical Orchestration: The Ensemble of Specialized LLMs Architecture for Adaptive Tutoring",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "MY",
        "country_name": "Other (MY)",
        "institution": "Universiti Teknologi MARA"
      },
      {
        "paper_id": "1098",
        "authors": "Tushar Udeshi, Kabir Khan and Anna Khazenzon",
        "title": "Methodologies for Improving the Quality of AI Tutoring in K-12 Education",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Google (United States)"
      },
      {
        "paper_id": "1266",
        "authors": "Rose Niousha, Samantha Boatright Smith, Bita Akram, Peter Brusilovsky, Arto Hellas, Juho Leinonen, John DeNero and Narges Norouzi",
        "title": "The Missing Dimension: Evaluating AI Tutors Through Student Engagement with Feedback",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Waseda University"
      }
    ]
  },
  "AIED39 (TL)": {
    "title": "Collaborative Learning & Social Analytics",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "392",
        "authors": "Junyuan Liang, Qi Zhou, Sahan Bulathwela and Mutlu Cukurova",
        "title": "Gaze to Insight: A Scalable AI Approach for Detecting Gaze Behaviours in Face-to-Face Collaborative Learning",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Sun Yat-sen University"
      },
      {
        "paper_id": "678",
        "authors": "Likai Peng and Shihui Feng",
        "title": "Single-agent vs. Multi-agents for Automated Video Analysis of On-Screen Collaborative Learning Behaviors",
        "topic": "Generative AI & LLMs",
        "country": "SG",
        "country_name": "新加坡 (Singapore)",
        "institution": "Nanyang Technological University"
      },
      {
        "paper_id": "1246",
        "authors": "Dawei Xie, Khalil Anderson, Tochukwu Eze, Chenghong Lin, Bookyung Shin and Marcelo Worsley",
        "title": "CLARA: An AI-Augmented Analytics Dashboard for Collaboration Literacy",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Northwestern University"
      }
    ]
  },
  "AIED40 (HL)": {
    "title": "Cultivating Student AI Literacy",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "315",
        "authors": "Bradford Mott, Jessica Vandenberg, Srijita Chakraburty, Anne Ottenbreit-Leftwich, Emma Braaten, Cindy Hmelo-Silver, Krista Glazewski and James Lester",
        "title": "Making AI Planning Visible: Narrative-Centered Goal-Directed AI Reasoning to Foster AI Literacy",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of North Carolina at Chapel Hill"
      },
      {
        "paper_id": "570",
        "authors": "Qianou Ma, Megan Chai, Yike Tan, Jihun Choi, Jini Kim, Erik Harpstead and Tongshuang Wu",
        "title": "“GenAI Defaults to Bias!” Gamify AI literacy through Reflections on Prompts",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      },
      {
        "paper_id": "1105",
        "authors": "Andrea Martinenghi, Sabrina Guidotti, Gregor Donabauer, Cansu Koyuturk, Ariel Ortiz Beltran, Emily Theophilou, Riccardo Chimisso, Markus Bink, Franca Garzotto, Davide Taibi, Martin Ruskov, Udo Kruschwitz, Davinia Hernandez-Leo and Dimitri Ognibene",
        "title": "Genie Training the Wisher: Six-Dimension Task-Agnostic AI Coaching for Learning Transferable LLM Prompting Skills",
        "topic": "Generative AI & LLMs",
        "country": "IT",
        "country_name": "義大利 (Italy)",
        "institution": "University of Bergamo"
      }
    ]
  },
  "AIED41 (SL)": {
    "title": "Collaborative AI & Scaffolding",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "99",
        "authors": "Deliang Wang and Cunling Bian",
        "title": "Scaffolding Critical Engagement with GenAI: Transforming Ethnic Minority Preparatory Students’ Collaborative Discourse in Prompt Engineering Tasks",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CA",
        "country_name": "加拿大 (Canada)",
        "institution": "University of Toronto"
      },
      {
        "paper_id": "213",
        "authors": "Jihyun Rho and Shamya Karumbaiah",
        "title": "How Students Interpret Representational Cues in AI-Generated Educational Illustrations",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Wisconsin–Madison"
      },
      {
        "paper_id": "892",
        "authors": "Yang Jiang, Yi Song, Ido Roll, Jiangang Hao, Chunyi Ruan and Lei Liu",
        "title": "Toward Fair and Scalable Assessment of Socially Shared Regulation of Learning with Large Language Models",
        "topic": "Writing & Language Support",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Southwest University"
      }
    ]
  },
  "AIED42 (HL)": {
    "title": "Affective & Cognitive State Modelling",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "370",
        "authors": "Karan Taneja, Anjali Singh and Ashok Goel",
        "title": "Impact of Multimodal and Conversational AI on Learning Outcomes and Experience",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Georgia Institute of Technology"
      },
      {
        "paper_id": "1004",
        "authors": "Sifatul Anindho, Videep Venkatesha, Jaclyn Ocumpaugh and Nathaniel Blanchard",
        "title": "Ordered Network Analysis of Epistemic Emotions during Collaborative Problem Solving",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Colorado State University"
      },
      {
        "paper_id": "1063",
        "authors": "Indrayani Nishane, Vishwas Badhe, Jyoti Shaha, Nisumba Soodhani, Aditya Rajmane, Ramkumar Rajendran and Sridhar Iyer",
        "title": "From Information Foraging to Making Sense of the Information: Decoding Mindset-Driven Learning in Computer Based Learning Environments",
        "topic": "Learning Analytics & Student Modeling",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "Indian Institute of Technology Bombay"
      }
    ]
  },
  "AIED43 (TL)": {
    "title": "Multi-Agent Architectures in STEM",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "355",
        "authors": "Fareya Ikram, Nischal Ashok Kumar, Junyang Lu, Hunter McNichols, Candace Walkington, Neil Heffernan and Andrew Lan",
        "title": "A Multi-Agent Approach to Validate and Refine LLM-Generated Personalized Math Problems",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Massachusetts Amherst"
      },
      {
        "paper_id": "420",
        "authors": "Hang Li, Kaiqi Yang, Yucheng Chu, Ahreum Han, Rui Meng, Yasemin Copur-Gencturk and Hui Liu",
        "title": "ALLM-Driven Multi-Agent System for Professional Development of Mathematics Teachers",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Zhongyuan University of Technology"
      },
      {
        "paper_id": "1158",
        "authors": "Yinqi Zhang, Chenglu Li, Gökhan Gülfidan, Hai Li, Magdalena Castaneda-Rios, Rui Guo, Yukyeong Song and Wanli Xing",
        "title": "When to Stop? An Experimental Study on AI Teachable Agent Stopping Mechanisms and Their Learning Affordances in Mathematics",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "East China Normal University"
      }
    ]
  },
  "AIED44 (TS)": {
    "title": "Agentic AI and Student Simulation",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "194",
        "authors": "Jianxiao Jiang and Yu Zhang",
        "title": "Student Development Agent: Risk-free Simulation for Evaluating AIED Innovations",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Tsinghua University"
      },
      {
        "paper_id": "581",
        "authors": "Xiaojing Duan, Frederick Nwanganga and Chaoli Wang",
        "title": "CODE-GEN: A Human-in-the-Loop RAG-Based Agentic AI System for Multiple-Choice Question Generation",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Notre Dame"
      },
      {
        "paper_id": "994",
        "authors": "Dhriti Krishnan and Jaromir Savelka",
        "title": "MCQ Difficulty Prediction through Modeling Learner Heterogeneity using Data-Driven Cognitive Profiling",
        "topic": "Generative AI & LLMs",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "PES University"
      },
      {
        "paper_id": "1214",
        "authors": "He Xinyi and Feng Ji",
        "title": "A Generator–Aligner Pipeline for LLM-Based Situational Judgment Test Generation",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Anhui University"
      },
      {
        "paper_id": "1349",
        "authors": "Partha Sarathi Purkayastha",
        "title": "From Tools to Teammates: Budgeted Verification for Reliable LLM Tutoring Actions",
        "topic": "Generative AI & LLMs",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "Birla Institute of Technology and Science, Pilani"
      }
    ]
  },
  "AIED45 (HL)": {
    "title": "Self-Regulation & Behavioral Patterns",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "795",
        "authors": "Buwon Hong, Eun Shim, Heesoo Ko and Hyo Jeong Shin",
        "title": "I’m Not Stuck – I’m Learning: Operationalizing Self-Efficacy Trajectories in Large-Scale AI Learning Environments",
        "topic": "Other AIED Topics",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Sogang University"
      },
      {
        "paper_id": "893",
        "authors": "Zhonghua Sheng, Shuyu Shen, Qiqi Duan, Leixian Shen, Xiaofu Jin, Pan Hui, Huamin Qu and Yuyu Luo",
        "title": "Beyond Correctness: A Stage-Aware Framework for Decoding Student Problem-Solving Processes from Handwriting Trajectories",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "University of Science and Technology Liaoning"
      },
      {
        "paper_id": "1159",
        "authors": "Jordan Gutterman, Ashish Gurung, Lee Branstetter, Kenneth Koedinger and Vincent Aleven",
        "title": "Delayed Start Behavior as a Cross-Subject Predictor of Learning Outcomes",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "The University of Texas MD Anderson Cancer Center"
      }
    ]
  },
  "AIED46 (TL)": {
    "title": "Knowledge Graphs & Curriculum Mapping",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "613",
        "authors": "Jingyi Zhao, Rhodri B Nelson, Deborah Pelacani Cruz and Matthew D Piggot",
        "title": "Building Evidence-Linked Curriculum Knowledge Graphs for Academic Pathway Planning",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Boston University"
      },
      {
        "paper_id": "702",
        "authors": "Ngoc Luyen Le, Marie-Hélène Abel and Bertrand Laforge",
        "title": "From Learning Resources to Competencies: LLM-Based Tagging with Evidence and Graph Constraints",
        "topic": "Generative AI & LLMs",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Université de Technologie de Compiègne"
      },
      {
        "paper_id": "743",
        "authors": "Gen Li, Li Chen, Cheng Tang, Boxuan Ma, Yuncheng Jiang, Daisuke Deguchi, Takayoshi Yamashita and Atsushi Shimada",
        "title": "Capture-Calibrate-Coach: A Graph-Based Framework for Knowledge Monitoring Estimation and Adaptive Feedback",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "HK",
        "country_name": "香港 (Hong Kong)",
        "institution": "Chinese University of Hong Kong"
      }
    ]
  },
  "AIED47 (TL)": {
    "title": "Generative AI for Exercise & Content Creation",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "72",
        "authors": "Jocelyn Beauchesne, Christine Maroti, Jeshua Bratman, Jerome Pesenti, Laurence Holt, Alex Tambellini, Allison McGrath, Matthew Guo and Sarah Peterson",
        "title": "Personalized AI Practice Replicates Learning Rate Regularity at Scale",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Art Institute of Portland"
      },
      {
        "paper_id": "263",
        "authors": "Liang Zhang, Jiangyiyang Zhu and Yan Ma",
        "title": "Generating Personalized Programming Exercises via Cognitive State Graphs and ZPD-Driven Prompting",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Zhejiang International Studies University"
      },
      {
        "paper_id": "852",
        "authors": "Xiaozao Wang, Zhewei Wang and Hongyi Wen",
        "title": "Evaluating Interactivity: Toward Automated Assessment of AI-Generated Explorable Explanations",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Beihang University"
      }
    ]
  },
  "AIED48 (TS)": {
    "title": "Responsible AI and Representation",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "781",
        "authors": "Nathikan Yodthap, Thanapong Intharah and Sahan Bulathwela",
        "title": "Mix and Match: Context Pairing for Scalable Topic-Controlled Educational Summarization",
        "topic": "Ethics, Trust & Bias",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "Centre for Artificial Intelligence and Robotics"
      },
      {
        "paper_id": "914",
        "authors": "Elena Malnatsky, Shenghui Wang, Kuhu Sinha, Koen V. Hindriks and Mike E.U. Ligthart",
        "title": "A Hybrid Human-AI Content Generation Framework for Safe and Personalized Dialogic Learning with Children",
        "topic": "Ethics, Trust & Bias",
        "country": "NL",
        "country_name": "荷蘭 (Netherlands)",
        "institution": "Vrije Universiteit Amsterdam"
      },
      {
        "paper_id": "1147",
        "authors": "Arne Bewersdorff, Njla Yuruk and Xiaoming Zhai",
        "title": "Simulating Validity: Modal Decoupling in MLLM Generated Feedback on Science Drawings",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Georgia"
      },
      {
        "paper_id": "1206",
        "authors": "Matheus Valentim de Barros and Max Fowler",
        "title": "Exploring Question Isomorphism through Different Numerical and Computational Representations",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Illinois Urbana-Champaign"
      },
      {
        "paper_id": "1288",
        "authors": "Salima Lamsiyah",
        "title": "FairDetect: Training-Time Fairness for AI-Generated Text Detection via Perplexity-Adaptive Focal Loss",
        "topic": "Ethics, Trust & Bias",
        "country": "LU",
        "country_name": "Other (LU)",
        "institution": "University of Luxembourg"
      }
    ]
  },
  "AIED49 (HS)": {
    "title": "Creative & Embodied Learning",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "244",
        "authors": "Megha Bansal, Harshil Safi, Saloni Shinde, Madhu Vadali, Barbara Bruno and Aditi Kothiyal",
        "title": "Hand movements and learning: Movement profiles of learning-by-making",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Nemours Children's Health System"
      },
      {
        "paper_id": "606",
        "authors": "Aditi Haiman, Esma Kahveci, Alessandro Pagano, Angie Chi and Bruce McLaren",
        "title": "Gender Differences in Learning and Test Taking Experiences with Digital Game-Based Assessment",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      },
      {
        "paper_id": "626",
        "authors": "Takaki Kondo, Shota Higuchi, Akira Maeda, Hiroto Jitsukawa, Kento Nakamura, Hiro Kawamura and Yuki Watanabe",
        "title": "Effects of Job Task Focused Career Education for Human-AI Coexistence on Students' AI Career Interest and Career Adaptability",
        "topic": "Other AIED Topics",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Osaka Kyoiku University"
      },
      {
        "paper_id": "839",
        "authors": "Wangda Zhu, Fu Zhang and Chen Li",
        "title": "Bridging AI Prompting and Design Thinking: Behavioral Patterns and Pedagogical Insights from a Design Workshop",
        "topic": "Other AIED Topics",
        "country": "HK",
        "country_name": "香港 (Hong Kong)",
        "institution": "Hong Kong Polytechnic University"
      },
      {
        "paper_id": "1005",
        "authors": "Rut Ston and Ido Roll",
        "title": "Divergent and Convergent Thinking During the Creative Thinking Process",
        "topic": "Other AIED Topics",
        "country": "IL",
        "country_name": "以色列 (Israel)",
        "institution": "Holon Institute of Technology"
      }
    ]
  },
  "AIED50 (HL)": {
    "title": "Social-Emotional & Inclusive Contexts",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "473",
        "authors": "Natasha Rappa and Kok-Sing Tang",
        "title": "AI-Human Revoicing in Educational Dialogue: Developing Students’ Academic Voice with an LLM-based Chatbot",
        "topic": "Generative AI & LLMs",
        "country": "AU",
        "country_name": "澳洲 (Australia)",
        "institution": "Murdoch University"
      },
      {
        "paper_id": "988",
        "authors": "Linlin Li, Jie Chao, Trudi Lord, Kelly Collins, Rebecca Ellis, Wanli Xing and Yuanlin Zhang",
        "title": "Learning about Artificial Intelligence in Algebra 1 Classes in Virtual School Settings",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "China Pharmaceutical University"
      },
      {
        "paper_id": "1208",
        "authors": "Shun-Lam Chan, Jinglun Zhao, Jiaxuan Gao, Xiaofei Lyu and Jun Wei",
        "title": "Beyond Generic Answers and Empty Praise: The Differential Impact of AI Companionship Roles on Social-Emotional Learning in University Student Intervention",
        "topic": "Other AIED Topics",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Tsinghua University"
      }
    ]
  },
  "AIED51 (TL)": {
    "title": "Cognitive Profiling & Recommendation Systems",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 202",
    "papers": [
      {
        "paper_id": "71",
        "authors": "Ziv Fenigstein, Osama Swidan, Inbal Israel, Kobi Gal, Avi Segal and Hassan Ayoub",
        "title": "Automatically Inferring Teachers' Geometric Content Knowledge: A Skills Based Approach",
        "topic": "Learning Analytics & Student Modeling",
        "country": "SA",
        "country_name": "Other (SA)",
        "institution": "King Abdulaziz Medical City"
      },
      {
        "paper_id": "447",
        "authors": "Tatyana Bukina, Marina Khramova, Nikita Smirnov, Semen Kurkin and Alexander Hramov",
        "title": "A Neuro-Symbolic Approach to Extracurricular Activity Recommendation Based on Cognitive Profiling",
        "topic": "Learning Analytics & Student Modeling",
        "country": "RU",
        "country_name": "Other (RU)",
        "institution": "Immanuel Kant Baltic Federal University"
      },
      {
        "paper_id": "614",
        "authors": "Naiming Liu, Xinghe Chen, Richard Baraniuk and Shashank Sonkar",
        "title": "Misconception Acquisition Dynamics of Large Language Models",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Micron (United States)"
      }
    ]
  },
  "AIED52 (SL)": {
    "title": "K-12 AI Literacy & Curriculum",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 205",
    "papers": [
      {
        "paper_id": "221",
        "authors": "Christian Bergh, Alexandra Vassar, Natasha Banks, Jessica Xu and Jake Renzella",
        "title": "Evaluating the Impact of Workshop Interventions on AI Literacy and STEM Career Aspirations with Australian Secondary Students",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Washington Bothell"
      },
      {
        "paper_id": "252",
        "authors": "Cristiano Galafassi, Rosa Vicari, Christian Brackmann and Lucas Eishi Pimentel Mizusaki",
        "title": "Implementing a Statewide AI Curriculum: One Brazilian Experience",
        "topic": "Writing & Language Support",
        "country": "BR",
        "country_name": "巴西 (Brazil)",
        "institution": "Universidade Federal do Pampa"
      },
      {
        "paper_id": "442",
        "authors": "Rubing Deng, Hou Yee Tsi, Jiahui Zheng and Sze Wai Mok",
        "title": "Mapping AI Literacy: How Do DigComp 3.0 and OECD/EC AILit Inform K–12 Curriculum Integration Decisions?",
        "topic": "Writing & Language Support",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Zhejiang University of Technology"
      }
    ]
  },
  "AIED53 (HL)": {
    "title": "Help-Seeking & Self-Directed Learning",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "103",
        "authors": "Piret Luik",
        "title": "Explaining, Solving, or Generating? Functional Differences in Students’ AI Use in a University Database",
        "topic": "Other AIED Topics",
        "country": "EE",
        "country_name": "Other (EE)",
        "institution": "University of Tartu"
      },
      {
        "paper_id": "240",
        "authors": "Khaoula Otmani, Anna Bodonhelyi, Babette Bühler and Enkelejda Kasneci",
        "title": "Should AI Ask First? Investigating the Effects of Proactive vs Reactive AI Mentoring in Self-Directed Learning",
        "topic": "Other AIED Topics",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Université d'Avignon et des Pays de Vaucluse"
      },
      {
        "paper_id": "1291",
        "authors": "Daiana Rinja, Eduardo Araujo Oliveira, Sonsoles López-Pernas, Mohammed Saqr, Marcus Specht and Kamila Misiejuk",
        "title": "Unpacking Vibe Coding: Help-Seeking Processes in Student-AI Interactions While Programming",
        "topic": "Programming & STEM",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "FernUniversität in Hagen"
      }
    ]
  },
  "AIED54 (HS)": {
    "title": "Feedback Loops & Formative Assessment",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "60",
        "authors": "Eason Chen, Sophia Judicke, Kayla Beigh, Xinyi Tang, Isabel Wang, Nina Yuan, Zimo Xiao, Chuangji Li, Shizhuo Li, Reed Luttmer, Shreya Singh, Maria Yampolsky, Naman Parikh, Yvonne Zhao, Meiyi Chen, Scarlett Huang, Anishka Mohanty, Gregory Johnson, John Mackey, Jionghao Lin and Ken Koedinger",
        "title": "Chat-Based Support Alone May Not Be Enough: Comparing Conversational and Embedded LLM Feedback for Mathematical Proof Learning",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      },
      {
        "paper_id": "246",
        "authors": "Eleni A. Dimitriadou, Sondre Aune Stokke, Sebastian Hegreberg, Andy Nguyen and Michail Giannakos",
        "title": "Can LLMs Support Formative Assessment? Comparing LLM-Based and Teaching Assistant–Based Assessment in Programming Education",
        "topic": "Writing & Language Support",
        "country": "NO",
        "country_name": "挪威 (Norway)",
        "institution": "Norwegian University of Science and Technology"
      },
      {
        "paper_id": "366",
        "authors": "Xin Xia, Nejla Yuruk, Yun Wang and Xiaoming Zhai",
        "title": "Using Learning Progressions to Guide AI Feedback for Science Learning",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "China Tobacco"
      },
      {
        "paper_id": "1172",
        "authors": "Aylin Ozturk, Gati Aher, Tom Mitchell, Mustafa Kemal Birgin and Hüseyin Kayhan",
        "title": "Who Benefits from LLM-Generated Learning Support Messages? Causal Evidence on Treatment Effect Heterogeneity",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "TR",
        "country_name": "土耳其 (Turkey)",
        "institution": "Bilecik Şeyh Edebali Üniversitesi"
      },
      {
        "paper_id": "1176",
        "authors": "Chelsea Brown, Chelsea Chandler, Sandra Sawaya and Sidney Dmello",
        "title": "A Matter of Perspective: Contrasting User and Subject-Matter Experts’ Sensemaking of LLM Feedback on Instructional Discourse",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CA",
        "country_name": "加拿大 (Canada)",
        "institution": "Saskatchewan Health Authority"
      }
    ]
  },
  "AIED55 (SL)": {
    "title": "Teacher Perspectives & Pedagogy",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 205",
    "papers": [
      {
        "paper_id": "196",
        "authors": "Yuki Nagae, Lechen Zhang, Jalal Nouri and Linda Mannila",
        "title": "From Barriers to Actions: A Thematic Analysis of Teachers’ Perceived Obstacles and Support Needs for AI Integration in K–12 Education",
        "topic": "Teacher Support & Collaboration",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Doshisha University"
      },
      {
        "paper_id": "1216",
        "authors": "Shamya Karumbaiah and Yaxuan Yin",
        "title": "What Constitutes AI Harms and/or Unfairness? An Empirical Analysis of Teacher Deliberation with a Fairness Elicitation Scaffold",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Wisconsin–Madison"
      },
      {
        "paper_id": "1249",
        "authors": "Alham Fikri Aji, Afifa Amriani, Rendi Chevi, Ayu Purwarianti and Derry Wijaya",
        "title": "A Survey of AI Misconception and Adoption Among Indonesian K-12 Teachers",
        "topic": "Teacher Support & Collaboration",
        "country": "AU",
        "country_name": "澳洲 (Australia)",
        "institution": "University of Tasmania"
      }
    ]
  },
  "AIED56 (HL)": {
    "title": "Automated Scoring & Evaluation",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "Aud Meeting 1",
    "papers": [
      {
        "paper_id": "506",
        "authors": "Conrad Borchers, Luiz Rodrigues, Newarney Torrezão da Costa, Cleon Xavier Pereira Junior and Rafael Ferreira Mello",
        "title": "Understanding Teacher Revisions of Large Language Model-Generated Feedback",
        "topic": "Writing & Language Support",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "University of Oxford"
      },
      {
        "paper_id": "964",
        "authors": "Savita Bhat and Vasudeva Varma",
        "title": "Learning from Giants: Distilling Attribute-Aligned LLM Evaluators for Educational Essay Assessment",
        "topic": "Writing & Language Support",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "National Institute of Technology Karnataka"
      },
      {
        "paper_id": "1152",
        "authors": "Hyo Jeong Shin, Nico Andersen, Euigyum Kim, Andrea Horbach and Fabian Zehner",
        "title": "How Linguistic Diversity Impacts Multilingual Automated Scoring in Large-Scale Assessments",
        "topic": "Writing & Language Support",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Sogang University"
      }
    ]
  },
  "AIED57 (TL)": {
    "title": "Automated Essay Scoring & Writing Support",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "163",
        "authors": "Sungjin Nam",
        "title": "Prompt Optimization with Verifiable Rewards for Synthetic Essays in Automated Essay Scoring",
        "topic": "Writing & Language Support",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Korea Polar Research Institute"
      },
      {
        "paper_id": "289",
        "authors": "Eamon Worden, Morgan Lee, Abubakir Siedahmed, Adam Sales, Jiayi Zhang, Roee Shraga and Neil Heffernan",
        "title": "Short, Long, or Affective: Evaluating LLM-Generated Feedback Styles for Student Learning",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Worcester Polytechnic Institute"
      },
      {
        "paper_id": "652",
        "authors": "Masaki Uto",
        "title": "Has Automated Essay Scoring Reached Sufficient Accuracy? Deriving Achievable QWK Ceilings from Classical Test Theory",
        "topic": "Writing & Language Support",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "University of Electro-Communications"
      }
    ]
  },
  "AIED58 (HS)": {
    "title": "Self-Regulated Learning (SRL) & Metacognition",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "218",
        "authors": "Ricardo Alonso Manjarrez Retes, Sofia Gabrielle Escalona, Makenzie Webster, Francine Mezzomo Giotto and Christabel Wayllace",
        "title": "AI Is Available, Partnership Is Optional: Student Agency in Human–AI Interaction",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "New Mexico State University"
      },
      {
        "paper_id": "321",
        "authors": "Alwyn Vwen Yen Lee",
        "title": "Scaffolding Epistemic Agency: Evaluating AI-Partnered Affective Feedback for Emotional Regulation in Knowledge Building",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "SG",
        "country_name": "新加坡 (Singapore)",
        "institution": "Agency for Science, Technology and Research"
      },
      {
        "paper_id": "741",
        "authors": "Saleh Ramadhan Alghamdi, Mladen Rakovic, Yizhou Fan, Guanliang Chen, Kaixun Yang, Xinyu Li and Dragan Gasevic",
        "title": "Learners’ Adaptability to GenAI Scaffolding in Self-Regulated Learning: Temporal Analytics",
        "topic": "Generative AI & LLMs",
        "country": "AU",
        "country_name": "澳洲 (Australia)",
        "institution": "Flinders University"
      },
      {
        "paper_id": "787",
        "authors": "Sienna Cai and Mohammad Masbaul Alam Polash",
        "title": "Scaffolding for Co-regulated Learning in Generative AI Supported Learning Systems: A Scoping Review",
        "topic": "Generative AI & LLMs",
        "country": "Unknown",
        "country_name": "未知地區 (Unknown)",
        "institution": "未知機構 (Unknown)"
      },
      {
        "paper_id": "1186",
        "authors": "An-Ching Shih, Yuan-Hsuan Lee and Jiun-Yu Wu",
        "title": "Epistemic Agency, AI Knowledge and Performance in Generative AI–Supported Data Analytics Tasks",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Southern Methodist University"
      }
    ]
  },
  "AIED59 (HS)": {
    "title": "Trust, Reflection & Affect in AI Systems",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "277",
        "authors": "Yukyeong Song, Rachel Wong, Jinhee Kim, Jewoong Moon, Edward Patton, Vinhthuy Phan, Jennifer McCullum and Jess Day",
        "title": "Supporting K-12 Teachers in the Presidential AI Challenge: A Case Study of a Faculty-Mentored Workshop for AI Tool Creation",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Knoxville College"
      },
      {
        "paper_id": "695",
        "authors": "Md Nazmus Sakib, Ishika Tarin, Naga Manogna Rayasam, Manas Gaur and Sanorita Dey",
        "title": "ReflectEd: Evaluating Reflection-Driven Learning in an AI-Assisted System",
        "topic": "Programming & STEM",
        "country": "BD",
        "country_name": "Other (BD)",
        "institution": "Bangladesh University of Engineering and Technology"
      },
      {
        "paper_id": "1101",
        "authors": "Salima Lamsiyah",
        "title": "SPARK: A Student-Centered Framework for Teaching Natural Language Processing in the Age of Large Language Models",
        "topic": "Writing & Language Support",
        "country": "LU",
        "country_name": "Other (LU)",
        "institution": "University of Luxembourg"
      },
      {
        "paper_id": "1298",
        "authors": "Libor Juhaňák, Veronika Štolfová and Monika Řičicová",
        "title": "Who’s Behind the Feedback? Students’ Use of AI and Perceived Feedback Usefulness When the Evaluator May Be Human or AI",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CZ",
        "country_name": "Other (CZ)",
        "institution": "Technical University of Liberec"
      },
      {
        "paper_id": "1299",
        "authors": "Jiachen Fu, Jiaoyang Ding and Yanjie Song",
        "title": "Linking Affective Experience and AI Trust: The Role of a PERMA-based AI Agent in Higher Education",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Southeast University"
      }
    ]
  },
  "AIED60 (TL)": {
    "title": "Psychometrics & Item Response Theory",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 205",
    "papers": [
      {
        "paper_id": "488",
        "authors": "Yoshimitsu Miyazawa and Maomi Ueno",
        "title": "Process-Integrated IRT: Enhancing Ability Estimation in Computer-based Programming Assessments through Response Process Data",
        "topic": "Learning Analytics & Student Modeling",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "National Center for University Entrance Examinations"
      },
      {
        "paper_id": "579",
        "authors": "Masaki Uto and Ryota Kitakaze",
        "title": "An Item Response Theory Model for Addressing Halo Effects in Performance Assessment",
        "topic": "Learning Analytics & Student Modeling",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "University of Electro-Communications"
      },
      {
        "paper_id": "765",
        "authors": "Badmavasan Kirouchenassamy, Amel Yessad, Sébastien Jolivet and Vanda Luengo",
        "title": "Offline Reinforcement Learning for Personalized Feedback in Online Programming Education",
        "topic": "Learning Analytics & Student Modeling",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Centre National de la Recherche Scientifique"
      }
    ]
  },
  "AIED61 (HS)": {
    "title": "Collaborative Learning & Social Interaction (Human & Tech Short)",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "91",
        "authors": "Hai Li and Bo Pei",
        "title": "Leveraging a Multi-Agent LLM Framework for Academic Reading Support: Design and Evaluation of the SmartRead Platform",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Nanjing Tech University"
      },
      {
        "paper_id": "206",
        "authors": "Xiaoshan Huang, Conrad Borchers, Jiayi Zhang and Susanne Lajoie",
        "title": "Physiological and Semantic Patterns in Medical Teams Using an Intelligent Tutoring System",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Zhejiang Chinese Medical University"
      },
      {
        "paper_id": "463",
        "authors": "Elissavet Papageorgiou, Pantelis M. Papadopoulos, Ahsen Çini, Athanasios Stoidis, Adelson de Araujo and Maryam Amir Haeri",
        "title": "Investigating How Collaborative Conversational Agents Influence the Relationship of Affective and Cognitive Engagement in Student Dialogues",
        "topic": "Generative AI & LLMs",
        "country": "NL",
        "country_name": "荷蘭 (Netherlands)",
        "institution": "Delft University of Technology"
      },
      {
        "paper_id": "618",
        "authors": "Bunichi Otaki, Ritsuko Oshima and Jun Oshima",
        "title": "How Do Experts Use Generative AI in Collaborative Problem Solving?: Expert-Novice Comparison",
        "topic": "Generative AI & LLMs",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Shizuoka University"
      },
      {
        "paper_id": "1256",
        "authors": "Kyosuke Takami and Masahiko Haruno",
        "title": "From Rule-Based to LLM-Based Agents: A Calibrated Simulation Framework for Classroom Social Networks",
        "topic": "Generative AI & LLMs",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Osaka Kyoiku University"
      }
    ]
  },
  "AIED62 (SS)": {
    "title": "AI for All: Offline Architectures and Global Equity",
    "track": "Social",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "130",
        "authors": "Yingbo Ma and Yukyeong Song",
        "title": "Mapping AI Literacy in Medical Education: A Review of Concepts and Teaching Practices",
        "topic": "Ethics, Trust & Bias",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Fourth Affiliated Hospital of China Medical University"
      },
      {
        "paper_id": "427",
        "authors": "Bijun He and Yanhong Wang",
        "title": "Biblometrics Insights on the Trends of Artificial Intelligence and Educational Commercialization in Early Childhood Educational Research",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Rochester"
      },
      {
        "paper_id": "801",
        "authors": "Alina Pees, Leo Oelscher, Marcus Specht, Christian Rietz and Florence Kristin Lehnert",
        "title": "From Speculation to Evaluation: Exploring Values in Design Fictions about AI-Enhanced Education",
        "topic": "Ethics, Trust & Bias",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "FernUniversität in Hagen"
      },
      {
        "paper_id": "990",
        "authors": "Jaeyoon Choi and Shamya Karumbaiah",
        "title": "When Features Misrepresent Underrepresented Learners: Auditing Algorithmic Bias with Differentially Expressive Features",
        "topic": "Ethics, Trust & Bias",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Soonchunhyang University"
      },
      {
        "paper_id": "1003",
        "authors": "Angela Stewart, Paras Sharma, Chun Li, Ye Deng, Tayo Madein, Yueping Sha, Janet Bih Fofang, Christina Kundrak and Erin Walker",
        "title": "Design Tensions for Generative AI in Education for Early to Mid-Adolescent Youth: An Exploration of Autonomy, Critical Reflection, and Psychological Safety",
        "topic": "Ethics, Trust & Bias",
        "country": "NZ",
        "country_name": "紐西蘭 (New Zealand)",
        "institution": "University of Auckland"
      }
    ]
  },
  "AIED63 (HS)": {
    "title": "Mathematics Education & Intelligent Tutoring",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "61",
        "authors": "Eason Chen, Xinyi Tang, Yvonne Zhao, Meiyi Chen, Meryam Elmir, Elizabeth Mclaughlin, Nina Yuan, Isabel Wang, Shyam Agarwal, Jared Cochrane, Jionghao Lin, Tongshuang Wu and Ken Koedinger",
        "title": "Learning More with Less: LLM-Supported Self-Explanation Enhances Transfer in Calculus",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      },
      {
        "paper_id": "89",
        "authors": "Prerna Ravi, Carúmey Stevens, Beatriz Flamia, Jasmine David, Brandon Hanks, Hal Abelson, Grace Lin and Emma Anderson",
        "title": "Exploring Teachers’ Perspectives on Using Conversational AI Agents for Group Collaboration",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Georgia Institute of Technology"
      },
      {
        "paper_id": "125",
        "authors": "Jingyuan Qiu, Sheng Chang, Wei Wei and Ziqi Chen",
        "title": "GenAI-supported Mathematical Storytelling: How Deep Is Optimal? A Three-Group Study of Cognitive Gains",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Tsinghua University"
      },
      {
        "paper_id": "200",
        "authors": "Candace Walkington, Theodora Beauchamp, Fareya Ikram, Merve Koçyiğit Gürbüz, Fangli Xia, Morgan Lee and Andrew Lan",
        "title": "Mathematics Teachers’ Interactions with a Multi-Agent System for Personalized Problem Generation",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Southern Methodist University"
      },
      {
        "paper_id": "286",
        "authors": "Katie Bainbridge, Jack Strelich, Debshila Basu Mallick and Richard Baraniuk",
        "title": "A randomized blind comparison of SME and LLM-generated active learning tasks for math classes",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Rice University"
      }
    ]
  },
  "AIED64 (TL)": {
    "title": "AI Simulations for Professional Training",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 205",
    "papers": [
      {
        "paper_id": "45",
        "authors": "Arijit Chakma, Peng He, Honglu Liu, Zeyuan Wang, Tingting Li, Tiffany Do and Feng Liu",
        "title": "DrawSim-PD: Simulating Student Science Drawings to Support NGSS-Aligned Teacher Diagnostic Reasoning",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Sinopec (China)"
      },
      {
        "paper_id": "580",
        "authors": "Naoki Shindo and Masaki Uto",
        "title": "LLM-based Virtual Standardized Patients with Response Excessiveness Suppression via Direct Preference Optimization for Medical Interview Examinations",
        "topic": "Generative AI & LLMs",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Kobe University"
      },
      {
        "paper_id": "1247",
        "authors": "Vatsal Mehta, Zinan Zhang, Anushka Anand, Shreevidhya Shambanna and Akram Bayat",
        "title": "SimPath: Clinically Grounded AI Patients for Therapist Training",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Wisconsin–Madison"
      }
    ]
  },
  "AIED65 (TL)": {
    "title": "AI Tools for Qualitative & Teacher Research",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "296",
        "authors": "Mingyu Feng, Ethan Prihar and Natalie Brezack",
        "title": "Developing and Evaluating a Large Language Model–Based Tool for Qualitative Analysis of Teacher Interviews",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Wested"
      },
      {
        "paper_id": "408",
        "authors": "Xingming Li, Runke Huang, Yanan Bao, Yuye Jin, Yuru Jiao and Qingyong Hu",
        "title": "When AI Meets Early childhood education: Large Language Models as Assessment Teammates in Chinese Preschools",
        "topic": "Writing & Language Support",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Zhongyuan University of Technology"
      },
      {
        "paper_id": "882",
        "authors": "Zhihan Guo, Rundong Xue, Yuting Lu and Jionghao Lin",
        "title": "MisEdu-RAG: A Misconception-Aware Dual-Hypergraph RAG for Novice Math Teachers",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Dalian University of Technology"
      }
    ]
  },
  "AIED66 (TS)": {
    "title": "Cognitive Modeling and Reasoning",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "160",
        "authors": "Yongan Yu, Mengqian Wu, Yiran Lin and Nikki G. Lobczowski",
        "title": "THiNK: Can Large Language Models Think-aloud?",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Shandong University"
      },
      {
        "paper_id": "623",
        "authors": "Wangda Zhu, Guang Chen and Yin Yang",
        "title": "Time-window ONA: Model the impact of utterances in Ordered Network Analysis",
        "topic": "Learning Analytics & Student Modeling",
        "country": "HK",
        "country_name": "香港 (Hong Kong)",
        "institution": "Hong Kong Polytechnic University"
      },
      {
        "paper_id": "773",
        "authors": "Tomoki Aburatani, Yuki Hayashi and Kazuhisa Seta",
        "title": "Conceptualization of Thinking Activities-specific Metacognitive Knowledge Ontology",
        "topic": "Learning Analytics & Student Modeling",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Osaka Prefecture University"
      },
      {
        "paper_id": "884",
        "authors": "Shlok Sand, Chaitanya Shah and Vasudeva Varma",
        "title": "Decoding Latent Reasoning: Mechanistic Interpretability of Chain of Continuous Thought with Sparse Autoencoders",
        "topic": "Learning Analytics & Student Modeling",
        "country": "IN",
        "country_name": "印度 (India)",
        "institution": "Indian Institute of Technology Hyderabad"
      },
      {
        "paper_id": "970",
        "authors": "Ying Zhang, Ningxi Cheng, Yizhu Gao, Geng Yuan, Nicholas Young, Hongmei Li and Xiaoming Zhai",
        "title": "A Framework for Human-AI Q-Matrix Refinement: A NeuralCDM Evaluation",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Handan College"
      }
    ]
  },
  "AIED67 (SL)": {
    "title": "Ethics & Accountability in Higher Ed",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "113",
        "authors": "Qiaoxin Yang",
        "title": "From Verdicts to Maps: Reimagining AI Assessment for ADHD through a Strength-Based Lens",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Albert Einstein College of Medicine"
      },
      {
        "paper_id": "425",
        "authors": "Diane Vassallo",
        "title": "From Tool to Teammate? Negotiating Accountability and Disclosure in Academic Generative AI Use",
        "topic": "Ethics, Trust & Bias",
        "country": "MT",
        "country_name": "Other (MT)",
        "institution": "University of Malta"
      },
      {
        "paper_id": "913",
        "authors": "Revekka Kyriakoglou, Anna Pappa, Valéry Psyché, Sébastien Lallé, Guilherme Medeiros-Machado, Nour El Mawas, Sonia Proust-Androwkha, Lamprini Chartofylaka and Anis Boubaker",
        "title": "From Ethical Discourse to Empirical Evidence: How Ethics Is Operationalized in Studies on Generative AI in Higher Education",
        "topic": "Ethics, Trust & Bias",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Laboratoire Cognitions Humaine et Artificielle"
      }
    ]
  },
  "AIED68 (TL)": {
    "title": "Multimodal Data & Learner Modeling",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "87",
        "authors": "Xueyi Li, Tianqiao Liu, Jiaqi Zheng, Zitao Liu, Yongdong Wu and Weiqi Luo",
        "title": "Benchmarking Scientific Formula Vocalization in Large Speech Language Models Toward Accessible Learning",
        "topic": "Learning Analytics & Student Modeling",
        "country": "HK",
        "country_name": "香港 (Hong Kong)",
        "institution": "Hong Kong Polytechnic University"
      },
      {
        "paper_id": "537",
        "authors": "Xiaomeng Huang, Xavier Ochoa and Dani Hiterer",
        "title": "The TME Framework: Multimodal Learner Modeling for Active Listening Skills in Collaborative Problem Solving",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "New York University"
      },
      {
        "paper_id": "666",
        "authors": "Lin Li, Mohammad Amin Samadi, Jingyun Wu, Linxuan Zhao, Nia Nixon and Jamaal Matthews",
        "title": "Automated Multimodal Transcription for Belonging-centered Classroom Interaction Analysis: Opportunities and Challenges",
        "topic": "Learning Analytics & Student Modeling",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Anhui Agricultural University"
      }
    ]
  },
  "AIED69 (HL)": {
    "title": "Collaborative Dynamics & Uncertainty",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "256",
        "authors": "Anna Radtke and Lenka Schnaubert",
        "title": "Uncertain AI – Better AI? Effects of Uncertainty Indicators in Collaborative Learning with a Human Peer or an Artificial Intelligence",
        "topic": "Other AIED Topics",
        "country": "IT",
        "country_name": "義大利 (Italy)",
        "institution": "Free University of Bozen-Bolzano"
      },
      {
        "paper_id": "360",
        "authors": "Mon-Lin Monica Ko, Chelsea Chandler, Sierra Rose, Brooklyn Cline, Emily Watts, Reitman Jason, Peter Foltz and Sidney D'Mello",
        "title": "AI Partners that Support Productive Uncertainty within “Jigsaw” Activities during Small Group Collaborative Learning in Classrooms",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Colorado Boulder"
      },
      {
        "paper_id": "1050",
        "authors": "Shan Zhang, Andres Felipe Zambrano, Xiaoyi Tian, Yukyeong Song, Anthony F. Botelho, Kristy Elizabeth Boyer, Maya Israel and Shiyan Jiang",
        "title": "Analyzing Middle School Students' Dialogue and Behaviors during Collaborative AI Chatbot Development Using Ordered Network Analysis",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Nanchang University"
      }
    ]
  },
  "AIED70 (TS)": {
    "title": "Pedagogical Scaffolding and Conversation",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "232",
        "authors": "Longxiang Du, Rui Zhong, Zhenwan Zhu, Shi Dong and Shuyuan Sun",
        "title": "From BOPPPS Stages to Cognitive-Adaptive Prompts: Controlling Instructional Drift in LLM-Based Tutoring Dialogues",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Central China Normal University"
      },
      {
        "paper_id": "451",
        "authors": "Iris Delikoura, Pantelis M Papadopoulos and Pan Hui",
        "title": "Agnoagentia: The Illusion of Agency in AI-Assisted Learning",
        "topic": "Generative AI & LLMs",
        "country": "HK",
        "country_name": "香港 (Hong Kong)",
        "institution": "Hong Kong University of Science and Technology"
      },
      {
        "paper_id": "509",
        "authors": "Conrad Borchers, Jiayi Zhang and Ashish Gurung",
        "title": "Representation Learning to Study Temporal Dynamics in Tutorial Scaffolding",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "University of Oxford"
      },
      {
        "paper_id": "700",
        "authors": "Junbo Koh, Minsun Cho and Sunyoung Keum",
        "title": "Peer and Tutor in One: A Productive Failure-Based Architecture for Multi-Role Conversational Agents in Physics Learning",
        "topic": "Generative AI & LLMs",
        "country": "KR",
        "country_name": "韓國 (South Korea)",
        "institution": "Seoul National University"
      },
      {
        "paper_id": "957",
        "authors": "Chen Hu, Hui-Chun Hung, Chih-Hao Hsu, Shu-I Fang, Chen-Chung Liu, Chia-Hui Chang and Ying-Tien Wu",
        "title": "An ORID-Structured GenAI Reading Companion Integrating Structured Book Chat and Virtual Labs for Science Reading",
        "topic": "Generative AI & LLMs",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Johns Hopkins University"
      }
    ]
  },
  "AIED71 (TS)": {
    "title": "Cross-Cultural and Language-Specific AI",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "119",
        "authors": "Nurul Aisyah, Muhammad Dehan Al Kautsar, Arif Hidayat, Raqib Chowdhury and Fajri Koto",
        "title": "Evaluating Vision-Language and Large Language Models for Automated Student Assessment in Indonesian Classrooms",
        "topic": "Writing & Language Support",
        "country": "ID",
        "country_name": "Other (ID)",
        "institution": "University of Mataram"
      },
      {
        "paper_id": "224",
        "authors": "Adnan Labib, Qiao Wang, Yixuan Huang and Zheng Yuan",
        "title": "Multi-Dimensional Evaluation of Large Language Models for Grammatical Error Correction",
        "topic": "Writing & Language Support",
        "country": "MY",
        "country_name": "Other (MY)",
        "institution": "Monash University Malaysia"
      },
      {
        "paper_id": "336",
        "authors": "Yiling Dai and Toya Terao",
        "title": "LLM-Driven Text Simplification and its Effects on Extensive Reading in EFL Learners",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Southeast University"
      },
      {
        "paper_id": "438",
        "authors": "Teodor Sakal Francišković, Jelena Slivka, Nikola Luburić and Mitar Perović",
        "title": "How Prompting and Context Granularity Shape LLM-Based Assessment of Academic Writing: A Case Study in Serbian",
        "topic": "Writing & Language Support",
        "country": "RS",
        "country_name": "Other (RS)",
        "institution": "University of Novi Sad"
      },
      {
        "paper_id": "1054",
        "authors": "Valentina Scorza, Giacomo Cassano and Nicoletta Di Blas",
        "title": "Can Large Language Models Learn to Grade Like Teachers? A Few-Shot Study on Open-Ended Assessment",
        "topic": "Writing & Language Support",
        "country": "IT",
        "country_name": "義大利 (Italy)",
        "institution": "Agostino Gemelli University Polyclinic"
      }
    ]
  },
  "AIED72 (HL)": {
    "title": "Scaffolding Literacy & Language",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "203",
        "authors": "Soufiane Jhilal, Eleonora Pasqua, Caterina Marchesi, Riccardo Corradi and Martina Galletti",
        "title": "Tailoring AI-Driven Reading Scaffolds to the Distinct Needs of Neurodiverse Learners",
        "topic": "Writing & Language Support",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Centre National de la Recherche Scientifique"
      },
      {
        "paper_id": "1021",
        "authors": "Yueling Fan, Richard Lee Davis and Olga Viberg",
        "title": "From Intention to Text: AI-Supported Goal Setting in Academic Writing",
        "topic": "Writing & Language Support",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Jiangsu Provincial Center for Disease Control and Prevention"
      },
      {
        "paper_id": "1334",
        "authors": "Liqun He, Shijun Cindy Chen, Mutlu Cukurova and Manolis Mavrikis",
        "title": "Dialogue Act Patterns in GenAI-Mediated L2 Oral Practice: A Sequential Analysis of Learner–Chatbot Interactions",
        "topic": "Generative AI & LLMs",
        "country": "SE",
        "country_name": "瑞典 (Sweden)",
        "institution": "Uppsala University"
      }
    ]
  },
  "AIED73 (HL)": {
    "title": "Teacher AI Literacy & Professional Development",
    "track": "Human-centered",
    "type": "Long-paper session",
    "room": "North 205",
    "papers": [
      {
        "paper_id": "598",
        "authors": "Heidi Reichert, Tahreem Yasir, Malvika Satyavolu and Tiffany Barnes",
        "title": "A Framework for LLM Integration in Secondary Education: Insights from Computing Teachers",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "BioStrategies (United States)"
      },
      {
        "paper_id": "1023",
        "authors": "Steven Moore",
        "title": "Tools, Teammates, or Threats? How Pedagogical Reasoning Shapes Novice Designers' Judgments About AI in Instruction",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "National Cancer Institute"
      },
      {
        "paper_id": "1071",
        "authors": "Nabil Al Nahin Ch, Aaron Wong, Betsy Corcoran, Hilah Barbot, Yusuf Ahmad and Caitlin Mills",
        "title": "Integrating Educator-designed AI Tools in Classrooms: Teachers’ Practices, Perceptions, and Concerns",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Minnesota System"
      }
    ]
  },
  "AIED74 (TL)": {
    "title": "Automated Question Generation & Assessment Design",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 209",
    "papers": [
      {
        "paper_id": "412",
        "authors": "Hoang Khiem Truong, Duc-Tuan Luu, Ngoc Hao Duong, Van Thin Dang and Luu Thuy Ngan Nguyen",
        "title": "From Slides to Exams: A Multi-Agent Human-AI System for Collaborative Assessment Design",
        "topic": "Writing & Language Support",
        "country": "VN",
        "country_name": "Other (VN)",
        "institution": "HCMC Hospital of Dermato Venereology"
      },
      {
        "paper_id": "1135",
        "authors": "Chris Davis Jaldi, Anmol Saini, Shan Zhang, Noah Schroeder, Cogan Shimizu and Eleni Ilkou",
        "title": "Small, Private Language Models as Teammates for Educational Assessment Design",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Wright State University"
      },
      {
        "paper_id": "1261",
        "authors": "Tengteng Cheng, Xueyi Li, Teng Guo, Mingliang Hou, Zitao Liu and Weiqi Luo",
        "title": "MusicTutor: Facilitating Goal-Oriented Singing Practice via Multi-Agent Tutoring Framework",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Tongji University"
      }
    ]
  },
  "AIED75 (TS)": {
    "title": "Intelligent Tutoring for Programming and STEM",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "65",
        "authors": "Ethan Prihar, Hugues Saltini, Peter Bühlmann and Tanja Käser",
        "title": "A Generalizable Approach for Real-Time Personalized Feedback in Open-Ended Learning Environments",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "École Polytechnique Fédérale de Lausanne"
      },
      {
        "paper_id": "127",
        "authors": "Lingyue Fu, Datong Chen, Haowei Yuan, Qingyao Li, Weiwen Liu, Weinan Zhang and Yong Yu",
        "title": "DebugTA: An LLM-Based Agent for Simplifying Debugging and Teaching in Programming Education",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Shanghai Jiao Tong University"
      },
      {
        "paper_id": "284",
        "authors": "Zhangqi Duan, Arnav Kankaria, Dhruv Kartik and Andrew Lan",
        "title": "Using LLMs for Knowledge Component-level Correctness Labeling in Open-ended Coding Problems",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Massachusetts Amherst"
      },
      {
        "paper_id": "476",
        "authors": "Stefania Zourlidou, Shokooh Ebri, Tai Le Quy and Frank Hopfgartner",
        "title": "Scaffolding-First Constraint Design for LLM Tutors in Data-Science Problem Solving",
        "topic": "Programming & STEM",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "Koblenz University of Applied Sciences"
      },
      {
        "paper_id": "631",
        "authors": "Yuxuan Chen, Chenyan Zhao, Jacob Levine, Kangyu Feng, Max Fowler and Mariana Silva",
        "title": "On Generating and Validating Erroneous Examples in CS1 using LLMs",
        "topic": "Programming & STEM",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Jilin University"
      }
    ]
  },
  "AIED76 (SS)": {
    "title": "Unmasking Bias: Auditing Fairness in AIED Systems",
    "track": "Social",
    "type": "Short-paper session",
    "room": "North 206",
    "papers": [
      {
        "paper_id": "208",
        "authors": "Omed Abed, Rabia Basri, Patrick-Benjamin Bök and Matteo Große-Kampmann",
        "title": "When LLMs Give Voting Advice: Bias, Coherence, and Educational Risk",
        "topic": "Ethics, Trust & Bias",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "Rhine-Waal University of Applied Sciences"
      },
      {
        "paper_id": "470",
        "authors": "Mohammadreza Farrokhnia, Ghasem Salimi and Amirhossein Ahmadshahi",
        "title": "Students, AI, and the Future of Higher Education: A Scoping Review of Perceptions and Concerns",
        "topic": "Ethics, Trust & Bias",
        "country": "IR",
        "country_name": "Other (IR)",
        "institution": "Shahid Rajaee Teacher Training University"
      },
      {
        "paper_id": "1069",
        "authors": "George Boateng, Samuel Boateng and Victor Wumbor-Apin Kumbol",
        "title": "Kwame 2.0: Human-in-the-Loop Generative AI Teaching Assistant for Large Scale Online Coding Education in Africa",
        "topic": "Programming & STEM",
        "country": "CH",
        "country_name": "瑞士 (Switzerland)",
        "institution": "ETH Zurich"
      },
      {
        "paper_id": "1146",
        "authors": "Pragati Maheshwary, Shamya Karumbaiah, Anurag Maravi and Aditi Haiman",
        "title": "CLUE-AI: A Collaborative Game-Based Learning Approach to Promote Critical Literacy for Uncovering Errors in AI",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      },
      {
        "paper_id": "1199",
        "authors": "Sydney Miller, Lan Jiang and Nigel Bosch",
        "title": "Fairness Depends on Assessment: Learning by Teaching with Large Language Models",
        "topic": "Ethics, Trust & Bias",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Georgia"
      }
    ]
  },
  "AIED77 (TS)": {
    "title": "Learning Analytics for Student Success",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "291",
        "authors": "Filipe Dwan Pereira, George Zambonin, André Nascimento, Mario Santos, Mariana Mello, Tyagi Lima, Luiz Rodrigues, Cleon Xavier, Newarney Torrezão da Costa, Dragan Gasevic, Gabriel Alves and Rafael Ferreira Mello",
        "title": "Translating XAI into Actionable Feedback Using LLMs to Prevent Student Dropout",
        "topic": "Generative AI & LLMs",
        "country": "BR",
        "country_name": "巴西 (Brazil)",
        "institution": "Centro de Estudos e Sistemas Avançados do Recife"
      },
      {
        "paper_id": "538",
        "authors": "Jay Pande, Wookhee Min, Randall Spain, Vikram Kumaran and James Lester",
        "title": "Multi-Label Collaborative Dialogue Act Recognition for Adaptive Team Training Environments",
        "topic": "Learning Analytics & Student Modeling",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "North Carolina State University"
      },
      {
        "paper_id": "609",
        "authors": "Atsushi Shimada, Yuma Miyazaki and Saiki Hirotaka",
        "title": "Content-Grounded Learning Behavior Analysis for Contextualized Feedback",
        "topic": "Learning Analytics & Student Modeling",
        "country": "JP",
        "country_name": "日本 (Japan)",
        "institution": "Kyushu University"
      },
      {
        "paper_id": "619",
        "authors": "Qianru Lyu, Conrad Borchers, Meng Xia, Karen Xiao, Paulo F. Carvalho, Kenneth R. Koedinger and Vincent Aleven",
        "title": "Evaluating a Data-driven Redesign Process for Intelligent Tutoring Systems",
        "topic": "Learning Analytics & Student Modeling",
        "country": "SG",
        "country_name": "新加坡 (Singapore)",
        "institution": "Nanyang Technological University"
      },
      {
        "paper_id": "1141",
        "authors": "Raylan Santos, Cristian Cechinel, Emanuel Queiroga and Thales Vieira",
        "title": "From Predictive Models to Actionable Recommendations: A Survey of Counterfactual Approaches in Student Dropout",
        "topic": "Learning Analytics & Student Modeling",
        "country": "BR",
        "country_name": "巴西 (Brazil)",
        "institution": "Universidade Federal do Oeste do Pará"
      }
    ]
  },
  "AIED78 (TL)": {
    "title": "Explainable AI (XAI) in the Classroom",
    "track": "Technical",
    "type": "Long-paper session",
    "room": "North 201",
    "papers": [
      {
        "paper_id": "299",
        "authors": "Muntasir Hoq, Griffin Pitts, Bradford Mott, Seung Lee, Jessica Vandenberg, Shuyin Jiao, Narges Norouzi, James Lester and Bita Akram",
        "title": "An Explainable AI Assistant for Introductory Programming Education: Improving Feedback Reliability with Instructor-AI Collaboration",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "North Carolina State University"
      },
      {
        "paper_id": "346",
        "authors": "Supakit Boonsongprasert, Sachin Pathak, Chris Song and Lujie Chen",
        "title": "Beyond Show and Tell: Explainable AI-Supported Feedback for Developing Data Visualization Sense-Making Skills",
        "topic": "Intelligent Tutoring & Scaffolding",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University of Maryland, Baltimore County"
      },
      {
        "paper_id": "805",
        "authors": "Dominik Glandorf, Fares Fawzi and Tanja Käser",
        "title": "Scalable and Explainable Learner-Video Interaction Prediction using Multimodal Large Language Models",
        "topic": "Generative AI & LLMs",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "University of Göttingen"
      }
    ]
  },
  "AIED79 (SL)": {
    "title": "Future Foundations & Child-Centric AI",
    "track": "Social",
    "type": "Long-paper session",
    "room": "North 203",
    "papers": [
      {
        "paper_id": "376",
        "authors": "Danielle R. Thomas, Conrad Borchers, Kirk Vanacore, Kenneth R. Koedinger and René F. Kizilcec",
        "title": "Modernizing Ground Truth: Four Shifts Toward Improving Reliability and Validity in AI in Education",
        "topic": "Other AIED Topics",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Carnegie Mellon University"
      },
      {
        "paper_id": "1149",
        "authors": "Feiwen Xiao, Jiayi Zhang, Andres Zambrano and Shiyan Jiang",
        "title": "What Children’s AI Literacy Books Teach About Artificial Intelligence: A Content Analysis Using the AI4K12 Framework",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Pennsylvania State University"
      },
      {
        "paper_id": "1211",
        "authors": "Supratim Pait, Sylvia Janicki, Yuhan Hou, Michael Nitsche and Noura Howell",
        "title": "Community Futures: Hybrid and Situated Critical AI Literacy",
        "topic": "Writing & Language Support",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Georgia Institute of Technology"
      }
    ]
  },
  "AIED80 (HS)": {
    "title": "AI-Enhanced Teacher Training & Professional Development (Human-Short)",
    "track": "Human-centered",
    "type": "Short-paper session",
    "room": "Aud Meeting 2",
    "papers": [
      {
        "paper_id": "46",
        "authors": "Chenyan Zhao and Mariana Silva",
        "title": "Human Oversight Is Not Neutral: How AI Grades Shape Human Grading Decisions",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "National Institutes for Food and Drug Control"
      },
      {
        "paper_id": "387",
        "authors": "Jie Cao, Ha Nguyen, Selim Yavuz, Boran Yu, Shuguang Wang, Pavneet Kaur Bharaj and Dionne Cross Francis",
        "title": "Developing Authentic Simulated Learners for Mathematics Teacher Learning: Insights from Three Approaches with Large Language Models",
        "topic": "Teacher Support & Collaboration",
        "country": "GB",
        "country_name": "英國 (UK)",
        "institution": "University of Essex"
      },
      {
        "paper_id": "429",
        "authors": "Yuanyuan Li, Zi-Linyi Fu, Sijia Ma, Yihe Zeng, Yufei Zhu, Fei Jiang, Gong Wang and Xiaoqing Gu",
        "title": "Mitigating Preservice Teachers' Teaching Anxiety with Generative Student Agents: A Quasi-Experimental Study on MetaClass",
        "topic": "Teacher Support & Collaboration",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "Henan University of Engineering"
      },
      {
        "paper_id": "544",
        "authors": "Blessed Mhungu",
        "title": "Supporting Socially Shared Regulation Through Human-AI Collaboration in Pre-service Teacher Education",
        "topic": "Teacher Support & Collaboration",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "University at Buffalo, State University of New York"
      },
      {
        "paper_id": "906",
        "authors": "Mahliya Yibulayin Ibrahim and Nikki Lobczowski",
        "title": "Exploring Teacher Use of an AI Support Bot during an Asynchronous Training Module",
        "topic": "Teacher Support & Collaboration",
        "country": "CA",
        "country_name": "加拿大 (Canada)",
        "institution": "McGill University"
      }
    ]
  },
  "AIED81 (TS)": {
    "title": "Infrastructure and LMS Integration",
    "track": "Technical",
    "type": "Short-paper session",
    "room": "North 210",
    "papers": [
      {
        "paper_id": "198",
        "authors": "Marc Ghanime, Christopher Krauss, Bach Do and Truong-Sinh An",
        "title": "Design, Integration, and Evaluation of LLM-Enhancement Techniques for LMSs: RAG, LoRA Fine-Tuning, and Structured Generation",
        "topic": "Generative AI & LLMs",
        "country": "DE",
        "country_name": "德國 (Germany)",
        "institution": "Fraunhofer Institute for Open Communication Systems"
      },
      {
        "paper_id": "953",
        "authors": "Badmavasan Kirouchenassamy, Chloé Conrad, Maëva Somny and Léo Nebel",
        "title": "Delegating Educational Tasks to Large Language Models: A Systematic Analysis of Evaluation Approaches",
        "topic": "Generative AI & LLMs",
        "country": "FR",
        "country_name": "法國 (France)",
        "institution": "Centre National de la Recherche Scientifique"
      },
      {
        "paper_id": "1127",
        "authors": "Jennifer Kleiman, Yizhu Gao, Xin Xia, Zhaoji Wang, Zipei Zhu, Jongchan Park and Xiaoming Zhai",
        "title": "Designing for Productive Disagreement in Collaborative STEM Argumentation",
        "topic": "Programming & STEM",
        "country": "US",
        "country_name": "美國 (USA)",
        "institution": "Marshfield Clinic"
      },
      {
        "paper_id": "1128",
        "authors": "Bill Dong and Jessica Liebowitz",
        "title": "Minimizing Data Exposure in Higher Education LLM Applications: Evaluating the Model Context Protocol (MCP) for Preserving Privacy in Academic Advising",
        "topic": "Generative AI & LLMs",
        "country": "CN",
        "country_name": "中國 (China)",
        "institution": "University of Science and Technology of China"
      },
      {
        "paper_id": "1258",
        "authors": "Debarshi Nath, Yash Desai, Ramkumar Rajendran and Dragan Gasevic",
        "title": "TemporLA: Bringing Research-grade Temporal Insights to Educators using a GenAI-powered Dashboard",
        "topic": "Generative AI & LLMs",
        "country": "CA",
        "country_name": "加拿大 (Canada)",
        "institution": "University of Guelph"
      }
    ]
  }
};

// Default State for Flights, Hotels, and Checklists
const defaultHotel = {
  name: "COEX K-residence 2 코엑스, 삼성역, 大峙, 蠶室",
  address: "삼성동 158-4, 3동, 3F, 6F, 12F, 首爾, 韓國, 06169 (서울, 대한민국)",
  bookingRef: "入住日期：2026年6月28日 (下午3:00後) / 退房日期：2026年7月4日 (上午11:00前)"
};

const defaultTodos = [
  { id: "visa", text: "申請並確認 K-ETA (韓國電子旅行許可) 或簽證狀態", category: "travel", completed: false },
  { id: "passport", text: "檢查護照效期是否在 6 個月以上", category: "travel", completed: true },
  { id: "reg", text: "確認大會 (Festival of Learning 2026 / AIED) 註冊成功並取得確認信", category: "academic", completed: false },
  { id: "flight-ticket", text: "下載或列印去回程機票與電子登機證 (BR2148 / BR169)", category: "travel", completed: false },
  { id: "hotel-ref", text: "備妥 COEX K-residence 2 訂房明細與地址 (備份於手機)", category: "travel", completed: false },
  { id: "sim", text: "購買南韓 eSIM 或上網 SIM 卡，並設定漫遊", category: "travel", completed: false },
  { id: "currency", text: "換取適量韓元現金 (部分傳統商店/加值 T-money 交通卡需現金)", category: "travel", completed: false },
  { id: "apps", text: "手機安裝 Naver Map, KakaoMap, Kakao T (叫車) 與 Papago (翻譯)", category: "travel", completed: false },
  { id: "t-money", text: "攜帶或計劃在機場購買 T-money 交通卡", category: "travel", completed: false },
  { id: "insurance", text: "購買海外旅遊平安與醫療保險", category: "travel", completed: false },
  { id: "slides", text: "準備並完成大會發表簡報 / Poster 輸出 (若有發表論文)", category: "academic", completed: false },
  { id: "papers", text: "在大會官網預覽感興趣的 AIED / EDM 論文摘要並加入日程表", category: "academic", completed: false }
];

// App State initialization
let starredSessions = JSON.parse(localStorage.getItem('aied_starred_sessions')) || [];
let starredPapers = JSON.parse(localStorage.getItem('aied_starred_papers')) || [];
let todoItems = JSON.parse(localStorage.getItem('aied_todo_items')) || defaultTodos;
let hotelInfo = JSON.parse(localStorage.getItem('aied_hotel_info')) || defaultHotel;

let customInterestKeywords = JSON.parse(localStorage.getItem('aied_interest_keywords')) || [];

let currentDay = "Monday  June 29";
let currentTrack = "all";
let showStarredOnly = false;
let expandedSessions = []; // Array of session header titles that are expanded

// Dashboard filter state
let selectedDashboardTopic = null;
let selectedDashboardCountry = null;
let dashboardSearchQuery = "";
let worldMapInstance = null;
let mapInitialized = false;
const countryCounts = {};
const countryNames = {};

const quickKeywords = ["LLM", "Writing", "K-12", "Agent", "Inquiry", "Math", "Collaborative", "Scaffolding", "Ethics", "Fairness"];

// Dynamic Flag Emoji Generator from Country Code
function getFlagEmoji(countryCode) {
  if (!countryCode || countryCode === 'Unknown') return '🌐';
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

// Flatten all papers with session metadata for easier dashboard search & scoring
let allPapers = [];
for (let sessionTitle in sessionDetailsData) {
  const sessionMeta = sessionDetailsData[sessionTitle];
  if (!sessionMeta || !sessionMeta.papers) continue; // Safety Check!
  
  const matchSession = scheduleData.find(s => s.title === sessionTitle);
  const dayStr = matchSession ? matchSession.day : "";
  const timeStr = matchSession ? matchSession.time : "";
  const roomStr = matchSession ? matchSession.room : "";
  const trackStr = matchSession ? matchSession.track : "AIED";
  
  sessionMeta.papers.forEach(p => {
    allPapers.push({
      ...p,
      sessionTitle: sessionTitle,
      sessionName: sessionMeta.title,
      day: dayStr,
      time: timeStr,
      room: roomStr,
      track: trackStr
    });
  });
}

// Populate country statistics for the map
allPapers.forEach(p => {
  if (p.country && p.country !== 'Unknown') {
    countryCounts[p.country] = (countryCounts[p.country] || 0) + 1;
    countryNames[p.country] = p.country_name;
  }
});

// 1. Initial Load & Setup
window.onload = function() {
  initCountdown();
  initHotelForm();
  renderDayFilters();
  renderSchedule();
  renderChecklist();
  initDashboard();
  renderItinerary();
};

// 2. Countdown Timer
function initCountdown() {
  const targetDate = new Date("2026-06-29T09:00:00+09:00").getTime();
  
  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;
    
    if (diff <= 0) {
      document.querySelector(".countdown-container").innerHTML = "<div style='font-weight:bold;color:var(--color-success);padding:10px;'>大會正式開始！Festival of Learning 2026 is LIVE!</div>";
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("cd-days").textContent = String(days).padStart(2, '0');
    document.getElementById("cd-hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("cd-mins").textContent = String(mins).padStart(2, '0');
    document.getElementById("cd-secs").textContent = String(secs).padStart(2, '0');
  }
  
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// 3. Tab Switching
window.switchTab = function(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => btn.getAttribute('onclick').includes(tabId));
  if (activeBtn) activeBtn.classList.add('active');
  
  const activeContent = document.getElementById(tabId);
  if (activeContent) activeContent.classList.add('active');
  
  // Initialize or resize the map when tab switches to dashboard
  if (tabId === 'tab-dashboard') {
    if (!mapInitialized) {
      initWorldMap();
      renderTopCountriesList();
      mapInitialized = true;
    } else if (worldMapInstance) {
      worldMapInstance.updateSize();
    }
  }
};

// 4. Hotel Form Handler
function initHotelForm() {
  document.getElementById("hotel-name").value = hotelInfo.name || "";
  document.getElementById("hotel-address").value = hotelInfo.address || "";
  document.getElementById("hotel-booking-ref").value = hotelInfo.bookingRef || "";
}

window.saveHotel = function(e) {
  e.preventDefault();
  hotelInfo = {
    name: document.getElementById("hotel-name").value,
    address: document.getElementById("hotel-address").value,
    bookingRef: document.getElementById("hotel-booking-ref").value
  };
  localStorage.setItem('aied_hotel_info', JSON.stringify(hotelInfo));
  alert("住宿資訊已成功儲存！");
};

// 5. Day Filter Buttons Generator
function renderDayFilters() {
  const days = [...new Set(scheduleData.map(s => s.day))];
  const container = document.getElementById("day-filters-container");
  container.innerHTML = "";
  
  days.forEach(day => {
    const btn = document.createElement("button");
    btn.className = `day-btn ${day === currentDay ? 'active' : ''}`;
    btn.textContent = day.replace("Monday", "週一 (Mon)").replace("Tuesday", "週二 (Tue)").replace("Wednesday", "週三 (Wed)").replace("Thursday", "週四 (Thu)").replace("Friday", "週五 (Fri)");
    btn.onclick = () => {
      currentDay = day;
      document.querySelectorAll(".day-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSchedule();
    };
    container.appendChild(btn);
  });
}

// 6. Render Schedule Grid
window.renderSchedule = function() {
  const tbody = document.getElementById("schedule-tbody");
  tbody.innerHTML = "";
  
  const filtered = scheduleData.filter(s => {
    const matchesDay = s.day === currentDay;
    const matchesTrack = currentTrack === "all" || s.track === currentTrack || (currentTrack === "General" && s.track === "General");
    const isStarred = starredSessions.includes(getUniqueId(s));
    const matchesStarred = !showStarredOnly || isStarred;
    
    return matchesDay && matchesTrack && matchesStarred;
  });
  
  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:var(--text-secondary);padding:30px;">
      沒有找到符合條件的日程項目。${showStarredOnly ? '您還沒有標記此天的日程，請取消勾選「只顯示我標記的日程」以查看全部。' : ''}
    </td></tr>`;
    return;
  }
  
  filtered.sort((a, b) => {
    const timeA = a.time.split('-')[0].trim();
    const timeB = b.time.split('-')[0].trim();
    return timeA.localeCompare(timeB);
  });
  
  filtered.forEach(session => {
    const tr = document.createElement("tr");
    const sId = getUniqueId(session);
    const isStarred = starredSessions.includes(sId);
    const hasDetails = sessionDetailsData[session.title] && sessionDetailsData[session.title].papers && sessionDetailsData[session.title].papers.length > 0;
    const isExpanded = expandedSessions.includes(session.title);
    
    let tagClass = "tag-general";
    if (session.track === "AIED") tagClass = "tag-aied";
    else if (session.track === "EDM") tagClass = "tag-edm";
    else if (session.track === "L@S") tagClass = "tag-las";
    
    let fullSessionName = session.title;
    if (sessionDetailsData[session.title] && sessionDetailsData[session.title].title) {
      fullSessionName = `${session.title} — ${sessionDetailsData[session.title].title}`;
    }
    
    const rowClickAction = hasDetails ? `onclick="toggleExpand('${session.title}')" style="cursor:pointer;"` : "";
    
    tr.innerHTML = `
      <td style="text-align: center;" onclick="event.stopPropagation();">
        <button class="star-btn ${isStarred ? 'starred' : ''}" onclick="toggleStar('${sId}')">
          <i class="${isStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
        </button>
      </td>
      <td ${rowClickAction}><span class="schedule-time">${session.time}</span></td>
      <td ${rowClickAction}><span class="schedule-room"><i class="fa-solid fa-door-open" style="margin-right:6px;font-size:0.85rem;color:var(--color-secondary);"></i>${session.room}</span></td>
      <td ${rowClickAction}><span class="schedule-room">${session.session}</span></td>
      <td ${rowClickAction}>
        <span class="session-tag ${tagClass}">${session.track === 'General' ? '大會' : session.track}</span>
        ${hasDetails ? `<span style="float:right; font-size:0.8rem; color:var(--color-secondary); font-weight:600;"><i class="fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}"></i> 論文細節</span>` : ''}
        <div class="session-title">${fullSessionName}</div>
      </td>
    `;
    tbody.appendChild(tr);
    
    if (isExpanded && hasDetails) {
      const detailTr = document.createElement("tr");
      detailTr.className = "session-detail-row";
      
      const papers = sessionDetailsData[session.title].papers;
      let papersHtml = papers.map(paper => {
        const isPaperStarred = starredPapers.includes(paper.paper_id);
        const isOwnPaper = paper.paper_id === "307";
        let starClass = isPaperStarred ? 'starred' : '';
        let ownBadge = isOwnPaper ? `<span class="paper-id-badge" style="background:rgba(245,158,11,0.15); border-color:var(--color-warning); color:var(--color-warning); margin-left: 5px;"><i class="fa-solid fa-trophy"></i> 您的發表</span>` : '';
        
        const flag = getFlagEmoji(paper.country);
        let regionBadge = '';
        if (paper.country && paper.country !== 'Unknown') {
          regionBadge = `
            <span class="paper-meta-session" style="background: rgba(6, 182, 212, 0.05); border-color: rgba(6, 182, 212, 0.15); color: var(--color-secondary); margin-top: 4px; display: inline-flex; align-items: center; gap: 4px; cursor: default;">
              ${flag} ${paper.country_name} · ${paper.institution}
            </span>
          `;
        }
        
        return `
          <div class="paper-item" style="${isOwnPaper ? 'border-color: var(--color-warning); background: rgba(245, 158, 11, 0.03);' : ''}">
            <span class="paper-id-badge">ID ${paper.paper_id}</span>
            ${ownBadge}
            <div class="paper-content" style="flex: 1;">
              <div class="paper-title-text">${paper.title}</div>
              <div class="paper-authors">${paper.authors}</div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                ${regionBadge}
              </div>
            </div>
            <button class="star-btn ${starClass}" style="margin-left: 10px;" onclick="event.stopPropagation(); togglePaperStar('${paper.paper_id}')">
              <i class="${isPaperStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
            </button>
          </div>
        `;
      }).join('');
      
      detailTr.innerHTML = `
        <td></td>
        <td colspan="4">
          <div class="session-papers-container">
            <h4><i class="fa-solid fa-book-open"></i> 本場次發表的論文 (${papers.length} 篇)</h4>
            <div class="papers-list">${papersHtml}</div>
          </div>
        </td>
      `;
      tbody.appendChild(detailTr);
    }
  });
};

function getUniqueId(s) {
  return `${s.day}_${s.time}_${s.room}_${s.title}`.replace(/\s+/g, '_');
}

window.toggleExpand = function(sessionTitle) {
  const index = expandedSessions.indexOf(sessionTitle);
  if (index > -1) {
    expandedSessions.splice(index, 1);
  } else {
    expandedSessions.push(sessionTitle);
  }
  renderSchedule();
};

window.toggleStar = function(id) {
  const index = starredSessions.indexOf(id);
  if (index > -1) {
    starredSessions.splice(index, 1);
  } else {
    starredSessions.push(id);
  }
  localStorage.setItem('aied_starred_sessions', JSON.stringify(starredSessions));
  renderSchedule();
  renderItinerary(); // Synchronize My Itinerary tab!
};

window.filterSessions = function() {
  currentTrack = document.getElementById("filter-track").value;
  showStarredOnly = document.getElementById("filter-starred").checked;
  renderSchedule();
};

// 7. Todo List Checklist Logic
window.renderChecklist = function() {
  const container = document.getElementById("checklist-items-wrapper");
  container.innerHTML = "";
  
  todoItems.forEach((todo, index) => {
    const item = document.createElement("div");
    item.className = `checklist-item ${todo.completed ? 'completed' : ''}`;
    item.onclick = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'I' && e.target.tagName !== 'BUTTON') {
        const checkbox = item.querySelector('input');
        checkbox.checked = !checkbox.checked;
        toggleTodo(index, checkbox.checked);
      }
    };
    
    item.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${index}, this.checked)">
      <span class="checklist-text">${todo.text}</span>
      <span class="checklist-badge ${todo.category === 'academic' ? 'badge-academic' : 'badge-travel'}">
        ${todo.category === 'academic' ? '學術' : '旅行'}
      </span>
      <button onclick="deleteTodo(${index}, event)" style="background:transparent;border:none;color:var(--color-danger);cursor:pointer;margin-left:10px;display:inline-flex;align-items:center;">
        <i class="fa-regular fa-trash-can"></i>
      </button>
    `;
    container.appendChild(item);
  });
  
  updateProgress();
};

window.toggleTodo = function(index, checked) {
  todoItems[index].completed = checked;
  localStorage.setItem('aied_todo_items', JSON.stringify(todoItems));
  renderChecklist();
};

window.deleteTodo = function(index, e) {
  e.stopPropagation();
  todoItems.splice(index, 1);
  localStorage.setItem('aied_todo_items', JSON.stringify(todoItems));
  renderChecklist();
};

window.addCustomTodo = function() {
  const input = document.getElementById("new-todo-text");
  const text = input.value.trim();
  if (!text) return;
  
  todoItems.push({
    id: 'custom_' + Date.now(),
    text: text,
    category: "travel",
    completed: false
  });
  
  localStorage.setItem('aied_todo_items', JSON.stringify(todoItems));
  input.value = "";
  renderChecklist();
};

function updateProgress() {
  if (todoItems.length === 0) {
    if (document.getElementById("progress-percent")) document.getElementById("progress-percent").textContent = "0%";
    if (document.getElementById("progress-bar")) document.getElementById("progress-bar").style.width = "0%";
    if (document.getElementById("sidebar-progress-percent")) document.getElementById("sidebar-progress-percent").textContent = "0%";
    if (document.getElementById("sidebar-progress-bar")) document.getElementById("sidebar-progress-bar").style.width = "0%";
    return;
  }
  const completed = todoItems.filter(t => t.completed).length;
  const percent = Math.round((completed / todoItems.length) * 100);
  
  if (document.getElementById("progress-percent")) document.getElementById("progress-percent").textContent = `${percent}%`;
  if (document.getElementById("progress-bar")) document.getElementById("progress-bar").style.width = `${percent}%`;
  if (document.getElementById("sidebar-progress-percent")) document.getElementById("sidebar-progress-percent").textContent = `${percent}%`;
  if (document.getElementById("sidebar-progress-bar")) document.getElementById("sidebar-progress-bar").style.width = `${percent}%`;
}


// ==========================================
// 8. PAPER TOPICS & COUNTRIES DASHBOARD LOGIC
// ==========================================
function initDashboard() {
  updateDashboardStats();
  renderDashboardTopics();
  renderQuickKeywords();
  document.getElementById("interest-keywords").value = customInterestKeywords.join(", ");
  updateRecommendations();
  renderDashboardPapers();
}

function updateDashboardStats() {
  document.getElementById("stat-total-papers").textContent = allPapers.length;
  document.getElementById("stat-starred-papers").textContent = starredPapers.length;
}

function renderDashboardTopics() {
  const topicsContainer = document.getElementById("topics-list-container");
  if (!topicsContainer) return;
  topicsContainer.innerHTML = "";
  topicsContainer.className = "word-cloud-container";
  
  const counts = {};
  allPapers.forEach(p => {
    counts[p.topic] = (counts[p.topic] || 0) + 1;
  });
  
  const sortedTopics = Object.keys(counts).sort((a,b) => counts[b] - counts[a]);
  
  let maxCount = 0;
  let minCount = Infinity;
  for (let t in counts) {
    if (counts[t] > maxCount) maxCount = counts[t];
    if (counts[t] < minCount) minCount = counts[t];
  }
  if (minCount === maxCount) minCount = maxCount - 1;
  
  const minFontSize = 0.82;
  const maxFontSize = 1.7;
  
  // All Themes tag
  const allItem = document.createElement("div");
  allItem.className = `word-cloud-tag ${selectedDashboardTopic === null ? 'active' : ''}`;
  allItem.style.fontSize = "0.9rem";
  allItem.style.fontWeight = "700";
  allItem.onclick = () => {
    selectedDashboardTopic = null;
    document.querySelectorAll(".word-cloud-tag").forEach(item => item.classList.remove("active"));
    allItem.classList.add("active");
    renderDashboardPapers();
  };
  allItem.innerHTML = `全部主題 <span class="word-cloud-count">${allPapers.length}</span>`;
  topicsContainer.appendChild(allItem);
  
  // Sort topics alphabetically to make finding topics easy in the word cloud
  const topicsToRender = [...sortedTopics].sort((a, b) => a.localeCompare(b));
  
  topicsToRender.forEach(topic => {
    const count = counts[topic];
    const size = minFontSize + ((count - minCount) / (maxCount - minCount)) * (maxFontSize - minFontSize);
    
    let tagColor = "var(--text-secondary)";
    let weightClass = "500";
    const ratio = (count - minCount) / (maxCount - minCount);
    
    if (ratio > 0.7) {
      tagColor = "var(--color-warning)"; // Top weight (Amber)
      weightClass = "700";
    } else if (ratio > 0.35) {
      tagColor = "var(--color-secondary)"; // Mid weight (Cyan)
      weightClass = "600";
    } else {
      tagColor = "var(--text-secondary)"; // Low weight (Gray)
      weightClass = "500";
    }
    
    const item = document.createElement("div");
    item.className = `word-cloud-tag ${selectedDashboardTopic === topic ? 'active' : ''}`;
    item.style.fontSize = `${size.toFixed(2)}rem`;
    item.style.fontWeight = weightClass;
    if (selectedDashboardTopic !== topic) {
      item.style.color = tagColor;
    }
    
    item.onclick = () => {
      selectedDashboardTopic = topic;
      document.querySelectorAll(".word-cloud-tag").forEach(tag => {
        tag.classList.remove("active");
        const tVal = tag.getAttribute("data-topic");
        if (tVal && tVal !== topic) {
          const tCount = counts[tVal];
          const tRatio = (tCount - minCount) / (maxCount - minCount);
          tag.style.color = tRatio > 0.7 ? "var(--color-warning)" : (tRatio > 0.35 ? "var(--color-secondary)" : "var(--text-secondary)");
        }
      });
      item.classList.add("active");
      item.style.color = "";
      renderDashboardPapers();
    };
    
    item.setAttribute("data-topic", topic);
    item.innerHTML = `${topic} <span class="word-cloud-count">${count}</span>`;
    topicsContainer.appendChild(item);
  });
}

function initWorldMap() {
  const container = document.getElementById("regions-map-container");
  if (!container) return;
  container.innerHTML = "";
  
  try {
    worldMapInstance = new jsVectorMap({
      selector: "#regions-map-container",
      map: "world",
      regionsSelectable: true,
      regionsSelectableOne: true,
      regionStyle: {
        initial: {
          fill: "rgba(255, 255, 255, 0.12)",
          stroke: "rgba(255, 255, 255, 0.2)",
          strokeWidth: 0.5,
          fillOpacity: 1
        },
        hover: {
          fill: "var(--color-secondary)",
          fillOpacity: 0.8,
          cursor: "pointer"
        },
        selected: {
          fill: "var(--color-primary)"
        },
        selectedHover: {
          fill: "var(--color-primary)",
          fillOpacity: 0.8
        }
      },
      series: {
        regions: [{
          attribute: "fill",
          scale: ["rgba(6, 182, 212, 0.15)", "rgba(139, 92, 246, 0.85)"],
          values: countryCounts
        }]
      },
      onRegionClick(event, code) {
        setTimeout(() => {
          const selected = worldMapInstance.getSelectedRegions();
          if (selected.length > 0) {
            selectedDashboardCountry = selected[0];
          } else {
            selectedDashboardCountry = null;
          }
          updateMapSelectionStatus();
          renderTopCountriesList();
          renderDashboardPapers();
        }, 10);
      },
      onRegionTooltipShow(event, tooltip, code) {
        const count = countryCounts[code] || 0;
        const name = countryNames[code] || tooltip.text();
        const flag = getFlagEmoji(code);
        tooltip.text(`
          <div style="padding: 6px 10px; font-family: var(--font-body); font-size: 0.8rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 6px; box-shadow: var(--shadow-lg); pointer-events: none;">
            <strong style="color: white; font-size: 0.85rem; display: flex; align-items: center; gap: 5px;">${flag} ${name}</strong>
            <div style="color: var(--color-secondary); margin-top: 4px; font-weight: 700;">發表篇數: ${count} 篇</div>
          </div>
        `, true);
      }
    });
    updateMapSelectionStatus();
  } catch (err) {
    console.error("Error initializing jsVectorMap:", err);
    container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--color-danger);font-size:0.85rem;"><i class="fa-solid fa-triangle-exclamation"></i> 地圖載入失敗。請檢查網路資源載入。</div>`;
  }
}

function updateMapSelectionStatus() {
  const statusEl = document.getElementById("regions-map-selection-status");
  const resetBtn = document.getElementById("btn-reset-map");
  if (!statusEl || !resetBtn) return;
  
  if (selectedDashboardCountry) {
    const fullName = countryNames[selectedDashboardCountry] || selectedDashboardCountry;
    const flag = getFlagEmoji(selectedDashboardCountry);
    statusEl.querySelector("span").innerHTML = `已選擇地區: <strong style="color:var(--color-secondary);">${flag} ${fullName}</strong>`;
    resetBtn.style.display = "inline-flex";
  } else {
    statusEl.querySelector("span").textContent = "點擊地圖國家或下方排行進行篩選";
    resetBtn.style.display = "none";
  }
}

window.clearMapSelection = function() {
  selectedDashboardCountry = null;
  if (worldMapInstance) {
    worldMapInstance.clearSelectedRegions();
  }
  updateMapSelectionStatus();
  renderTopCountriesList();
  renderDashboardPapers();
};

function renderTopCountriesList() {
  const container = document.getElementById("top-countries-list");
  if (!container) return;
  container.innerHTML = "";
  
  const sortedCountries = Object.keys(countryCounts).sort((a,b) => countryCounts[b] - countryCounts[a]);
  
  const label = document.createElement("span");
  label.style.cssText = "font-weight: 700; display: inline-flex; align-items: center; margin-right: 4px;";
  label.innerHTML = `<i class="fa-solid fa-list-ol" style="margin-right: 4px; color: var(--color-secondary);"></i> 發表排行：`;
  container.appendChild(label);
  
  sortedCountries.forEach(country => {
    const count = countryCounts[country];
    const flag = getFlagEmoji(country);
    const fullName = countryNames[country] || country;
    const shortName = fullName.split(' (')[0];
    
    const tag = document.createElement("span");
    tag.style.cssText = `
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid var(--border-color);
      padding: 2px 7px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 500;
      transition: var(--transition);
      display: inline-flex;
      align-items: center;
      gap: 3px;
    `;
    tag.innerHTML = `${flag} ${shortName} <span style="opacity: 0.65; font-size: 0.7rem; font-weight: 700;">${count}</span>`;
    
    tag.onclick = () => {
      if (selectedDashboardCountry === country) {
        selectedDashboardCountry = null;
        if (worldMapInstance) worldMapInstance.clearSelectedRegions();
      } else {
        selectedDashboardCountry = country;
        if (worldMapInstance) worldMapInstance.setSelectedRegions([country]);
      }
      updateMapSelectionStatus();
      renderTopCountriesList();
      renderDashboardPapers();
    };
    
    if (selectedDashboardCountry === country) {
      tag.style.background = "rgba(139, 92, 246, 0.12)";
      tag.style.borderColor = "var(--color-primary)";
      tag.style.color = "white";
    }
    
    container.appendChild(tag);
  });
}

function renderQuickKeywords() {
  const container = document.getElementById("quick-keywords-container");
  container.innerHTML = "";
  
  quickKeywords.forEach(kw => {
    const btn = document.createElement("button");
    const isSubscribed = customInterestKeywords.map(k => k.toLowerCase()).includes(kw.toLowerCase());
    
    btn.className = `day-btn ${isSubscribed ? 'active' : ''}`;
    btn.style.padding = "4px 8px";
    btn.style.fontSize = "0.75rem";
    btn.style.borderRadius = "6px";
    btn.textContent = `+ ${kw}`;
    
    btn.onclick = () => {
      toggleKeyword(kw);
    };
    container.appendChild(btn);
  });
}

function toggleKeyword(kw) {
  const idx = customInterestKeywords.findIndex(k => k.toLowerCase() === kw.toLowerCase());
  if (idx > -1) {
    customInterestKeywords.splice(idx, 1);
  } else {
    customInterestKeywords.push(kw);
  }
  
  localStorage.setItem('aied_interest_keywords', JSON.stringify(customInterestKeywords));
  document.getElementById("interest-keywords").value = customInterestKeywords.join(", ");
  renderQuickKeywords();
  updateRecommendations();
}

window.updateInterestKeywords = function() {
  const val = document.getElementById("interest-keywords").value;
  customInterestKeywords = val.split(',').map(k => k.trim()).filter(k => k !== "");
  localStorage.setItem('aied_interest_keywords', JSON.stringify(customInterestKeywords));
  renderQuickKeywords();
  updateRecommendations();
};

// ==========================================
// AI RECOMMENDATION ENGINE (Method 2 & 3)
// ==========================================
window.updateRecommendations = function() {
  const container = document.getElementById("smart-recommendations-container");
  const reasonText = document.getElementById("recommendation-reason");
  if (!container) return; // safety check
  container.innerHTML = "";
  
  let searchKeywords = [...customInterestKeywords];
  let isDefaultRecommend = false;
  
  if (searchKeywords.length === 0 && starredPapers.length === 0) {
    searchKeywords = ["writing", "elementary", "inquiry", "agent"];
    isDefaultRecommend = true;
  }
  
  const cleanKeywords = searchKeywords.map(k => k.toLowerCase());
  
  const starredTopics = [];
  const starredSessionsList = [];
  starredPapers.forEach(pid => {
    const p = allPapers.find(x => x.paper_id === pid);
    if (p) {
      starredTopics.push(p.topic);
      starredSessionsList.push(p.sessionTitle);
    }
  });
  
  const scoredPapers = allPapers.map(paper => {
    let score = 0;
    
    cleanKeywords.forEach(kw => {
      const title = paper.title.toLowerCase();
      const sTitle = paper.sessionName ? paper.sessionName.toLowerCase() : "";
      const authors = paper.authors.toLowerCase();
      
      if (title.includes(kw)) score += 10;
      if (sTitle.includes(kw)) score += 5;
      if (authors.includes(kw)) score += 2;
    });
    
    if (starredPapers.length > 0) {
      const topicMatchesCount = starredTopics.filter(t => t === paper.topic).length;
      score += topicMatchesCount * 4;
      
      if (starredSessionsList.includes(paper.sessionTitle)) {
         score += 15;
      }
      
      starredPapers.forEach(pid => {
        const starP = allPapers.find(x => x.paper_id === pid);
        if (starP && starP.authors && paper.authors) {
          const starAuthors = starP.authors.split(',').map(a => a.trim());
          const currentAuthors = paper.authors.split(',').map(a => a.trim());
          const shared = starAuthors.filter(a => currentAuthors.includes(a));
          score += shared.length * 8;
        }
      });
    }
    
    return {
      paper: paper,
      score: score
    };
  });
  
  const candidates = scoredPapers.filter(sp => 
    !starredPapers.includes(sp.paper.paper_id) && 
    sp.paper.paper_id !== "307"
  );
  
  candidates.sort((a, b) => b.score - a.score);
  
  let recommendations = candidates.slice(0, 5);
  
  if (recommendations.length > 0 && recommendations[0].score === 0) {
    recommendations = candidates
      .filter(sp => sp.paper.topic === "Writing & Language Support")
      .slice(0, 5);
    isDefaultRecommend = true;
  }
  
  if (isDefaultRecommend) {
    reasonText.innerHTML = `<i class="fa-solid fa-lightbulb" style="color:var(--color-warning);"></i> 系統預設為您推薦與您的研究方向（<strong>寫作支援、小學探究</strong>）最相關的報告：`;
  } else {
    let reasonParts = [];
    if (customInterestKeywords.length > 0) reasonParts.push(`訂閱主題「${customInterestKeywords.slice(0, 3).join(', ')}」`);
    if (starredPapers.length > 0) reasonParts.push(`已標記的 ${starredPapers.length} 篇論文`);
    reasonText.innerHTML = `<i class="fa-solid fa-sparkles" style="color:var(--color-primary);"></i> 基於您的${reasonParts.join('和')}，推薦以下 5 篇相關的發表：`;
  }
  
  recommendations.forEach(sp => {
    const paper = sp.paper;
    const card = document.createElement("div");
    card.className = "paper-item";
    card.style.background = "rgba(255, 255, 255, 0.02)";
    card.style.borderColor = "rgba(139, 92, 246, 0.15)";
    
    let dayZh = paper.day.replace("Monday", "週一").replace("Tuesday", "週二").replace("Wednesday", "週三").replace("Thursday", "週四").replace("Friday", "週五");
    const isPaperStarred = starredPapers.includes(paper.paper_id);
    
    const flag = getFlagEmoji(paper.country);
    let regionBadge = '';
    if (paper.country && paper.country !== 'Unknown') {
      regionBadge = `
        <span class="paper-meta-session" style="background: rgba(6, 182, 212, 0.05); border-color: rgba(6, 182, 212, 0.15); color: var(--color-secondary); display: inline-flex; align-items: center; gap: 4px; cursor: default;">
          ${flag} ${paper.country_name} · ${paper.institution}
        </span>
      `;
    }
    
    card.innerHTML = `
      <span class="paper-id-badge">ID ${paper.paper_id}</span>
      <div class="paper-content" style="flex: 1;">
        <div class="paper-title-text">${paper.title}</div>
        <div class="paper-authors" style="margin-top: 2px;">${paper.authors}</div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
          <div class="paper-meta-session" onclick="goToSession('${paper.sessionTitle}')" title="點擊在日程表中定位此場次">
            <i class="fa-solid fa-clock"></i> ${dayZh} · ${paper.time} · 門牌 ${paper.room} (${paper.sessionTitle})
          </div>
          ${regionBadge}
        </div>
      </div>
      <button class="star-btn ${isPaperStarred ? 'starred' : ''}" style="margin-left: 15px;" onclick="togglePaperStar('${paper.paper_id}')">
        <i class="${isPaperStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
      </button>
    `;
    container.appendChild(card);
  });
};

window.renderDashboardPapers = function() {
  const container = document.getElementById("dashboard-papers-container");
  container.innerHTML = "";
  
  const filtered = allPapers.filter(p => {
    const matchesTopic = selectedDashboardTopic === null || p.topic === selectedDashboardTopic;
    const matchesCountry = selectedDashboardCountry === null || p.country === selectedDashboardCountry;
    
    const query = dashboardSearchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) || 
      p.authors.toLowerCase().includes(query) || 
      p.paper_id.includes(query) ||
      p.sessionTitle.toLowerCase().includes(query) ||
      (p.sessionName && p.sessionName.toLowerCase().includes(query)) ||
      (p.country_name && p.country_name.toLowerCase().includes(query)) ||
      (p.institution && p.institution.toLowerCase().includes(query));
      
    return matchesTopic && matchesCountry && matchesSearch;
  });
  
  let filterText = `顯示符合的 ${filtered.length} 篇論文`;
  let filterDetails = [];
  if (selectedDashboardTopic) filterDetails.push(`主題: ${selectedDashboardTopic}`);
  if (selectedDashboardCountry) {
    const cName = allPapers.find(p => p.country === selectedDashboardCountry)?.country_name || selectedDashboardCountry;
    filterDetails.push(`地區: ${cName}`);
  }
  if (filterDetails.length > 0) {
    filterText += ` (${filterDetails.join(' | ')})`;
  } else {
    filterText += ` (主題: 全部 | 地區: 全部)`;
  }
  document.getElementById("filtered-papers-count").textContent = filterText + '：';
  
  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center;color:var(--text-secondary);padding:40px;">沒有找到符合篩選條件的論文。</div>`;
    return;
  }
  
  filtered.forEach(paper => {
    const card = document.createElement("div");
    card.className = "paper-item";
    card.style.marginBottom = "10px";
    
    const isPaperStarred = starredPapers.includes(paper.paper_id);
    let dayZh = paper.day.replace("Monday", "週一").replace("Tuesday", "週二").replace("Wednesday", "週三").replace("Thursday", "週四").replace("Friday", "週五");
    
    const flag = getFlagEmoji(paper.country);
    let regionBadge = '';
    if (paper.country && paper.country !== 'Unknown') {
      regionBadge = `
        <span class="paper-meta-session" style="background: rgba(6, 182, 212, 0.05); border-color: rgba(6, 182, 212, 0.15); color: var(--color-secondary); display: inline-flex; align-items: center; gap: 4px; cursor: default;">
          ${flag} ${paper.country_name} · ${paper.institution}
        </span>
      `;
    }
    
    card.innerHTML = `
      <span class="paper-id-badge">ID ${paper.paper_id}</span>
      <div class="paper-content" style="flex: 1;">
        <div class="paper-title-text">${paper.title}</div>
        <div class="paper-authors" style="margin-top: 2px;">${paper.authors}</div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: 4px;">
          <div class="paper-meta-session" onclick="goToSession('${paper.sessionTitle}')" title="點擊在日程表中定位此場次">
            <i class="fa-solid fa-clock"></i> ${dayZh} · ${paper.time} · 門牌 ${paper.room} (${paper.sessionTitle})
          </div>
          ${regionBadge}
        </div>
      </div>
      <button class="star-btn ${isPaperStarred ? 'starred' : ''}" style="margin-left: 15px;" onclick="togglePaperStar('${paper.paper_id}')">
        <i class="${isPaperStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
      </button>
    `;
    container.appendChild(card);
  });
};

window.searchPapers = function() {
  dashboardSearchQuery = document.getElementById("dashboard-search-input").value;
  renderDashboardPapers();
};

window.clearDashboardFilters = function() {
  selectedDashboardTopic = null;
  selectedDashboardCountry = null;
  dashboardSearchQuery = "";
  document.getElementById("dashboard-search-input").value = "";
  
  // Clear word cloud tags active state
  document.querySelectorAll(".word-cloud-tag").forEach(item => item.classList.remove("active"));
  const firstTag = document.querySelector(".word-cloud-tag");
  if (firstTag) firstTag.classList.add("active");
  
  // Clear map selection
  if (worldMapInstance) {
    worldMapInstance.clearSelectedRegions();
  }
  updateMapSelectionStatus();
  renderTopCountriesList();
  
  renderDashboardPapers();
};

window.togglePaperStar = function(paperId) {
  const index = starredPapers.indexOf(paperId);
  if (index > -1) {
    starredPapers.splice(index, 1);
  } else {
    starredPapers.push(paperId);
  }
  localStorage.setItem('aied_starred_papers', JSON.stringify(starredPapers));
  updateDashboardStats();
  renderDashboardPapers();
  updateRecommendations();
  renderSchedule();
  renderItinerary(); // Synchronize My Itinerary tab!
};

window.goToSession = function(sessionTitle) {
  const session = scheduleData.find(s => s.title === sessionTitle);
  if (!session) return;
  
  currentDay = session.day;
  currentTrack = "all";
  document.getElementById("filter-track").value = "all";
  document.getElementById("filter-starred").checked = false;
  showStarredOnly = false;
  
  switchTab('tab-schedule');
  
  renderDayFilters();
  renderSchedule();
  
  if (!expandedSessions.includes(sessionTitle)) {
    expandedSessions.push(sessionTitle);
  }
  renderSchedule();
  
  setTimeout(() => {
    const rows = document.querySelectorAll("#schedule-tbody tr");
    for (let row of rows) {
      if (row.textContent.includes(sessionTitle)) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        row.style.transition = "background 0.5s ease";
        row.style.background = "rgba(139, 92, 246, 0.25)";
        setTimeout(() => {
          row.style.background = "";
        }, 2500);
        break;
      }
    }
  }, 150);
};


// ==========================================
// 9. MY ITINERARY TAB LOGIC (Timeline View)
// ==========================================
window.renderItinerary = function() {
  const sessionsContainer = document.getElementById("itinerary-sessions-container");
  const papersContainer = document.getElementById("itinerary-papers-container");
  
  if (!sessionsContainer || !papersContainer) return;
  
  // 1. Render Starred/Planned Sessions Timeline
  sessionsContainer.innerHTML = "";
  
  // We include a session if the session itself is starred, OR if it has a starred paper
  const plannedSessionsData = scheduleData.filter(s => {
    const sId = getUniqueId(s);
    const isSessionStarred = starredSessions.includes(sId);
    
    // Check if any papers in this session are starred
    let hasStarredPaper = false;
    if (sessionDetailsData[s.title] && sessionDetailsData[s.title].papers) {
      hasStarredPaper = sessionDetailsData[s.title].papers.some(p => starredPapers.includes(p.paper_id));
    }
    
    return isSessionStarred || hasStarredPaper;
  });
  
  if (plannedSessionsData.length === 0) {
    sessionsContainer.innerHTML = `
      <div style="text-align:center; color:var(--text-secondary); padding:40px; border:1px dashed rgba(255,255,255,0.05); border-radius:12px;">
        <i class="fa-regular fa-star" style="font-size:2rem; color:var(--text-muted); margin-bottom:12px; display:block;"></i>
        您尚未規劃任何行程。<br>
        <span style="font-size:0.85rem; color:var(--text-muted);">請前往「日程規劃器」點擊 ⭐ 標記場次，或在「論文主題儀表板」標記感興趣的論文！</span>
      </div>`;
  } else {
    const dayOrder = { "Monday  June 29": 1, "Tuesday  June 30": 2, "Wednesday July 1": 3, "Thursday July 2": 4, "Friday July 3": 5 };
    plannedSessionsData.sort((a, b) => {
      if (dayOrder[a.day] !== dayOrder[b.day]) {
        return dayOrder[a.day] - dayOrder[b.day];
      }
      const timeA = a.time.split('-')[0].trim();
      const timeB = b.time.split('-')[0].trim();
      return timeA.localeCompare(timeB);
    });
    
    // Group by Day
    const sessionsByDay = {};
    plannedSessionsData.forEach(s => {
      if (!sessionsByDay[s.day]) {
        sessionsByDay[s.day] = [];
      }
      sessionsByDay[s.day].push(s);
    });
    
    // Render timeline grouped by day
    for (let day in sessionsByDay) {
      let dayZh = day.replace("Monday", "週一 (Mon)").replace("Tuesday", "週二 (Tue)").replace("Wednesday", "週三 (Wed)").replace("Thursday", "週四 (Thu)").replace("Friday", "週五 (Fri)");
      
      const dayHeader = document.createElement("div");
      dayHeader.className = "itinerary-day-header";
      dayHeader.style.cssText = "font-family: var(--font-heading); font-size: 1.15rem; font-weight: 700; color: var(--color-secondary); margin: 20px 0 10px 0; display: flex; align-items: center; gap: 8px;";
      dayHeader.innerHTML = `<i class="fa-regular fa-calendar" style="color: var(--color-secondary);"></i> ${dayZh}`;
      sessionsContainer.appendChild(dayHeader);
      
      const timelineContainer = document.createElement("div");
      timelineContainer.className = "itinerary-timeline";
      timelineContainer.style.cssText = "display: flex; flex-direction: column; gap: 15px; border-left: 2px solid rgba(139, 92, 246, 0.15); padding-left: 20px; margin-left: 10px; margin-bottom: 20px;";
      
      sessionsByDay[day].forEach(session => {
        const sId = getUniqueId(session);
        const isSessionStarred = starredSessions.includes(sId);
        
        let tagClass = "tag-general";
        if (session.track === "AIED") tagClass = "tag-aied";
        else if (session.track === "EDM") tagClass = "tag-edm";
        else if (session.track === "L@S") tagClass = "tag-las";
        
        let fullSessionName = session.title;
        if (sessionDetailsData[session.title] && sessionDetailsData[session.title].title) {
          fullSessionName = `${session.title} — ${sessionDetailsData[session.title].title}`;
        }
        
        const hasDetails = sessionDetailsData[session.title] && sessionDetailsData[session.title].papers && sessionDetailsData[session.title].papers.length > 0;
        let papersListHtml = "";
        
        if (hasDetails) {
          const papers = sessionDetailsData[session.title].papers;
          
          // Display the papers, but highlight the starred ones and the user's own paper (ID 307)
          papersListHtml = `
            <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.06);">
              <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 6px;">📋 本場次發表論文：</div>
              <div style="display:flex; flex-direction:column; gap:6px;">
                ${papers.map(p => {
                  const isPaperStarred = starredPapers.includes(p.paper_id);
                  const isOwnPaper = p.paper_id === "307";
                  
                  let paperStyle = "background: rgba(255,255,255,0.005); border: 1px solid rgba(255,255,255,0.01);";
                  let badgeHtml = "";
                  
                  if (isOwnPaper) {
                    paperStyle = "background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25);";
                    badgeHtml = `<span style="color:var(--color-warning); font-weight:700; font-size:0.7rem; background:rgba(245,158,11,0.15); padding:1px 5px; border-radius:4px; border:1px solid rgba(245,158,11,0.25); margin-right:4px;"><i class="fa-solid fa-trophy"></i> 您的發表</span>`;
                  } else if (isPaperStarred) {
                    paperStyle = "background: rgba(6, 182, 212, 0.08); border: 1px solid rgba(6, 182, 212, 0.25);";
                    badgeHtml = `<span style="color:var(--color-secondary); font-weight:700; font-size:0.7rem; background:rgba(6,182,212,0.15); padding:1px 5px; border-radius:4px; border:1px solid rgba(6,182,212,0.25); margin-right:4px;"><i class="fa-solid fa-star"></i> 預定聽取</span>`;
                  }
                  
                  const flag = getFlagEmoji(p.country);
                  let regionBadge = '';
                  if (p.country && p.country !== 'Unknown') {
                    regionBadge = `
                      <span style="font-size:0.72rem; color:var(--text-secondary); background:rgba(255,255,255,0.02); border:1px solid var(--border-color); padding:1px 6px; border-radius:4px; display:inline-flex; align-items:center; gap:4px; margin-top:2px;">
                        ${flag} ${p.country_name} · ${p.institution}
                      </span>
                    `;
                  }
                  
                  return `
                    <div style="font-size: 0.82rem; line-height: 1.4; color: var(--text-primary); display:flex; justify-content:space-between; align-items:flex-start; padding:6px 10px; border-radius:8px; ${paperStyle}">
                      <div style="flex:1; padding-right: 8px;">
                        <span style="color:var(--color-secondary); font-weight:700; font-size:0.75rem; background:rgba(6,182,212,0.1); padding:1px 5px; border-radius:4px; border:1px solid rgba(6,182,212,0.15); margin-right:4px;">ID ${p.paper_id}</span>
                        ${badgeHtml}
                        <strong>${p.title}</strong>
                        <div style="font-size:0.72rem; color:var(--text-secondary); margin-top:2px;">${p.authors}</div>
                        ${regionBadge}
                      </div>
                      <button class="star-btn ${isPaperStarred ? 'starred' : ''}" style="padding:0; margin-left:8px;" onclick="event.stopPropagation(); togglePaperStar('${p.paper_id}')">
                        <i class="${isPaperStarred ? 'fa-solid' : 'fa-regular'} fa-star" style="font-size:0.85rem;"></i>
                      </button>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }
        
        const card = document.createElement("div");
        card.className = "card";
        card.style.cssText = "background: var(--bg-card); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--border-color); position: relative; margin-bottom: 5px; transition: var(--transition);";
        
        // Add timeline node dot styled with star color coding
        card.innerHTML = `
          <div style="position: absolute; left: -27px; top: 22px; width: 12px; height: 12px; border-radius: 50%; background: ${isSessionStarred ? 'var(--color-warning)' : 'var(--color-secondary)'}; border: 3px solid var(--bg-primary); box-shadow: 0 0 8px ${isSessionStarred ? 'rgba(245, 158, 11, 0.4)' : 'rgba(6, 182, 212, 0.4)'};"></div>
          <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
            <div>
              <span class="session-tag ${tagClass}">${session.track === 'General' ? '大會' : session.track}</span>
              <span style="font-size:0.82rem; font-weight:700; color:var(--color-secondary); margin-left:4px;">
                <i class="fa-regular fa-clock"></i> ${session.time}
              </span>
            </div>
            <div style="display: flex; gap: 10px; align-items: center;">
              <button onclick="goToSession('${session.title}')" class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; border-radius: 6px;" title="在日程表定位此場次">
                <i class="fa-solid fa-location-arrow"></i> 定位
              </button>
              <button onclick="toggleStar('${sId}')" style="background:transparent; border:none; color:${isSessionStarred ? 'var(--color-warning)' : 'var(--text-muted)'}; cursor:pointer; font-size:1rem;" title="${isSessionStarred ? '移出規劃' : '加入規劃'}">
                <i class="${isSessionStarred ? 'fa-solid' : 'fa-regular'} fa-star"></i>
              </button>
            </div>
          </div>
          <div style="font-weight:700; font-size:1rem; margin-bottom:6px; color:var(--text-primary);">
            ${fullSessionName}
          </div>
          <div style="font-size:0.82rem; color:var(--text-secondary); display: flex; align-items: center; gap: 4px;">
            <i class="fa-solid fa-location-dot" style="color:var(--color-secondary);"></i> 會議廳: <strong>Room ${session.room}</strong>
          </div>
          ${papersListHtml}
        `;
        timelineContainer.appendChild(card);
      });
      
      sessionsContainer.appendChild(timelineContainer);
    }
  }
  
  // 2. Render Starred Papers Sidebar
  papersContainer.innerHTML = "";
  
  const starredPapersData = allPapers.filter(p => starredPapers.includes(p.paper_id));
  
  if (starredPapersData.length === 0) {
    papersContainer.innerHTML = `
      <div style="text-align:center; color:var(--text-secondary); padding:30px; border:1px dashed rgba(255,255,255,0.05); border-radius:12px;">
        <i class="fa-regular fa-bookmark" style="font-size:1.8rem; color:var(--text-muted); margin-bottom:10px; display:block;"></i>
        尚未標記個別論文。<br>
        <span style="font-size:0.8rem; color:var(--text-muted);">請前往「論文主題儀表板」點擊 ⭐ 標記！</span>
      </div>`;
  } else {
    starredPapersData.forEach(paper => {
      const card = document.createElement("div");
      card.className = "paper-item";
      card.style.background = "rgba(255, 255, 255, 0.02)";
      card.style.borderColor = "var(--border-color)";
      card.style.marginBottom = "10px";
      
      let dayZh = paper.day.replace("Monday", "週一").replace("Tuesday", "週二").replace("Wednesday", "週三").replace("Thursday", "週四").replace("Friday", "週五");
      
      const flag = getFlagEmoji(paper.country);
      let regionBadge = '';
      if (paper.country && paper.country !== 'Unknown') {
        regionBadge = `
          <div style="font-size:0.72rem; color:var(--text-secondary); margin-top:4px; display:inline-flex; align-items:center; gap:4px; background:rgba(255,255,255,0.02); border:1px solid var(--border-color); padding:1px 6px; border-radius:4px;">
            ${flag} ${paper.country_name} · ${paper.institution}
          </div>
        `;
      }
      
      card.innerHTML = `
        <span class="paper-id-badge">ID ${paper.paper_id}</span>
        <div class="paper-content" style="flex: 1;">
          <div class="paper-title-text" style="font-size: 0.85rem;">${paper.title}</div>
          <div class="paper-authors" style="font-size: 0.75rem; margin-top: 2px;">${paper.authors}</div>
          <div style="display: flex; flex-direction: column; align-items: flex-start;">
            <div class="paper-meta-session" onclick="goToSession('${paper.sessionTitle}')" title="點擊在日程表中定位此場次" style="font-size: 0.7rem;">
              <i class="fa-solid fa-clock"></i> ${dayZh} · Room ${paper.room}
            </div>
            ${regionBadge}
          </div>
        </div>
        <button class="star-btn starred" style="margin-left: 10px;" onclick="togglePaperStar('${paper.paper_id}')" title="移出追蹤">
          <i class="fa-solid fa-star" style="font-size: 0.85rem;"></i>
        </button>
      `;
      papersContainer.appendChild(card);
    });
  }
};
