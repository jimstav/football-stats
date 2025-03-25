import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const consoleSummary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
consoleSummary.buildAndPrintReport(matchReader.matches);

const htmlSummary = new Summary(
  new WinsAnalysis('Southampton'),
  new HtmlReport()
);
htmlSummary.buildAndPrintReport(matchReader.matches);
