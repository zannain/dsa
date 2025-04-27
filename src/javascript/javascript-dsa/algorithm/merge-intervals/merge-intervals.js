/*class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}*/

function merge(intervals) {
    if (intervals.length < 2) {
      return intervals;
    }
    const mergedIntervals = [];
    intervals.sort((a, b) => a.start - b.start);

    let start = intervals[0].start,
    end = intervals[0].end;

    for (let i = 1; i < intervals.length; i++) {
      let interval = intervals[i];

      if (interval.start <= end) {
        end = Math.max(interval.end, end)
      } else {
        mergedIntervals.push(new Interval(start, end))
        start = interval.start;
        end = interval.end;
      }
    }
    mergedIntervals.push(new Interval(start, end))
    return mergedIntervals;
  }