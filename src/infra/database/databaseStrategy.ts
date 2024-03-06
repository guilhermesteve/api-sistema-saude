export interface IDatabseStrategy {
    connect(): Promise<void>
    disconnect() : Promise<void>
}