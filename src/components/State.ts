export interface State {
    count: number
    inc: () => {}
    childrenState: {
        count1: number
        count2: number
    }
}
