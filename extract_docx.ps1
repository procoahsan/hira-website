# Load required .NET assemblies
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Xml
Add-Type -AssemblyName System.Xml.Linq
Add-Type -AssemblyName WindowsBase

# Resolve the docx file path (assumes the script is in the same folder as the .docx)
$docxPath = Resolve-Path -Path 'Website Enhancement.docx' -ErrorAction Stop

# Open the docx as a zip archive
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)

# Get the main document part
$entry = $zip.GetEntry('word/document.xml')
if (-not $entry) {
    Write-Error "document.xml not found in $docxPath"
    $zip.Dispose()
    exit 1
}

# Open a stream to read the part
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$content = $reader.ReadToEnd()
$reader.Close()
$stream.Close()

# Load the XML
$xmlDoc = New-Object System.Xml.XmlDocument
$xmlDoc.LoadXml($content)

# Create a namespace manager
$ns = New-Object System.Xml.XmlNamespaceManager($xmlDoc.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')

# Select all paragraphs
$paragraphs = $xmlDoc.SelectNodes('//w:p', $ns)

# Extract text from each paragraph
foreach ($p in $paragraphs) {
    $texts = $p.SelectNodes('.//w:t', $ns)
    $line = ''
    foreach ($t in $texts) {
        $line += $t.InnerText
    }
    Write-Output $line
}

# Cleanup
$zip.Dispose()