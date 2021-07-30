export class RestUrl {
  public static get login(): string { return `/login`; }
  public static get vaccinCenterlogin(): string { return `/vaccineCenterlogin`; }
  public static get signUp(): string { return `/users/register`; }
  public static get sendOTP(): string { return `/users/checkotp`; }
  public static get listOfCenters(): string { return `/resource/centersList`; }
  public static get detailsOfCenters(): string { return `/detailsOfCenters`; }
  public static get bookSlot(): string { return `/bookslot`; }
  public static get appointmentUser(): string { return `/appointmentUser`; }
  public static get verifyUserAppointmentToken(): string { return `/verifyVaccineToken`; }
  public static get getVaccinatedUser(): string { return `/getVaccinatedUser`; }
  // public static get ascendingSort(): string { return `?_sort=Price&_order=asc`; }
  // public static get descendingSort(): string { return `?_sort=Price&_order=desc`; }

}
