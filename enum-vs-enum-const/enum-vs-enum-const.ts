enum ProcessState {
  NotStarted,
  InProgress,
  Completed,
  Failed,
}

function getStatus(state: ProcessState): string {
  switch (state) {
    case ProcessState.NotStarted:
      return "The process has not started.";
    case ProcessState.InProgress:
      return "The process is in progress.";
    case ProcessState.Completed:
      return "The process has been completed.";
    case ProcessState.Failed:
      return "The process has failed.";
    default:
      return "Unknown state.";
  }
}

console.log(getStatus(ProcessState.InProgress));
