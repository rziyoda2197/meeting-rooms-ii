function minMeetingRooms(intervals) {
    if (intervals.length === 0) return 0;

    intervals.sort((a, b) => a[0] - b[0]);

    let rooms = [intervals[0][1]];
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];

        let index = binarySearch(rooms, start);
        if (index === rooms.length) {
            rooms.push(end);
        } else {
            rooms[index] = Math.min(rooms[index], end);
        }
    }

    return rooms.length;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}

let intervals = [[0, 30],[5, 10],[15, 20]];
console.log(minMeetingRooms(intervals)); // 2
