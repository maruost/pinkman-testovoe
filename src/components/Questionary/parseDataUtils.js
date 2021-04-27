export const initialDataUser = {
  name: "",
  dob: "",
  phone: "",
  eventId: { eventId: "", label: "" },
  opt1: { opt1: 0, option: "" },
  opt2: { opt2: 0, option: "" },
  opt3: { opt3: 0, option: "" },
};

export const initialDataEntity = {
  cName: "",
  pos: "",
  phone: "",
  eventId: { eventId: "", label: "" },
  opt1: { opt1: 0, option: "" },
  opt2: { opt2: 0, option: "" },
  opt3: { opt3: 0, option: "" },
};

export const parseDataToSend = (data, status) => {
  const eventId = data.eventId.eventId;
  const opt1 = data.opt1.opt1;
  const opt2 = data.opt2.opt2;
  const opt3 = data.opt3.opt3;
  if (status) {
    return {
      cName: data.cName,
      pos: data.pos,
      phone: data.phone,
      eventId: eventId,
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
    };
  } else {
    return {
      name: data.name,
      dob: data.dob,
      phone: data.phone,
      eventId: eventId,
      opt1: opt1,
      opt2: opt2,
      opt3: opt3,
    };
  }
};
