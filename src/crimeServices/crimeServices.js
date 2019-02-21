import crimes from "../data/crimes.json";

class CrimeService {
  static getCrimes() {
    return crimes;
  }
}
export default CrimeService;
