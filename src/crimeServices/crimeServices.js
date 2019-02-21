import crimes from "../data/crimes.json";
// import DropFileComponent from "../components/dropFileComponent";

class CrimeService {
  static getCrimes() {
    return crimes;
  }
}
export default CrimeService;
