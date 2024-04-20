export default function RandomIndex({limit = 12}) {
    return Math.floor(Math.random() *  limit)
}