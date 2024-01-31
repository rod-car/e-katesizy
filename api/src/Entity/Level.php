<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;
use App\Repository\LevelRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: LevelRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['get']],
    operations: [
        new Get(normalizationContext: ['groups' => ['get', 'item']]),
    ]
)]
#[GetCollection(), Post(), Put(), Delete()]
class Level
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['get'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['get', 'read:sc'])]
    private ?string $label = null;

    #[ORM\Column(length: 255)]
    #[Groups(['item', 'read:sc'])]
    private ?string $notation = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['item'])]
    private ?string $description = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['item'])]
    private ?int $position = null;

    #[ORM\OneToMany(mappedBy: 'level', targetEntity: StudentClass::class, orphanRemoval: true)]
    private Collection $studentClass;

    public function __construct()
    {
        $this->studentClass = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    public function getNotation(): ?string
    {
        return $this->notation;
    }

    public function setNotation(string $notation): static
    {
        $this->notation = $notation;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPosition(): ?int
    {
        return $this->position;
    }

    public function setPosition(?int $position): static
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @return Collection<int, StudentClass>
     */
    public function getStudentClass(): Collection
    {
        return $this->studentClass;
    }

    public function addStudentClass(StudentClass $studentClass): static
    {
        if (!$this->studentClass->contains($studentClass)) {
            $this->studentClass->add($studentClass);
            $studentClass->setLevel($this);
        }

        return $this;
    }

    public function removeStudentClass(StudentClass $studentClass): static
    {
        if ($this->studentClass->removeElement($studentClass)) {
            // set the owning side to null (unless already changed)
            if ($studentClass->getLevel() === $this) {
                $studentClass->setLevel(null);
            }
        }

        return $this;
    }
}
