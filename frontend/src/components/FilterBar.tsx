import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const FilterBar = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Make */}
        <div>
          <Label className="mb-2 block text-sm">Make</Label>
          <Select>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All Makes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Makes</SelectItem>
              <SelectItem value="bmw">BMW</SelectItem>
              <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
              <SelectItem value="audi">Audi</SelectItem>
              <SelectItem value="tesla">Tesla</SelectItem>
              <SelectItem value="porsche">Porsche</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Body Type */}
        <div>
          <Label className="mb-2 block text-sm">Body Type</Label>
          <Select>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="sedan">Sedan</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
              <SelectItem value="coupe">Coupe</SelectItem>
              <SelectItem value="convertible">Convertible</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Year */}
        <div>
          <Label className="mb-2 block text-sm">Year</Label>
          <Select>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Any Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Year</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div>
          <Label className="mb-2 block text-sm">Max Price: $150,000</Label>
          <Slider
            defaultValue={[150000]}
            max={200000}
            step={5000}
            className="mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
